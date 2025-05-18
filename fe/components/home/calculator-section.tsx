"use client";

import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";
import { DollarSign, Home, Car, Calculator } from "lucide-react";
import { motion } from "framer-motion";

export default function CalculatorSection() {
  const [activeTab, setActiveTab] = useState("mortgage");
  const [loanAmount, setLoanAmount] = useState(300000);
  const [interestRate, setInterestRate] = useState(4.5);
  const [loanTerm, setLoanTerm] = useState(30);
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  // Auto loan state
  const [carPrice, setCarPrice] = useState(25000);
  const [downPayment, setDownPayment] = useState(5000);
  const [autoLoanTerm, setAutoLoanTerm] = useState(5);
  const [autoInterestRate, setAutoInterestRate] = useState(3.9);
  const [autoMonthlyPayment, setAutoMonthlyPayment] = useState(0);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const calculateMortgagePayment = () => {
    // Convert annual interest rate to monthly rate
    const monthlyRate = interestRate / 100 / 12;
    // Convert loan term from years to months
    const termMonths = loanTerm * 12;
    
    if (monthlyRate === 0) {
      setMonthlyPayment(loanAmount / termMonths);
    } else {
      // Calculate monthly payment using the mortgage formula
      const payment =
        (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, termMonths)) /
        (Math.pow(1 + monthlyRate, termMonths) - 1);
      setMonthlyPayment(payment);
    }
  };

  const calculateAutoLoan = () => {
    const loanAmount = carPrice - downPayment;
    const monthlyRate = autoInterestRate / 100 / 12;
    const termMonths = autoLoanTerm * 12;
    
    if (monthlyRate === 0) {
      setAutoMonthlyPayment(loanAmount / termMonths);
    } else {
      const payment =
        (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, termMonths)) /
        (Math.pow(1 + monthlyRate, termMonths) - 1);
      setAutoMonthlyPayment(payment);
    }
  };

  useEffect(() => {
    calculateMortgagePayment();
  }, [loanAmount, interestRate, loanTerm]);

  useEffect(() => {
    calculateAutoLoan();
  }, [carPrice, downPayment, autoInterestRate, autoLoanTerm]);

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Financial Calculators</h2>
            <p className="text-muted-foreground text-lg">
              Plan your financial future with our interactive calculators to estimate your loan payments.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <Card className="shadow-lg border-border/50 overflow-hidden">
            <CardHeader className="bg-card border-b border-border/20 pb-3">
              <div className="flex items-center space-x-2">
                <Calculator className="h-5 w-5 text-primary" />
                <CardTitle>Loan Calculator</CardTitle>
              </div>
              <CardDescription>
                Estimate your monthly payments based on loan amount, interest rate, and term.
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <Tabs
                value={activeTab}
                onValueChange={setActiveTab}
                className="w-full"
              >
                <TabsList className="grid grid-cols-2 mb-6">
                  <TabsTrigger value="mortgage" className="flex items-center gap-2">
                    <Home className="h-4 w-4" /> Mortgage
                  </TabsTrigger>
                  <TabsTrigger value="auto" className="flex items-center gap-2">
                    <Car className="h-4 w-4" /> Auto Loan
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="mortgage" className="space-y-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <Label htmlFor="loanAmount">Loan Amount</Label>
                        <span className="text-muted-foreground">{formatCurrency(loanAmount)}</span>
                      </div>
                      <Slider
                        id="loanAmount"
                        min={50000}
                        max={1000000}
                        step={10000}
                        value={[loanAmount]}
                        onValueChange={(value) => setLoanAmount(value[0])}
                      />
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>$50,000</span>
                        <span>$1,000,000</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <Label htmlFor="interestRate">Interest Rate (%)</Label>
                        <span className="text-muted-foreground">{interestRate.toFixed(2)}%</span>
                      </div>
                      <Slider
                        id="interestRate"
                        min={0.5}
                        max={10}
                        step={0.1}
                        value={[interestRate]}
                        onValueChange={(value) => setInterestRate(value[0])}
                      />
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>0.5%</span>
                        <span>10%</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <Label htmlFor="loanTerm">Loan Term (years)</Label>
                        <span className="text-muted-foreground">{loanTerm} years</span>
                      </div>
                      <Slider
                        id="loanTerm"
                        min={5}
                        max={30}
                        step={5}
                        value={[loanTerm]}
                        onValueChange={(value) => setLoanTerm(value[0])}
                      />
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>5 years</span>
                        <span>30 years</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-muted/40 p-4 rounded-lg border border-border">
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground mb-1">Estimated Monthly Payment</p>
                      <p className="text-3xl font-bold flex items-center justify-center text-primary">
                        <DollarSign className="h-5 w-5" />
                        {new Intl.NumberFormat('en-US', {
                          style: 'currency',
                          currency: 'USD',
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        }).format(monthlyPayment).replace('$', '')}
                      </p>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="auto" className="space-y-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <Label htmlFor="carPrice">Car Price</Label>
                        <span className="text-muted-foreground">{formatCurrency(carPrice)}</span>
                      </div>
                      <Slider
                        id="carPrice"
                        min={5000}
                        max={100000}
                        step={1000}
                        value={[carPrice]}
                        onValueChange={(value) => setCarPrice(value[0])}
                      />
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>$5,000</span>
                        <span>$100,000</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <Label htmlFor="downPayment">Down Payment</Label>
                        <span className="text-muted-foreground">{formatCurrency(downPayment)}</span>
                      </div>
                      <Slider
                        id="downPayment"
                        min={0}
                        max={carPrice / 2}
                        step={500}
                        value={[downPayment]}
                        onValueChange={(value) => setDownPayment(value[0])}
                      />
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>$0</span>
                        <span>{formatCurrency(carPrice / 2)}</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <Label htmlFor="autoInterestRate">Interest Rate (%)</Label>
                        <span className="text-muted-foreground">{autoInterestRate.toFixed(2)}%</span>
                      </div>
                      <Slider
                        id="autoInterestRate"
                        min={0.5}
                        max={12}
                        step={0.1}
                        value={[autoInterestRate]}
                        onValueChange={(value) => setAutoInterestRate(value[0])}
                      />
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>0.5%</span>
                        <span>12%</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <Label htmlFor="autoLoanTerm">Loan Term (years)</Label>
                        <span className="text-muted-foreground">{autoLoanTerm} years</span>
                      </div>
                      <Slider
                        id="autoLoanTerm"
                        min={1}
                        max={7}
                        step={1}
                        value={[autoLoanTerm]}
                        onValueChange={(value) => setAutoLoanTerm(value[0])}
                      />
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>1 year</span>
                        <span>7 years</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-muted/40 p-4 rounded-lg border border-border">
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground mb-1">Estimated Monthly Payment</p>
                      <p className="text-3xl font-bold flex items-center justify-center text-primary">
                        <DollarSign className="h-5 w-5" />
                        {new Intl.NumberFormat('en-US', {
                          style: 'currency',
                          currency: 'USD',
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        }).format(autoMonthlyPayment).replace('$', '')}
                      </p>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
            <CardFooter className="bg-card/50 border-t border-border/20 text-sm text-muted-foreground">
              <p>
                Results are estimates for illustrative purposes only. Contact a BlueRock Bank representative for personalized rates.
              </p>
            </CardFooter>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}