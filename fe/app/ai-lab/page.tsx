"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Brain, Sparkles, Bot, Network, Lock, Cpu } from "lucide-react";

export default function AILabPage() {
  const [activeDemo, setActiveDemo] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,hsl(var(--chart-1)/0.2),transparent_50%),radial-gradient(ellipse_at_bottom,hsl(var(--chart-2)/0.2),transparent_50%)]"></div>

        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              BlueRock AI Lab
              <span className="inline-block ml-2 px-3 py-1 text-sm bg-chart-1/20 text-chart-1 rounded-full">
                Beta
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Experience the future of banking with our advanced AI initiatives
              and experimental features.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Advanced Chatbot Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Bot className="h-6 w-6 text-chart-1" />
                    <CardTitle>Advanced AI Assistant</CardTitle>
                  </div>
                  <CardDescription>
                    Our next-generation chatbot powered by advanced language
                    models
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <h3 className="font-semibold mb-2 flex items-center">
                        <Brain className="h-4 w-4 mr-2" />
                        Enhanced Understanding
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Processes complex financial queries with contextual
                        awareness and personalized responses.
                      </p>
                    </div>
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <h3 className="font-semibold mb-2 flex items-center">
                        <Lock className="h-4 w-4 mr-2" />
                        Secure Conversations
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        End-to-end encrypted communication with advanced
                        security protocols.
                      </p>
                    </div>
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <h3 className="font-semibold mb-2 flex items-center">
                        <Sparkles className="h-4 w-4 mr-2" />
                        Smart Features
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Transaction analysis, spending insights, and financial
                        recommendations.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Network className="h-6 w-6 text-chart-2" />
                    <CardTitle>MCP Development</CardTitle>
                  </div>
                  <CardDescription>
                    Model Context Protocol - Next-gen banking intelligence
                    analytics in bluerock chatbot
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <h3 className="font-semibold mb-2 flex items-center">
                        <Cpu className="h-4 w-4 mr-2" />
                        Advanced Processing
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Real-time financial data processing with predictive
                        analytics and market insights.
                      </p>
                    </div>
                    <div className="relative overflow-hidden p-6 bg-gradient-to-br from-chart-1/20 to-chart-2/20 rounded-lg backdrop-blur-sm">
                      <div className="absolute inset-0 bg-background/10"></div>
                      <div className="relative">
                        <h4 className="font-semibold mb-3">
                          Development Status
                        </h4>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-sm">Core Engine</span>
                            <span className="text-sm text-chart-1">90%</span>
                          </div>
                          <div className="h-2 bg-muted rounded-full">
                            <div className="h-full w-[90%] bg-chart-1 rounded-full"></div>
                          </div>

                          <div className="flex justify-between items-center">
                            <span className="text-sm">Security Protocol</span>
                            <span className="text-sm text-red-700">8%</span>
                          </div>
                          <div className="h-2 bg-muted rounded-full">
                            <div className="h-full w-[8%] bg-red-600 rounded-full"></div>
                          </div>

                          <div className="flex justify-between items-center">
                            <span className="text-sm">Integration</span>
                            <span className="text-sm text-chart-3">70%</span>
                          </div>
                          <div className="h-2 bg-muted rounded-full">
                            <div className="h-full w-[70%] bg-chart-3 rounded-full"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

