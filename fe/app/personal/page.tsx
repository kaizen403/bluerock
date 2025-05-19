"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ArrowRight,
  CreditCard,
  Wallet,
  PiggyBank,
  DollarSign,
  BadgeCheck,
  ShieldCheck,
  ArrowUpRight,
} from "lucide-react";
import Link from "next/link";

export default function PersonalBankingPage() {
  const accountTypes = [
    {
      id: "checking",
      title: "Premium Checking",
      icon: <Wallet className="h-5 w-5" />,
      description: "Everyday banking with premium benefits and zero fees.",
      features: [
        "No monthly maintenance fees",
        "No minimum balance requirements",
        "Unlimited free ATM withdrawals worldwide",
        "Early direct deposit access",
        "24/7 customer support",
      ],
      cta: "Open Account",
      ctaLink: "/personal/accounts",
    },
    {
      id: "savings",
      title: "High-Yield Savings",
      icon: <PiggyBank className="h-5 w-5" />,
      description: "Competitive interest rates to help your money grow faster.",
      features: [
        "3.25% APY - 4x the national average",
        "No minimum opening deposit",
        "Fee-free transfers to other accounts",
        "Automatic savings tools",
        "FDIC insured up to $250,000",
      ],
      cta: "Start Saving",
      ctaLink: "/personal/accounts",
    },
    {
      id: "creditcards",
      title: "Rewards Credit Cards",
      icon: <CreditCard className="h-5 w-5" />,
      description: "Earn rewards on everyday purchases with no annual fees.",
      features: [
        "Up to 5% cash back on select categories",
        "Zero foreign transaction fees",
        "Exclusive travel benefits",
        "Advanced fraud protection",
        "No annual fee options available",
      ],
      cta: "Apply Now",
      ctaLink: "/personal/credit-cards",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,hsl(var(--chart-1)/0.2),transparent_50%),radial-gradient(ellipse_at_bottom,hsl(var(--chart-2)/0.2),transparent_50%)]"></div>

        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Banking Designed for{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-chart-1 to-chart-2">
                  You
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Experience personalized banking solutions that grow with you,
                from everyday checking to long-term financial planning.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="group">
                  Open an Account
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button variant="outline" size="lg">
                  Compare Accounts
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Account Types Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Personal Banking Solutions
              </h2>
              <p className="text-lg text-muted-foreground">
                Find the right account to meet your financial needs and goals.
              </p>
            </motion.div>
          </div>

          <Tabs defaultValue="checking" className="max-w-4xl mx-auto">
            <TabsList className="grid grid-cols-3 mb-8">
              {accountTypes.map((account) => (
                <TabsTrigger
                  key={account.id}
                  value={account.id}
                  className="flex items-center gap-2"
                >
                  {account.icon}
                  <span className="hidden sm:inline">{account.title}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {accountTypes.map((account) => (
              <TabsContent key={account.id} value={account.id}>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card>
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-2">
                        {account.icon}
                        <CardTitle>{account.title}</CardTitle>
                      </div>
                      <CardDescription className="text-base">
                        {account.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {account.features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <BadgeCheck className="h-5 w-5 text-chart-1 mr-2 mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full group" asChild>
                        <Link href={account.ctaLink}>
                          {account.cta}
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why Choose BlueRock
              </h2>
              <p className="text-lg text-muted-foreground">
                We're dedicated to providing exceptional banking experiences
                with innovative solutions.
              </p>
            </motion.div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
            <FeatureCard
              icon={<ShieldCheck className="h-10 w-10 text-chart-1" />}
              title="Advanced Security"
              description="Multi-factor authentication, biometric login, and real-time fraud monitoring to protect your finances."
            />
            <FeatureCard
              icon={<CreditCard className="h-10 w-10 text-chart-2" />}
              title="Fee-Free Banking"
              description="No hidden fees, no minimum balances, and no ATM charges worldwide."
            />
            <FeatureCard
              icon={<DollarSign className="h-10 w-10 text-chart-3" />}
              title="Competitive Rates"
              description="Earn more on your savings with interest rates well above the national average."
            />
          </div>
        </div>
      </section>

      {/* Additional Products Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Financial Products
              </h2>
              <p className="text-lg text-muted-foreground">
                Explore our full range of personal banking products and
                services.
              </p>
            </motion.div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
            <ProductCard
              title="Mortgages & Home Loans"
              href="/personal/loans"
            />
            <ProductCard title="Auto & Personal Loans" href="/personal/loans" />
            <ProductCard
              title="Investment Accounts"
              href="/personal/investments"
            />
            <ProductCard
              title="Retirement Planning"
              href="/wealth/retirement"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="bg-card border border-border rounded-xl p-8 max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-4">
                Ready to Experience Better Banking?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Open an account in minutes and start enjoying the benefits of
                BlueRock banking today.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="group">
                  Open an Account
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button variant="outline" size="lg">
                  Schedule a Consultation
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <Card className="h-full transition-all duration-300 hover:border-primary/30 hover:shadow-md">
        <CardHeader>
          <div className="mb-2">{icon}</div>
          <CardTitle className="text-xl">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}

function ProductCard({ title, href }: { title: string; href: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <Card className="h-full group transition-all duration-300 hover:border-primary/30 hover:shadow-md">
        <CardHeader className="pb-4">
          <CardTitle className="text-lg">{title}</CardTitle>
        </CardHeader>
        <CardFooter>
          <Link
            href={href}
            className="text-primary group-hover:underline flex items-center text-sm font-medium"
          >
            Learn More
            <ArrowUpRight className="ml-1 h-4 w-4" />
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  );
}

