"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight, Calendar, Users, Trophy, Building, Target, Heart, GraduationCap, Landmark } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  const timeline = [
    {
      year: "1985",
      title: "Foundation",
      description: "BlueRock Bank was founded with a vision to provide exceptional financial services with a customer-first approach.",
    },
    {
      year: "1994",
      title: "Expansion",
      description: "Expanded operations across major metropolitan areas with the opening of 25 new branches.",
    },
    {
      year: "2001",
      title: "Digital Banking",
      description: "Launched our first online banking platform, pioneering digital financial services.",
    },
    {
      year: "2010",
      title: "Mobile Revolution",
      description: "Introduced our award-winning mobile banking app with innovative features and security.",
    },
    {
      year: "2018",
      title: "Innovation Hub",
      description: "Established our Financial Technology Innovation Center to develop cutting-edge banking solutions.",
    },
    {
      year: "Today",
      title: "Global Presence",
      description: "Serving millions of customers with over 250 branches and a comprehensive digital banking ecosystem.",
    },
  ];

  const values = [
    {
      icon: <Users className="h-8 w-8 text-chart-1" />,
      title: "Customer Focus",
      description: "Our customers are at the center of everything we do, driving our decisions and innovations.",
    },
    {
      icon: <Trophy className="h-8 w-8 text-chart-2" />,
      title: "Excellence",
      description: "We strive for excellence in all our services, setting the highest standards in banking.",
    },
    {
      icon: <Building className="h-8 w-8 text-chart-3" />,
      title: "Integrity",
      description: "We conduct business with honesty, transparency, and the highest ethical standards.",
    },
    {
      icon: <Target className="h-8 w-8 text-chart-4" />,
      title: "Innovation",
      description: "We continuously explore new technologies and solutions to enhance the banking experience.",
    },
    {
      icon: <Heart className="h-8 w-8 text-chart-5" />,
      title: "Community",
      description: "We are committed to making a positive impact in the communities we serve.",
    },
    {
      icon: <GraduationCap className="h-8 w-8 text-chart-1" />,
      title: "Education",
      description: "We believe in financial education and empowering our customers with knowledge.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,hsl(var(--chart-3)/0.2),transparent_50%),radial-gradient(ellipse_at_bottom,hsl(var(--chart-4)/0.2),transparent_50%)]"></div>
        
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Our Story at{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-chart-3 to-chart-4">
                  BlueRock Bank
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                For over three decades, we've been dedicated to providing exceptional banking experiences and building long-lasting relationships with our customers.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="group" asChild>
                  <Link href="/contact">
                    Contact Us
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/careers">
                    Join Our Team
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden aspect-[4/3]"
            >
              <Image 
                src="https://images.pexels.com/photos/6267/menu-restaurant-vintage-table.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Modern bank building interior" 
                fill
                className="object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission & Vision</h2>
              <div className="space-y-6">
                <div className="bg-card/50 border border-border p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 flex items-center">
                    <Landmark className="h-5 w-5 mr-2 text-chart-3" />
                    Our Mission
                  </h3>
                  <p className="text-muted-foreground">
                    To provide innovative financial solutions that empower our customers to achieve their goals, while delivering exceptional service and building lasting relationships based on trust and integrity.
                  </p>
                </div>
                
                <div className="bg-card/50 border border-border p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 flex items-center">
                    <Target className="h-5 w-5 mr-2 text-chart-4" />
                    Our Vision
                  </h3>
                  <p className="text-muted-foreground">
                    To be the most trusted financial partner, recognized for our commitment to customer success, technological innovation, and positive impact on the communities we serve.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
              <p className="text-lg text-muted-foreground">
                These principles guide our operations and define who we are as an organization.
              </p>
            </motion.div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <Card className="h-full border-border/50 transition-all duration-300 hover:border-primary/30 hover:shadow-md">
                  <CardHeader>
                    <div className="mb-4">{value.icon}</div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Journey</h2>
              <p className="text-lg text-muted-foreground">
                From humble beginnings to becoming a leading financial institution, our history reflects our commitment to growth and innovation.
              </p>
            </motion.div>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-border -ml-0.5 hidden md:block"></div>

            <div className="space-y-12">
              {timeline.map((event, index) => (
                <div key={event.year} className="relative">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="flex flex-col md:flex-row md:items-center"
                  >
                    {/* Year bubble for desktop */}
                    <div className="hidden md:block md:w-1/2 md:pr-8 md:text-right">
                      {index % 2 === 0 && (
                        <div className="mb-4">
                          <span className="inline-flex items-center justify-center bg-card border border-border rounded-full h-16 w-16 text-xl font-bold">
                            {event.year}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Circle for timeline */}
                    <div className="hidden md:block absolute left-6 md:left-1/2 -ml-3.5 mt-6">
                      <div className="h-7 w-7 rounded-full border-4 border-chart-3 bg-background"></div>
                    </div>

                    {/* Content */}
                    <div className="md:w-1/2 md:pl-8">
                      {/* Year bubble for desktop on right side */}
                      <div className="hidden md:block">
                        {index % 2 === 1 && (
                          <div className="mb-4">
                            <span className="inline-flex items-center justify-center bg-card border border-border rounded-full h-16 w-16 text-xl font-bold">
                              {event.year}
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Mobile year display */}
                      <div className="flex items-center md:hidden mb-4">
                        <Calendar className="h-5 w-5 mr-2 text-primary" />
                        <span className="text-xl font-bold">{event.year}</span>
                      </div>

                      <div className="bg-card border border-border p-6 rounded-lg">
                        <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                        <p className="text-muted-foreground">{event.description}</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Leadership</h2>
              <p className="text-lg text-muted-foreground">
                Meet the experienced team guiding BlueRock Bank's strategic vision and growth.
              </p>
            </motion.div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <ExecutiveCard
              name="Alexandra Mitchell"
              role="Chief Executive Officer"
              image="https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=300"
            />
            <ExecutiveCard
              name="Michael Thompson"
              role="Chief Financial Officer"
              image="https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=300"
            />
            <ExecutiveCard
              name="Sarah Rodriguez"
              role="Chief Technology Officer"
              image="https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=300"
            />
            <ExecutiveCard
              name="David Chen"
              role="Chief Operations Officer"
              image="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300"
            />
            <ExecutiveCard
              name="Jennifer Washington"
              role="Chief Marketing Officer"
              image="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300"
            />
            <ExecutiveCard
              name="Robert Patel"
              role="Chief Risk Officer"
              image="https://images.pexels.com/photos/3785424/pexels-photo-3785424.jpeg?auto=compress&cs=tinysrgb&w=300"
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
              <h2 className="text-3xl font-bold mb-4">Join the BlueRock Family</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Experience the difference of banking with an institution that puts your financial success first.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="group" asChild>
                  <Link href="/personal/accounts">
                    Open an Account
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/contact">
                    Contact Us
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

function ExecutiveCard({ name, role, image }: { name: string; role: string; image: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <Card className="overflow-hidden border-border/50 transition-all duration-300 hover:border-primary/30 hover:shadow-md">
        <div className="aspect-[3/2] relative">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
          />
        </div>
        <CardContent className="pt-4">
          <h3 className="text-xl font-semibold">{name}</h3>
          <p className="text-muted-foreground">{role}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}