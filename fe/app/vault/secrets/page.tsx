"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Lock, Key, FileKey, UserCheck, Fingerprint } from "lucide-react";

export default function SecretsPage() {
  const securityTips = [
    {
      icon: <Lock className="h-6 w-6 text-chart-1" />,
      title: "Use Strong Passwords",
      description: "Create unique, complex passwords with a mix of characters, numbers, and symbols.",
    },
    {
      icon: <Key className="h-6 w-6 text-chart-2" />,
      title: "Enable Two-Factor Authentication",
      description: "Add an extra layer of security to your accounts with 2FA.",
    },
    {
      icon: <FileKey className="h-6 w-6 text-chart-3" />,
      title: "Secure Document Storage",
      description: "Keep sensitive documents in a fireproof safe or secure digital vault.",
    },
    {
      icon: <UserCheck className="h-6 w-6 text-chart-4" />,
      title: "Regular Security Audits",
      description: "Review your security measures and update them periodically.",
    },
    {
      icon: <Fingerprint className="h-6 w-6 text-chart-5" />,
      title: "Biometric Security",
      description: "Use fingerprint or face recognition for additional security.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,hsl(var(--chart-3)/0.2),transparent_50%),radial-gradient(ellipse_at_bottom,hsl(var(--chart-4)/0.2),transparent_50%)]"></div>
        
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <div className="flex justify-center mb-6">
              <Shield className="h-16 w-16 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Security Best Practices
            </h1>
            <p className="text-xl text-muted-foreground">
              Essential guidelines for protecting your valuable assets and personal information
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {securityTips.map((tip, index) => (
              <motion.div
                key={tip.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full backdrop-blur-sm bg-card/90 border-border/50 transition-all duration-300 hover:border-primary/30 hover:shadow-lg">
                  <CardHeader>
                    <div className="mb-4">{tip.icon}</div>
                    <CardTitle className="text-xl">{tip.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{tip.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-12 max-w-3xl mx-auto"
          >
            <Card className="backdrop-blur-sm bg-card/90">
              <CardHeader>
                <CardTitle>Additional Security Measures</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-primary/5 rounded-lg">
                  <h3 className="font-semibold mb-2">Regular Account Monitoring</h3>
                  <p className="text-muted-foreground">
                    Check your accounts regularly for any suspicious activity and enable account alerts.
                  </p>
                </div>
                <div className="p-4 bg-primary/5 rounded-lg">
                  <h3 className="font-semibold mb-2">Secure Communication</h3>
                  <p className="text-muted-foreground">
                    Use encrypted channels for sharing sensitive information and avoid public networks.
                  </p>
                </div>
                <div className="p-4 bg-primary/5 rounded-lg">
                  <h3 className="font-semibold mb-2">Emergency Contacts</h3>
                  <p className="text-muted-foreground">
                    Maintain a list of emergency contacts and important phone numbers in a secure location.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}