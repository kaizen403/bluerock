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
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would handle form submission here
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
    }, 3000);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,hsl(var(--chart-5)/0.2),transparent_50%),radial-gradient(ellipse_at_bottom,hsl(var(--chart-1)/0.2),transparent_50%)]"></div>
        
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Get in{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-chart-5 to-chart-1">
                  Touch
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-4">
                Have questions or need assistance? Our team is here to help you with all your banking needs.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <ContactInfoCard
              icon={<Phone className="h-8 w-8 text-chart-1" />}
              title="Call Us"
              description="Our customer service team is available 24/7"
              info="1-800-BLUEROCK"
              link="tel:+18002583762"
            />
            <ContactInfoCard
              icon={<Mail className="h-8 w-8 text-chart-2" />}
              title="Email Us"
              description="Send us an email and we'll respond promptly"
              info="info@bluerockbank.com"
              link="mailto:info@bluerockbank.com"
            />
            <ContactInfoCard
              icon={<MapPin className="h-8 w-8 text-chart-3" />}
              title="Visit Us"
              description="Our headquarters location"
              info="1234 BlueRock Avenue, New York, NY 10001"
              link="https://maps.google.com"
            />
            <ContactInfoCard
              icon={<Clock className="h-8 w-8 text-chart-4" />}
              title="Business Hours"
              description="When our branches are open"
              info="Monday-Friday: 9am-5pm, Saturday: 10am-2pm"
            />
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2 items-start max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="mb-6">
                <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
                <p className="text-muted-foreground">
                  Fill out the form below and one of our representatives will get back to you as soon as possible.
                </p>
              </div>

              <Tabs defaultValue="general" className="w-full">
                <TabsList className="grid grid-cols-2 mb-6">
                  <TabsTrigger value="general">General Inquiry</TabsTrigger>
                  <TabsTrigger value="support">Customer Support</TabsTrigger>
                </TabsList>
                
                <TabsContent value="general">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="first-name">First Name</Label>
                        <Input id="first-name" placeholder="John" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="last-name">Last Name</Label>
                        <Input id="last-name" placeholder="Doe" required />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="john.doe@example.com" required />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone (Optional)</Label>
                      <Input id="phone" type="tel" placeholder="(123) 456-7890" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="topic">Topic</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a topic" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="accounts">Accounts & Services</SelectItem>
                          <SelectItem value="loans">Loans & Mortgages</SelectItem>
                          <SelectItem value="business">Business Banking</SelectItem>
                          <SelectItem value="investments">Investments</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea 
                        id="message" 
                        placeholder="How can we help you?" 
                        required 
                        className="min-h-[120px]"
                      />
                    </div>
                    
                    <div>
                      <RadioGroup defaultValue="email" className="space-y-2">
                        <Label>Preferred contact method</Label>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="email" id="r1" />
                          <Label htmlFor="r1">Email</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="phone" id="r2" />
                          <Label htmlFor="r2">Phone</Label>
                        </div>
                      </RadioGroup>
                    </div>
                    
                    <Button type="submit" className="w-full" disabled={formSubmitted}>
                      {formSubmitted ? (
                        <span className="flex items-center">
                          <CheckCircle className="mr-2 h-4 w-4" /> Message Sent
                        </span>
                      ) : (
                        <span className="flex items-center">
                          <Send className="mr-2 h-4 w-4" /> Submit Inquiry
                        </span>
                      )}
                    </Button>
                  </form>
                </TabsContent>
                
                <TabsContent value="support">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="support-first-name">First Name</Label>
                        <Input id="support-first-name" placeholder="John" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="support-last-name">Last Name</Label>
                        <Input id="support-last-name" placeholder="Doe" required />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="support-email">Email</Label>
                      <Input id="support-email" type="email" placeholder="john.doe@example.com" required />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="account-number">Account Number (Optional)</Label>
                      <Input id="account-number" placeholder="Last 4 digits only" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="support-topic">Support Topic</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select issue type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="online-banking">Online Banking Issues</SelectItem>
                          <SelectItem value="mobile-app">Mobile App Problems</SelectItem>
                          <SelectItem value="account-access">Account Access</SelectItem>
                          <SelectItem value="fraud">Report Fraud</SelectItem>
                          <SelectItem value="other">Other Issue</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="support-message">Describe Your Issue</Label>
                      <Textarea 
                        id="support-message" 
                        placeholder="Please provide details about your issue" 
                        required 
                        className="min-h-[120px]"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label>Urgency Level</Label>
                      <RadioGroup defaultValue="normal" className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="high" id="u1" />
                          <Label htmlFor="u1">High - Urgent assistance needed</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="normal" id="u2" />
                          <Label htmlFor="u2">Normal - Response within 24 hours</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="low" id="u3" />
                          <Label htmlFor="u3">Low - General question</Label>
                        </div>
                      </RadioGroup>
                    </div>
                    
                    <Button type="submit" className="w-full" disabled={formSubmitted}>
                      {formSubmitted ? (
                        <span className="flex items-center">
                          <CheckCircle className="mr-2 h-4 w-4" /> Support Request Sent
                        </span>
                      ) : (
                        <span className="flex items-center">
                          <Send className="mr-2 h-4 w-4" /> Submit Support Request
                        </span>
                      )}
                    </Button>
                  </form>
                </TabsContent>
              </Tabs>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Frequently Asked Questions</CardTitle>
                  <CardDescription>
                    Quick answers to common questions
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-1">How do I report a lost or stolen card?</h3>
                    <p className="text-sm text-muted-foreground">
                      Call our 24/7 customer service at 1-800-BLUEROCK immediately or lock your card through the mobile app.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">How do I reset my online banking password?</h3>
                    <p className="text-sm text-muted-foreground">
                      Click on "Forgot Password" on the login page and follow the instructions to reset your password.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">What are the routing and swift codes for wire transfers?</h3>
                    <p className="text-sm text-muted-foreground">
                      Our routing number is 123456789 and our SWIFT code for international transfers is BLRKUS33.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">How do I apply for a loan?</h3>
                    <p className="text-sm text-muted-foreground">
                      You can apply online through our website, mobile app, or visit any branch to speak with a loan officer.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Are my deposits FDIC insured?</h3>
                    <p className="text-sm text-muted-foreground">
                      Yes, BlueRock Bank deposits are FDIC insured up to $250,000 per depositor, per account ownership category.
                    </p>
                  </div>
                  <div className="pt-4">
                    <Button variant="outline" className="w-full" onClick={() => window.location.href = '/faq'}>
                      View All FAQs
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Branch Locations Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Branches</h2>
              <p className="text-lg text-muted-foreground">
                Visit one of our convenient branch locations for personalized service.
              </p>
            </motion.div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <BranchCard
              name="Manhattan Main Branch"
              address="1234 BlueRock Avenue, New York, NY 10001"
              phone="(212) 555-1234"
              hours="Mon-Fri: 9am-5pm, Sat: 10am-2pm"
            />
            <BranchCard
              name="Brooklyn Heights"
              address="567 Atlantic Avenue, Brooklyn, NY 11201"
              phone="(718) 555-5678"
              hours="Mon-Fri: 9am-5pm, Sat: 10am-2pm"
            />
            <BranchCard
              name="Financial District"
              address="89 Wall Street, New York, NY 10005"
              phone="(212) 555-9012"
              hours="Mon-Fri: 8am-6pm"
            />
            <BranchCard
              name="Queens Center"
              address="123 Queens Blvd, Queens, NY 11375"
              phone="(718) 555-3456"
              hours="Mon-Fri: 9am-5pm, Sat: 10am-2pm"
            />
            <BranchCard
              name="Upper East Side"
              address="789 Madison Avenue, New York, NY 10065"
              phone="(212) 555-7890"
              hours="Mon-Fri: 9am-5pm, Sat: 10am-1pm"
            />
            <BranchCard
              name="Bronx Plaza"
              address="456 Grand Concourse, Bronx, NY 10451"
              phone="(718) 555-2345"
              hours="Mon-Fri: 9am-5pm, Sat: 10am-2pm"
            />
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" className="group">
              View All Locations
              <MapPin className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

function ContactInfoCard({ icon, title, description, info, link }: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
  info: string;
  link?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <Card className="h-full border-border/50 transition-all duration-300 hover:border-primary/30 hover:shadow-md">
        <CardContent className="pt-6">
          <div className="mb-4">{icon}</div>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-sm text-muted-foreground mb-4">{description}</p>
          {link ? (
            <a 
              href={link} 
              className="font-medium text-primary hover:underline"
              target={link.startsWith('https') ? '_blank' : undefined}
              rel={link.startsWith('https') ? 'noopener noreferrer' : undefined}
            >
              {info}
            </a>
          ) : (
            <p className="font-medium">{info}</p>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}

function BranchCard({ name, address, phone, hours }: { 
  name: string; 
  address: string;
  phone: string;
  hours: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <Card className="h-full border-border/50 transition-all duration-300 hover:border-primary/30 hover:shadow-md">
        <CardHeader>
          <CardTitle className="text-xl">{name}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex">
            <MapPin className="h-5 w-5 mr-3 text-primary flex-shrink-0" />
            <p>{address}</p>
          </div>
          <div className="flex">
            <Phone className="h-5 w-5 mr-3 text-primary flex-shrink-0" />
            <p>{phone}</p>
          </div>
          <div className="flex">
            <Clock className="h-5 w-5 mr-3 text-primary flex-shrink-0" />
            <p>{hours}</p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}