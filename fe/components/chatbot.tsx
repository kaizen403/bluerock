"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MessageCircle, Send, Bot } from "lucide-react";

interface Message {
  type: "user" | "bot";
  content: string;
}

const LS_KEY = "groq_api_key";
const REQUEST_TIMEOUT_MS = 30_000; // 15 s

export default function Chatbot() {
  const [messages, setMessages] = useState<Message[]>([
    {
      type: "bot",
      content:
        "Hello, I’m BlueLock Advanced AI (beta). How can I assist you today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  /* API‑key modal */
  const [apiModal, setApiModal] = useState(false);
  const [apiKey, setApiKey] = useState<string>(() =>
    typeof window !== "undefined" ? localStorage.getItem(LS_KEY) || "" : "",
  );
  const [tempKey, setTempKey] = useState("");

  useEffect(() => {
    if (apiKey) localStorage.setItem(LS_KEY, apiKey);
  }, [apiKey]);

  const isJsonPretty = (t: string) => {
    t = t.trim();
    return (
      (t.startsWith("{") && t.endsWith("}")) ||
      (t.startsWith("[") && t.endsWith("]"))
    );
  };

  const looksLikeRateLimit = (json: any, status: number) => {
    if (status === 429) return true;
    if (!json) return false;
    if (typeof json.error === "string" && /rate[_\s-]?limit/i.test(json.error))
      return true;
    if (json.error?.code === "rate_limit_exceeded") return true;
    if (
      typeof json.error?.message === "string" &&
      /rate[_\s-]?limit/i.test(json.error.message)
    )
      return true;
    return false;
  };

  const handleSend = async () => {
    const trimmed = input.trim();
    if (!trimmed) return;

    setMessages((p) => [
      ...p,
      { type: "user", content: trimmed },
      { type: "bot", content: "Processing your request..." },
    ]);
    setInput("");

    /* timeout handling */
    const ctrl = new AbortController();
    const id = setTimeout(() => ctrl.abort(), REQUEST_TIMEOUT_MS);

    try {
      const res = await fetch("http://localhost:9001/query", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: trimmed, groqApiKey: apiKey }),
        signal: ctrl.signal,
      }).finally(() => clearTimeout(id));

      const json = await res.json().catch(() => ({}));

      if (looksLikeRateLimit(json, res.status)) {
        setApiModal(true);
        setMessages((p) => p.slice(0, -1));
        return;
      }

      let botMsg =
        json.status === "ok"
          ? typeof json.data === "object"
            ? JSON.stringify(json.data, null, 2)
            : String(json.data)
          : `Error: ${json.error || "Unexpected error"}`;

      setMessages((p) => [...p.slice(0, -1), { type: "bot", content: botMsg }]);
    } catch (e) {
      /* abort == timeout  → show API‑key modal */
      if ((e as Error).name === "AbortError") {
        setApiModal(true);
        setMessages((p) => p.slice(0, -1));
      } else {
        setMessages((p) => [
          ...p.slice(0, -1),
          { type: "bot", content: "Sorry, something went wrong." },
        ]);
      }
    }
  };

  return (
    <>
      <div className="fixed bottom-4 right-4 z-50">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              size="icon"
              className="h-12 w-12 rounded-full shadow-lg bg-primary hover:bg-primary/90"
            >
              <MessageCircle className="h-6 w-6" />
            </Button>
          </SheetTrigger>

          <SheetContent className="w-[90vw] sm:w-[440px] h-[600px] flex flex-col p-0">
            <SheetHeader className="px-6 py-4 border-b">
              <div className="flex items-center gap-2">
                <Bot className="h-5 w-5 text-primary" />
                <SheetTitle>BlueLock Assistant</SheetTitle>
              </div>
            </SheetHeader>

            <ScrollArea className="flex-1 p-6">
              <div className="space-y-4">
                {messages.map((m, i) => (
                  <div
                    key={i}
                    className={`flex ${
                      m.type === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`rounded-lg px-4 py-2 max-w-[80%] shadow-sm ${
                        m.type === "user"
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted"
                      }`}
                    >
                      {isJsonPretty(m.content) ? (
                        <pre className="whitespace-pre-wrap font-mono text-sm">
                          {m.content}
                        </pre>
                      ) : (
                        <span>{m.content}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            <div className="border-t p-4 bg-background">
              <div className="flex gap-2">
                <Input
                  placeholder="Type your message..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  className="flex-1"
                />
                <Button size="icon" onClick={handleSend}>
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* API‑key modal */}
      <Dialog open={apiModal} onOpenChange={setApiModal}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Provide your Groq API key</DialogTitle>
          </DialogHeader>
          <p className="text-sm">
            Either we hit Groq’s rate limit or the request timed out. Paste your
            own API key to continue.
          </p>
          <div className="flex gap-2 mt-4">
            <Input
              placeholder="sk‑..."
              value={tempKey}
              onChange={(e) => setTempKey(e.target.value)}
              className="flex-1"
            />
            <Button
              onClick={() => {
                setApiKey(tempKey.trim());
                setTempKey("");
                setApiModal(false);
              }}
            >
              Save
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
