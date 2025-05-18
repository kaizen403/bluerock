import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Shield, ArrowRight, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  return (
    <footer className="bg-card text-card-foreground border-t border-border">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-6">
          {/* Logo and About */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl tracking-tight">BlueRock Bank</span>
            </div>
            <p className="text-muted-foreground mb-6">
              Providing secure, innovative banking solutions since 1985. 
              BlueRock Bank is committed to helping our customers achieve their financial goals.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/personal" className="text-muted-foreground hover:text-primary transition-colors flex items-center">
                  <ArrowRight className="h-3 w-3 mr-2" />
                  Personal Banking
                </Link>
              </li>
              <li>
                <Link href="/business" className="text-muted-foreground hover:text-primary transition-colors flex items-center">
                  <ArrowRight className="h-3 w-3 mr-2" />
                  Business Banking
                </Link>
              </li>
              <li>
                <Link href="/wealth" className="text-muted-foreground hover:text-primary transition-colors flex items-center">
                  <ArrowRight className="h-3 w-3 mr-2" />
                  Wealth Management
                </Link>
              </li>
              <li>
                <Link href="/personal/loans" className="text-muted-foreground hover:text-primary transition-colors flex items-center">
                  <ArrowRight className="h-3 w-3 mr-2" />
                  Loans & Mortgages
                </Link>
              </li>
              <li>
                <Link href="/locations" className="text-muted-foreground hover:text-primary transition-colors flex items-center">
                  <ArrowRight className="h-3 w-3 mr-2" />
                  ATM & Branch Locations
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors flex items-center">
                  <ArrowRight className="h-3 w-3 mr-2" />
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors flex items-center">
                  <ArrowRight className="h-3 w-3 mr-2" />
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/security" className="text-muted-foreground hover:text-primary transition-colors flex items-center">
                  <ArrowRight className="h-3 w-3 mr-2" />
                  Security Information
                </Link>
              </li>
              <li>
                <Link href="/accessibility" className="text-muted-foreground hover:text-primary transition-colors flex items-center">
                  <ArrowRight className="h-3 w-3 mr-2" />
                  Accessibility
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-muted-foreground hover:text-primary transition-colors flex items-center">
                  <ArrowRight className="h-3 w-3 mr-2" />
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mt-0.5 mr-3 text-primary" />
                <span className="text-muted-foreground">
                  1234 BlueRock Avenue<br />
                  New York, NY 10001
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-primary" />
                <span className="text-muted-foreground">1-800-BLUEROCK</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-primary" />
                <span className="text-muted-foreground">info@bluerockbank.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Newsletter</h3>
            <p className="text-muted-foreground mb-4">
              Subscribe to our newsletter for financial tips and updates.
            </p>
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-muted/50 border-border"
              />
              <Button className="w-full">Subscribe</Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} BlueRock Bank. All rights reserved. FDIC Insured.
          </p>
          <div className="flex space-x-6">
            <Link href="/cookies" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Cookies
            </Link>
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy
            </Link>
            <Link href="/security" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Security
            </Link>
            <Link href="/sitemap" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;