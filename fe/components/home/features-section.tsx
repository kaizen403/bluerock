"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ShieldCheck, Clock, Smartphone, Lock, Globe, CreditCard } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  iconBg: string;
  index: number;
}

export default function FeaturesSection() {
  const featuresRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: featuresRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const features = [
    {
      icon: <ShieldCheck className="h-6 w-6" />,
      title: "Bank-Grade Security",
      description: "Advanced encryption, multi-factor authentication, and 24/7 fraud monitoring to keep your accounts secure.",
      iconBg: "bg-chart-1/10 text-chart-1",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "24/7 Banking",
      description: "Access your accounts anytime, anywhere through our online banking platform and mobile app.",
      iconBg: "bg-chart-2/10 text-chart-2",
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Mobile Banking",
      description: "Manage your accounts, deposit checks, and make payments from your smartphone with our award-winning app.",
      iconBg: "bg-chart-3/10 text-chart-3",
    },
    {
      icon: <Lock className="h-6 w-6" />,
      title: "Fraud Protection",
      description: "Zero liability protection, real-time alerts, and instant card lock features to prevent unauthorized activities.",
      iconBg: "bg-chart-4/10 text-chart-4",
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Global Access",
      description: "Use your BlueRock cards worldwide with no foreign transaction fees and access to global ATM networks.",
      iconBg: "bg-chart-5/10 text-chart-5",
    },
    {
      icon: <CreditCard className="h-6 w-6" />,
      title: "Contactless Payments",
      description: "Fast, secure transactions with tap-to-pay technology at millions of merchants worldwide.",
      iconBg: "bg-chart-1/10 text-chart-1",
    },
  ];

  return (
    <section className="py-16 md:py-24" ref={featuresRef}>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose BlueRock Bank</h2>
          <p className="text-muted-foreground text-lg">
            Experience the BlueRock difference with our innovative features and exceptional service.
          </p>
        </div>

        <div className="relative">
          <motion.div
            style={{ y }}
            className="absolute right-0 top-1/3 w-72 h-72 bg-chart-2/5 rounded-full blur-3xl -z-10"
          />
          <motion.div
            style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 50]) }}
            className="absolute left-0 bottom-1/4 w-64 h-64 bg-chart-1/5 rounded-full blur-3xl -z-10"
          />

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <Feature
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                iconBg={feature.iconBg}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Feature({ icon, title, description, iconBg, index }: FeatureProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
      className="flex bg-card border border-border rounded-lg p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-md"
    >
      <div className={cn("rounded-full p-3 mr-4", iconBg)}>
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </motion.div>
  );
}