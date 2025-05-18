"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Smartphone, CreditCard, Shield } from "lucide-react";
import { useRouter } from "next/navigation";

export default function CtaSection() {
  const router = useRouter();

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,hsl(var(--chart-1)/0.2),transparent_50%),radial-gradient(ellipse_at_bottom,hsl(var(--chart-2)/0.2),transparent_50%)]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-b from-background to-muted rounded-3xl border border-border shadow-lg p-8 md:p-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Experience Premium Banking?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust BlueRock Bank with their financial future. Open an account today and discover the difference.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-10">
              <FeatureBadge icon={<CreditCard className="h-4 w-4" />} text="No Monthly Fees" />
              <FeatureBadge icon={<Smartphone className="h-4 w-4" />} text="Digital Banking" />
              <FeatureBadge icon={<Shield className="h-4 w-4" />} text="FDIC Insured" />
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                size="lg" 
                className="group"
                onClick={() => router.push("/personal/accounts")}
              >
                Open an Account
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => router.push("/contact")}
              >
                Talk to an Advisor
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function FeatureBadge({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="inline-flex items-center px-3 py-1 bg-background/80 backdrop-blur-sm border border-border rounded-full text-sm">
      {icon}
      <span className="ml-2">{text}</span>
    </div>
  );
}