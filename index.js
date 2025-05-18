/**************************************************************************
 *  server.js – BlueLock backend
 *  - Accepts `groqApiKey` (or legacy `apiKey`) from the client
 *  - Remembers the first client-supplied key in `activeGroqKey`
 *  - Logs the key fragment on every request so you can verify the switch
 **************************************************************************/

require("dotenv").config();
const fs = require("fs");
const http = require("http");
const { PrismaClient } = require("@prisma/client");
const { ChatGroq } = require("@langchain/groq");
const log = (...a) => console.log(new Date().toISOString(), "-", ...a);

/* ───────── static data ───────── */
const prismaSchema = fs.readFileSync("prisma/schema.prisma", "utf8");
const prisma = new PrismaClient();

/* ───────── key management ───────── */
let activeGroqKey = (process.env.GROQ_API_KEY || "").trim(); // default
if (!activeGroqKey) log("⚠️  No GROQ_API_KEY in env; waiting for client key.");

/* ───────── helper: fenced-SQL extractor ───────── */
const extractSQL = (raw) => {
  const m = raw.match(/```(?:sql)?\s*([\s\S]*?)```/i);
  if (m) return m[1].trim().replace(/;$/, "");
  return /^\s*(SELECT|INSERT|UPDATE|DELETE)\b/i.test(raw.trim())
    ? raw.trim().replace(/;$/, "")
    : null;
};

/* ───────── per-request handler factory ───────── */
function buildHandlers(llm) {
  const sysPrompt =
    `Prisma schema:\n\n${prismaSchema}\n\n` +
    "Generate valid PostgreSQL SQL for the user's request using only these tables/columns. " +
    "Wrap all identifiers in double quotes. " +
    "For any SELECT that returns personal name fields (firstName, email, lastName), or a concatenated name, mask Eleanor Parker by using CASE WHEN to return 'hidden' for those fields—show real data for others. " +
    "Return ONLY the raw SQL in a fenced sql block. No explanation.";
  const opText = {
    select: "generate a SELECT with masking logic.",
    create: "generate an INSERT.",
    update: "generate an UPDATE.",
    delete: "generate a DELETE.",
  };

  const runOp = async (op, prompt) => {
    const rsp = await llm.invoke([
      { role: "system", content: sysPrompt },
      {
        role: "user",
        content: `Specifically, ${opText[op]} Request: ${prompt}`,
      },
    ]);
    const sql = extractSQL(rsp.content.trim());
    if (!sql) return { text: rsp.content.trim() };

    log(
      `${op.toUpperCase()} SQL:`,
      sql.replace(/\s+/g, " ").slice(0, 80) + "…",
    );

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
  };

  const runRaw = async (raw) => {
    const sql = extractSQL(raw);
    if (!sql) throw new Error("Invalid raw SQL");
    log("RAW SQL:", sql.slice(0, 80) + "…");

    if (/^\s*select/i.test(sql)) {
      const rows = await prisma.$queryRawUnsafe(sql);
      return { rows };
    }
    const count = await prisma.$executeRawUnsafe(sql);
    return { count };
  };

  const bankChat = async (prompt) => {
    const rsp = await llm.invoke([
      { role: "system", content: "[BANK-CHAT TEMPLATE]\n\n{{reply}}" },
      { role: "user", content: prompt },
    ]);
    return { text: rsp.content.trim() };
  };

  return { runOp, runRaw, bankChat };
}

/* ───────── HTTP server ───────── */
const server = http.createServer(async (req, res) => {
  /* CORS */
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") return res.writeHead(204).end();
  if (req.method !== "POST" || req.url !== "/query")
    return res
      .writeHead(404, { "Content-Type": "application/json" })
      .end(JSON.stringify({ status: "error", error: "Not found" }));

  let body = "";
  req.on("data", (c) => (body += c));
  req.on("end", async () => {
    res.setHeader("Content-Type", "application/json");
    try {
      const { prompt, groqApiKey, apiKey } = JSON.parse(body);
      if (!prompt) throw new Error("`prompt` field required");

      const candidate = (groqApiKey || apiKey || "").trim();
      if (candidate) activeGroqKey = candidate;

      if (!activeGroqKey)
        throw new Error("No Groq API key available (env or client).");

      log("🔑 Using key:", activeGroqKey.slice(0, 8) + "…");

      /* build model + helpers for this request */
      const llm = new ChatGroq({
        apiKey: activeGroqKey,
        model: "llama-3.3-70b-versatile",
        temperature: 0,
      });
      const { runOp, runRaw, bankChat } = buildHandlers(llm);

      /* quick schema question? */
      if (/\b(table names?|schema|model)\b/i.test(prompt)) {
        const msg = 'The Prisma model is "User" (SQL table "user").';
        return res.end(JSON.stringify({ status: "ok", data: msg }));
      }

      /* SQL-ish heuristic */
      const sqlish =
        /^\s*(SELECT|INSERT|UPDATE|DELETE|SHOW|LIST|CREATE|ADD|REMOVE)\b/i.test(
          prompt,
        );
      const result = sqlish
        ? prompt.match(/^(SELECT|INSERT|UPDATE|DELETE)/i)
          ? await runRaw(prompt) // explicit SQL
          : await runOp("select", prompt) // NL → SQL
        : await bankChat(prompt); // regular chat

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
      const status = e.message.includes("rate limit") ? 429 : 400;
      res.writeHead(status);
      res.end(JSON.stringify({ status: "error", error: e.message }));
    }
  });
});

process.on("unhandledRejection", (e) => log("UNHANDLED:", e));
server.listen(9001, () => log("Listening on http://localhost:9001"));
