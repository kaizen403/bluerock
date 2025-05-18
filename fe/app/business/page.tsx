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
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { ArrowRight, Building2, BarChart3, DollarSign, BadgeCheck, CreditCard, ArrowUpRight, LineChart, ArrowLeftRight, Receipt, Filter } from "lucide-react";
import Link from "next/link";

export default function BusinessBankingPage() {
  const businessSolutions = [
    {
      id: "accounts",
      title: "Business Accounts",
      icon: <Building2 className="h-5 w-5" />,
      description: "Powerful banking solutions for businesses of all sizes.",
      features: [
        "No monthly maintenance fees for qualifying businesses",
        "Unlimited transactions with no per-item fees",
        "Free cash deposits up to $20,000 per month",
        "Integrated merchant services and payment processing",
        "Business debit cards with purchase controls",
      ],
      cta: "Open Account",
      ctaLink: "/business/accounts",
    },
    {
      id: "lending",
      title: "Business Lending",
      icon: <DollarSign className="h-5 w-5" />,
      description: "Flexible financing solutions to help your business grow.",
      features: [
        "Business lines of credit up to $500,000",
        "Commercial real estate loans with competitive rates",
        "Equipment financing with fixed terms",
        "SBA loan preferred lender status",
        "Fast application and approval process",
      ],
      cta: "Apply Now",
      ctaLink: "/business/loans",
    },
    {
      id: "treasury",
      title: "Treasury Management",
      icon: <BarChart3 className="h-5 w-5" />,
      description: "Optimize cash flow and streamline financial operations.",
      features: [
        "Advanced online banking with multi-user access",
        "Automated payables and receivables processing",
        "Fraud protection and positive pay services",
        "Real-time account balance and transaction reporting",
        "International banking and foreign exchange solutions",
      ],
      cta: "Learn More",
      ctaLink: "/business/treasury",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,hsl(var(--chart-2)/0.2),transparent_50%),radial-gradient(ellipse_at_bottom,hsl(var(--chart-3)/0.2),transparent_50%)]"></div>
        
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Banking Solutions for{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-chart-2 to-chart-3">
                  Business Success
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Power your business growth with customized financial solutions, expert guidance, and innovative tools designed for every stage of your business journey.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="group">
                  Open Business Account
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button variant="outline" size="lg">
                  Contact a Business Advisor
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Business Solutions Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Business Banking Solutions</h2>
              <p className="text-lg text-muted-foreground">
                Comprehensive financial tools and services to help your business thrive.
              </p>
            </motion.div>
          </div>

          <Tabs defaultValue="accounts" className="max-w-4xl mx-auto">
            <TabsList className="grid grid-cols-3 mb-8">
              {businessSolutions.map((solution) => (
                <TabsTrigger key={solution.id} value={solution.id} className="flex items-center gap-2">
                  {solution.icon}
                  <span className="hidden sm:inline">{solution.title}</span>
                </TabsTrigger>
              ))}
            </TabsList>
            
            {businessSolutions.map((solution) => (
              <TabsContent key={solution.id} value={solution.id}>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card>
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-2">
                        {solution.icon}
                        <CardTitle>{solution.title}</CardTitle>
                      </div>
                      <CardDescription className="text-base">
                        {solution.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {solution.features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <BadgeCheck className="h-5 w-5 text-chart-2 mr-2 mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full group" asChild>
                        <Link href={solution.ctaLink}>
                          {solution.cta}
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

      {/* Business Tools Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Business Tools & Resources</h2>
              <p className="text-lg text-muted-foreground">
                Innovative solutions to streamline operations and drive efficiency.
              </p>
            </motion.div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
            <FeatureCard
              icon={<CreditCard className="h-8 w-8 text-chart-2" />}
              title="Payment Processing"
              description="Accept all payment types with competitive rates and next-day funding options."
            />
            <FeatureCard
              icon={<LineChart className="h-8 w-8 text-chart-3" />}
              title="Cash Flow Analysis"
              description="Advanced forecasting tools to help manage and optimize your business cash flow."
            />
            <FeatureCard
              icon={<ArrowLeftRight className="h-8 w-8 text-chart-4" />}
              title="Integrated Accounting"
              description="Seamless integration with popular accounting software for simplified reconciliation."
            />
            <FeatureCard
              icon={<Receipt className="h-8 w-8 text-chart-5" />}
              title="Payroll Services"
              description="Comprehensive payroll management with tax filing and direct deposit capabilities."
            />
          </div>
        </div>
      </section>

      {/* Industry Solutions Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Industry-Specific Solutions</h2>
              <p className="text-lg text-muted-foreground">
                Tailored financial services designed for your industry's unique needs.
              </p>
            </motion.div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
            <IndustryCard
              title="Healthcare Practices"
              description="Banking solutions for medical offices, hospitals, and healthcare providers."
              href="/business/industries/healthcare"
            />
            <IndustryCard
              title="Manufacturing & Distribution"
              description="Financial services for supply chain management and growth capital."
              href="/business/industries/manufacturing"
            />
            <IndustryCard
              title="Professional Services"
              description="Banking products for law firms, accounting practices, and consultancies."
              href="/business/industries/professional"
            />
            <IndustryCard
              title="Real Estate & Construction"
              description="Specialized financing for development projects and property management."
              href="/business/industries/real-estate"
            />
            <IndustryCard
              title="Retail & E-Commerce"
              description="Payment processing and working capital solutions for merchants."
              href="/business/industries/retail"
            />
            <IndustryCard
              title="Technology & Innovation"
              description="Banking services designed for startups and high-growth tech companies."
              href="/business/industries/technology"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-b from-card to-muted border border-border rounded-xl p-8 max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-4">Ready to Elevate Your Business Banking?</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Speak with a BlueRock business specialist to find the right solutions for your company's goals.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="group">
                  Schedule a Consultation
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button variant="outline" size="lg">
                  Explore Business Resources
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

function FeatureCard({ icon, title, description }: { 
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
        <CardHeader className="pb-2">
          <div className="mb-2">{icon}</div>
          <CardTitle className="text-lg">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}

function IndustryCard({ title, description, href }: { 
  title: string; 
  description: string;
  href: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <Card className="h-full group transition-all duration-300 hover:border-primary/30 hover:shadow-md">
        <CardHeader>
          <CardTitle className="text-lg">{title}</CardTitle>
          <CardDescription className="text-sm">
            {description}
          </CardDescription>
        </CardHeader>
        <CardFooter className="pt-0">
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