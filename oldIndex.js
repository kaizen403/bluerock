require("dotenv").config();
const fs = require("fs");
const http = require("http");
const { PrismaClient } = require("@prisma/client");
const { ChatGroq } = require("@langchain/groq");
const { initializeAgentExecutorWithOptions } = require("langchain/agents");
const { tool } = require("@langchain/core/tools");
const { z } = require("zod");

/* ───────────────────────────── Helpers ───────────────────────────── */
const log = (...args) => console.log(new Date().toISOString(), "-", ...args);

function extractSQL(raw) {
  const fence = raw.match(/```(?:sql)?\s*([\s\S]*?)```/i);
  if (fence) return fence[1].trim().replace(/;$/, "");
  if (/^\s*(SELECT|INSERT|UPDATE|DELETE)\b/i.test(raw.trim())) {
    return raw.trim().replace(/;$/, "");
  }
  return null;
}

const prismaSchema = fs.readFileSync("prisma/schema.prisma", "utf8");

(async function main() {
  const dbUrl = process.env.DATABASE_URL;
  const groqKey = process.env.GROQ_API_KEY;
  if (!dbUrl || !groqKey) {
    console.error("Error: set DATABASE_URL and GROQ_API_KEY in .env");
    process.exit(1);
  }

  const prisma = new PrismaClient();
  const groqModel = new ChatGroq({
    apiKey: groqKey,
    model: "llama-3.3-70b-versatile",
    temperature: 0,
  });

  const systemPrompt =
    `Prisma schema:\n\n${prismaSchema}\n\n` +
    "Generate valid PostgreSQL SQL for the user's request using only these tables/columns. " +
    "Wrap all identifiers in double quotes. " +
    "For any SELECT that returns personal name fields (firstName, lastName), or a concatenated name, mask Eleanor Parker by using CASE WHEN to return 'hidden' for those fields, showing real data for others. " +
    "Return ONLY the raw SQL in a fenced sql block. No explanation.";

  const opInstructions = {
    select: "generate a SELECT with masking logic as described.",
    create: "generate an INSERT.",
    update: "generate an UPDATE.",
    delete: "generate a DELETE.",
  };

  async function runOp(op, prompt) {
    const resp = await groqModel.invoke([
      { role: "system", content: systemPrompt },
      {
        role: "user",
        content: `Specifically, ${opInstructions[op]} Request: ${prompt}`,
      },
    ]);
    const raw = resp.content.trim();
    const sql = extractSQL(raw);
    if (!sql) return { text: raw };
    log(`${op.toUpperCase()} SQL:`, sql);
    if (op === "select") {
      const rows = await prisma.$queryRawUnsafe(sql);
      const masked = rows.map((r) => {
        if (r.firstName === "hidden" || r.lastName === "hidden")
          r.name = "hidden";
        return r;
      });
      return { rows: masked };
    }
    const count = await prisma.$executeRawUnsafe(sql);
    return { count };
  }

  async function runRaw(rawInput) {
    const sql = extractSQL(rawInput);
    if (!sql) throw new Error("Invalid raw SQL");
    log("RAW SQL:", sql);
    if (/^\s*select/i.test(sql)) {
      const rows = await prisma.$queryRawUnsafe(sql);
      return { rows };
    }
    const count = await prisma.$executeRawUnsafe(sql);
    return { count };
  }

  const makeTool = (name, handler, desc) =>
    tool(async (input) => JSON.stringify(await handler(input)), {
      name,
      description: desc,
      schema: z.string(),
    });

  const tools = [
    makeTool(
      "select",
      (i) => runOp("select", i),
      "SELECT via natural-language prompt",
    ),
    makeTool(
      "create",
      (i) => runOp("create", i),
      "INSERT via natural-language prompt",
    ),
    makeTool(
      "update",
      (i) => runOp("update", i),
      "UPDATE via natural-language prompt",
    ),
    makeTool(
      "delete",
      (i) => runOp("delete", i),
      "DELETE via natural-language prompt",
    ),
    makeTool("rawSql", runRaw, "Execute raw SQL"),
  ];

  const executor = await initializeAgentExecutorWithOptions(tools, groqModel, {
    agentType: "chat-zero-shot-react-description",
    verbose: false,
  });

  const server = http.createServer((req, res) => {
    // --- CORS headers ---
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    if (req.method === "OPTIONS") {
      res.writeHead(204);
      return res.end();
    }

    if (req.method !== "POST" || req.url !== "/query") {
      res.writeHead(404, { "Content-Type": "application/json" });
      return res.end(JSON.stringify({ status: "error", error: "Not found" }));
    }

    let body = "";
    req.on("data", (c) => (body += c));
    req.on("end", async () => {
      res.setHeader("Content-Type", "application/json");
      try {
        const { prompt } = JSON.parse(body);
        if (!prompt) throw new Error("`prompt` field required");
        log("PROMPT:", prompt);

        // If asking for schema info
        if (/\b(table names?|schema|model)\b/i.test(prompt)) {
          const msg = `The Prisma model is named \"User\", which maps to the SQL table \"user\".`;
          return res.end(JSON.stringify({ status: "ok", data: msg }));
        }

        const isRaw = /^\s*(SELECT|INSERT|UPDATE|DELETE)\b/i.test(
          prompt.trim(),
        );
        const result = isRaw
          ? await runRaw(prompt)
          : await runOp("select", prompt);
        res.writeHead(200);
        res.end(
          JSON.stringify(
            { status: "ok", data: result.rows ?? result.count ?? result.text },
            null,
            2,
          ),
        );
      } catch (e) {
        log("ERROR:", e.message);
        res.writeHead(400);
        res.end(JSON.stringify({ status: "error", error: e.message }));
      }
    });
  });

  process.on("unhandledRejection", (e) => log("UNHANDLED:", e));
  server.listen(9001, () => log("Listening on http://localhost:9001"));
})();
