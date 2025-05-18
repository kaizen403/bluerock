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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Lock, Key, Shield } from "lucide-react";
import { useRouter } from "next/navigation";

export default function VaultPage() {
  const router = useRouter();
  const [accountNo, setAccountNo] = useState("");
  const [pin, setPin] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    // Simulate verification
    setTimeout(() => {
      if (pin === "000000") {
        router.push("/vault/secrets");
      } else {
        setError("Invalid PIN. Please try again.");
      }
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center relative overflow-hidden">
      {/* 
        Injected CTF hint as a real HTML comment so it appears in DevTools.
        ---------------------------------------------------------------
        david can  you please add validation for acc no and stop using 
        single digit pin code thats too stupid
        ---------------------------------------------------------------
      */}
      <div
        style={{ display: "none" }}
        dangerouslySetInnerHTML={{
          __html:
            "<!-- david can  you please add validation for acc no and stop using single digit pin code thats too stupid -->",
        }}
      />

      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-chart-1/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-chart-2/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-md mx-auto"
        >
          <Card className="backdrop-blur-sm bg-card/90">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-md animate-pulse"></div>
                  <Shield className="h-12 w-12 text-primary relative" />
                </div>
              </div>
              <CardTitle className="text-2xl">Secure Vault Access</CardTitle>
              <CardDescription>
                Enter your account number and PIN to access the vault
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="account">Account Number</Label>
                  <div className="relative">
                    <Input
                      id="account"
                      type="text"
                      value={accountNo}
                      onChange={(e) => setAccountNo(e.target.value)}
                      className="pl-10"
                      placeholder="Enter your account number"
                      required
                    />
                    <Key className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="pin">6-Digit PIN</Label>
                  <div className="relative">
                    <Input
                      id="pin"
                      type="password"
                      value={pin}
                      onChange={(e) => setPin(e.target.value)}
                      className="pl-10"
                      placeholder="Enter your 6-digit PIN"
                      maxLength={6}
                      pattern="\d{6}"
                      required
                    />
                    <Lock className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                  </div>
                </div>

                {error && (
                  <p className="text-sm text-destructive text-center">
                    {error}
                  </p>
                )}

                <Button
                  type="submit"
                  className="w-full"
                  disabled={isLoading || pin.length !== 6}
                >
                  {isLoading ? (
                    <span className="flex items-center">
                      <span className="h-4 w-4 border-2 border-current border-r-transparent rounded-full inline-block animate-spin mr-2"></span>
                      Verifying...
                    </span>
                  ) : (
                    "Access Vault"
                  )}
                </Button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-muted-foreground">
                  Need help? Contact our secure support line
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}

