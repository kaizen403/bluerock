"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, CreditCard, Landmark, Building2, BarChart3, PiggyBank, Shield } from "lucide-react";
import Link from "next/link";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
  index: number;
}

export default function ServicesSection() {
  const services = [
    {
      icon: <CreditCard className="h-10 w-10 text-chart-1" />,
      title: "Personal Banking",
      description: "Checking, savings, and credit card accounts with premium benefits and digital banking features.",
      href: "/personal",
    },
    {
      icon: <Building2 className="h-10 w-10 text-chart-2" />,
      title: "Business Banking",
      description: "Tailored financial services for businesses of all sizes, from startups to corporations.",
      href: "/business",
    },
    {
      icon: <BarChart3 className="h-10 w-10 text-chart-3" />,
      title: "Wealth Management",
      description: "Investment strategies, portfolio management, and financial planning for high-net-worth individuals.",
      href: "/wealth",
    },
    {
      icon: <PiggyBank className="h-10 w-10 text-chart-4" />,
      title: "Loans & Mortgages",
      description: "Competitive rates on home loans, auto loans, personal loans, and refinancing options.",
      href: "/personal/loans",
    },
    {
      icon: <Landmark className="h-10 w-10 text-chart-5" />,
      title: "Private Banking",
      description: "Exclusive banking services with dedicated relationship managers and premium benefits.",
      href: "/wealth/private-banking",
    },
    {
      icon: <Shield className="h-10 w-10 text-chart-1" />,
      title: "Insurance Solutions",
      description: "Protect what matters most with our comprehensive insurance products and services.",
      href: "/insurance",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section className="py-16 md:py-24 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Banking Solutions</h2>
          <p className="text-muted-foreground text-lg">
            Discover our wide range of financial services designed to meet your personal and business needs.
          </p>
        </div>

        <motion.div
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              href={service.href}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ServiceCard({ icon, title, description, href, index }: ServiceCardProps) {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div variants={itemVariants}>
      <Card className="h-full transition-all duration-300 hover:shadow-lg hover:border-primary/30 overflow-hidden group">
        <CardHeader className="pb-2">
          <div className="mb-2">{icon}</div>
          <CardTitle className="text-xl">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-base">{description}</CardDescription>
        </CardContent>
        <CardFooter>
          <Link href={href} passHref>
            <Button variant="link" className="p-0 h-auto text-primary group-hover:underline">
              Learn more
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  );
}