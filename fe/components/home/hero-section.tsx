"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Lock, BarChart3, Landmark } from "lucide-react";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

export default function HeroSection() {
  const router = useRouter();
  const [statIndex, setStatIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const financialStats = [
    { figure: "$25B+", label: "Assets under management" },
    { figure: "99.99%", label: "Online banking uptime" },
    { figure: "24/7", label: "Customer support" },
    { figure: "250+", label: "Branches nationwide" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setStatIndex((prevIndex) => (prevIndex + 1) % financialStats.length);
        setIsVisible(true);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden">
      {/* Background gradient */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-background to-background/50"
        style={{
          backgroundImage:
            "radial-gradient(circle at 10% 10%, hsl(var(--chart-1) / 0.1), transparent 40%), " +
            "radial-gradient(circle at 90% 90%, hsl(var(--chart-2) / 0.1), transparent 40%)",
        }}
      />

      <div className="container relative z-10 mx-auto px-4 py-16 md:py-24 lg:py-32">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16 lg:gap-24 items-center">
          <div className="flex flex-col space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-chart-1 to-chart-2">
                  Banking
                </span>{" "}
                made for your future
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-muted-foreground max-w-md"
            >
              Experience premium banking with personalized solutions, cutting-edge security, and exceptional service at BlueRock Bank.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                className="group"
                onClick={() => router.push("/personal")}
              >
                Explore Services
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => router.push("/contact")}
              >
                Contact Us
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="pt-6"
            >
              <div className="flex flex-col">
                <div className="h-16 md:h-20 flex items-center overflow-hidden">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 10 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col"
                  >
                    <span className="text-3xl md:text-4xl font-bold text-primary">
                      {financialStats[statIndex].figure}
                    </span>
                    <span className="text-sm md:text-base text-muted-foreground">
                      {financialStats[statIndex].label}
                    </span>
                  </motion.div>
                </div>
                
                <div className="flex space-x-1 mt-2">
                  {financialStats.map((_, idx) => (
                    <button
                      key={idx}
                      className={cn(
                        "h-1.5 rounded-full transition-all duration-300",
                        idx === statIndex
                          ? "bg-primary w-8"
                          : "bg-primary/20 w-4"
                      )}
                      onClick={() => {
                        setIsVisible(false);
                        setTimeout(() => {
                          setStatIndex(idx);
                          setIsVisible(true);
                        }, 500);
                      }}
                      aria-label={`Show stat ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-card to-muted p-6 md:p-8 rounded-xl backdrop-blur-sm border border-border shadow-xl">
              <div className="absolute -right-2 -top-2 bg-chart-1/20 w-24 h-24 rounded-full blur-2xl" />
              <div className="absolute -left-2 -bottom-2 bg-chart-2/20 w-24 h-24 rounded-full blur-2xl" />
              
              <div className="relative z-10">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Shield className="w-5 h-5 mr-2 text-chart-1" /> 
                  BlueRock Advantage
                </h3>
                
                <div className="space-y-4">
                  <FeatureCard 
                    icon={<Lock className="h-5 w-5 text-chart-1" />}
                    title="Banking-Grade Security"
                    description="Your finances are protected by state-of-the-art encryption and fraud detection systems."
                  />
                  
                  <FeatureCard 
                    icon={<BarChart3 className="h-5 w-5 text-chart-2" />}
                    title="Wealth Building Tools"
                    description="Personalized financial insights and investment opportunities to grow your portfolio."
                  />
                  
                  <FeatureCard 
                    icon={<Landmark className="h-5 w-5 text-chart-3" />}
                    title="Premium Services"
                    description="Enjoy concierge banking, exclusive rates, and personalized financial advising."
                  />
                </div>
                
                <div className="mt-6">
                  <Button 
                    variant="secondary" 
                    className="w-full"
                    onClick={() => router.push("/personal/accounts")}
                  >
                    Open an Account
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon, title, description }: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
}) {
  return (
    <div className="flex p-3 bg-card/50 rounded-lg border border-border/50 transition-all duration-200 hover:border-primary/20 hover:bg-card/80">
      <div className="mr-3 mt-0.5">{icon}</div>
      <div>
        <h4 className="font-medium text-card-foreground">{title}</h4>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}