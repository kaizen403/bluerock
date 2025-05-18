"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export default function TestimonialsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const testimonials: Testimonial[] = [
    {
      name: "Sarah Johnson",
      role: "Small Business Owner",
      content:
        "BlueRock Bank's business services transformed how I manage my company's finances. Their dedicated business advisors understood my unique challenges and provided tailored solutions that helped my business grow by 30% in just one year.",
      avatar: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=150",
    },
    {
      name: "Michael Chen",
      role: "Software Engineer",
      content:
        "The mobile banking app is truly best-in-class. I can handle all my banking needs from anywhere, and the security features give me peace of mind. The zero-fee international transfers have saved me thousands while working remotely abroad.",
      avatar: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=150",
    },
    {
      name: "Emily Rodriguez",
      role: "First-time Homeowner",
      content:
        "I was intimidated by the mortgage process, but my BlueRock advisor walked me through every step. They secured a rate below market average and made homeownership possible for me. The online mortgage tracker kept me informed throughout the process.",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150",
    },
    {
      name: "David Okafor",
      role: "Investment Client",
      content:
        "The wealth management team at BlueRock has consistently outperformed my expectations. My portfolio has shown remarkable growth despite market volatility, and their proactive approach to financial planning has secured my family's future.",
      avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150",
    },
    {
      name: "Jennifer Williams",
      role: "Retail Banking Customer",
      content:
        "After 15 years with my previous bank, switching to BlueRock was the best financial decision I've made. Their customer service is exceptional - actual humans who care! Plus, their reward program has earned me enough points for two family vacations.",
      avatar: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=150",
    },
    {
      name: "Robert Patel",
      role: "Retirement Planner",
      content:
        "BlueRock's financial advisors created a comprehensive retirement plan that gave me clarity and confidence about my future. Their team regularly reviews my portfolio and makes adjustments as my life circumstances change.",
      avatar: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=150",
    },
  ];

  return (
    <section className="py-16 md:py-24 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom_left,hsl(var(--chart-1)/0.05),transparent_40%),radial-gradient(circle_at_top_right,hsl(var(--chart-2)/0.05),transparent_40%)]"></div>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-muted-foreground text-lg">
              Discover why customers choose BlueRock Bank for their financial needs.
            </p>
          </motion.div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <TestimonialCard
              key={i}
              testimonial={testimonial}
              index={i}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({
  testimonial,
  index,
  isInView,
}: {
  testimonial: Testimonial;
  index: number;
  isInView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
    >
      <Card className="h-full border-border/50 transition-all duration-300 hover:border-primary/30 bg-card/80 backdrop-blur-sm">
        <CardContent className="pt-6">
          <Quote className="h-6 w-6 text-primary/70 mb-4" />
          <p className="mb-6 text-muted-foreground">{testimonial.content}</p>
          <div className="flex items-center">
            <Avatar className="h-10 w-10 mr-3 border border-primary/30">
              <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
              <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium">{testimonial.name}</p>
              <p className="text-sm text-muted-foreground">{testimonial.role}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}