"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  Menu,
  X,
  Shield,
  Landmark,
  DollarSign,
  Building2,
  BarChart3,
  CreditCard,
  Bot,
  FileText,
  Lock,
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface MenuItem {
  title: string;
  href: string;
  description?: string;
  icon?: React.ReactNode;
  submenu?: Array<{
    title: string;
    href: string;
    description?: string;
    icon?: React.ReactNode;
  }>;
}

const menuItems: MenuItem[] = [
  {
    title: "Personal",
    href: "/personal",
    icon: <CreditCard className="h-4 w-4 mr-2" />,
    submenu: [
      {
        title: "Checking & Savings",
        href: "/personal/accounts",
        description: "Everyday banking accounts with premium benefits",
        icon: <DollarSign className="h-4 w-4" />,
      },
      {
        title: "Credit Cards",
        href: "/personal/credit-cards",
        description: "Premium rewards cards with exclusive benefits",
        icon: <CreditCard className="h-4 w-4" />,
      },
      {
        title: "Loans & Mortgages",
        href: "/personal/loans",
        description: "Competitive rates for home and personal loans",
        icon: <Building2 className="h-4 w-4" />,
      },
      {
        title: "Investments",
        href: "/personal/investments",
        description: "Build your wealth with our investment solutions",
        icon: <BarChart3 className="h-4 w-4" />,
      },
    ],
  },
  {
    title: "Business",
    href: "/business",
    icon: <Building2 className="h-4 w-4 mr-2" />,
    submenu: [
      {
        title: "Business Accounts",
        href: "/business/accounts",
        description: "Tailored accounts for businesses of all sizes",
        icon: <Landmark className="h-4 w-4" />,
      },
      {
        title: "Merchant Services",
        href: "/business/merchant",
        description: "Payment processing solutions for your business",
        icon: <DollarSign className="h-4 w-4" />,
      },
      {
        title: "Business Loans",
        href: "/business/loans",
        description: "Financing options to grow your business",
        icon: <Building2 className="h-4 w-4" />,
      },
      {
        title: "Treasury Management",
        href: "/business/treasury",
        description: "Optimize your cash flow and financial operations",
        icon: <BarChart3 className="h-4 w-4" />,
      },
    ],
  },
  {
    title: "Wealth",
    href: "/wealth",
    icon: <BarChart3 className="h-4 w-4 mr-2" />,
    submenu: [
      {
        title: "Private Banking",
        href: "/wealth/private-banking",
        description:
          "Exclusive banking services for high-net-worth individuals",
        icon: <Shield className="h-4 w-4" />,
      },
      {
        title: "Investment Management",
        href: "/wealth/investment",
        description: "Professional management of your investment portfolio",
        icon: <BarChart3 className="h-4 w-4" />,
      },
      {
        title: "Retirement Planning",
        href: "/wealth/retirement",
        description: "Secure your future with our retirement solutions",
        icon: <Building2 className="h-4 w-4" />,
      },
      {
        title: "Estate Planning",
        href: "/wealth/estate",
        description: "Comprehensive estate planning services",
        icon: <Landmark className="h-4 w-4" />,
      },
    ],
  },
  {
    title: "AI Lab",
    href: "/ai-lab",
    icon: <Bot className="h-4 w-4 mr-2" />,
  },
  {
    title: "Statements",
    href: "/statements",
    icon: <FileText className="h-4 w-4 mr-2" />,
  },
  {
    title: "Vault",
    href: "/vault",
    icon: <Lock className="h-4 w-4 mr-2" />,
  },
  {
    title: "About",
    href: "/about",
    icon: <Landmark className="h-4 w-4 mr-2" />,
  },
  {
    title: "Contact",
    href: "/contact",
    icon: <Shield className="h-4 w-4 mr-2" />,
  },
];

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg"
          : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Shield className="h-6 w-6 text-primary" />
            <span className="font-bold text-xl tracking-tight">
              BlueRock Bank
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex">
            <NavigationMenu>
              <NavigationMenuList>
                {menuItems.map((item) =>
                  item.submenu ? (
                    <NavigationMenuItem key={item.title}>
                      <NavigationMenuTrigger className="bg-transparent hover:bg-accent/50">
                        <div className="flex items-center">
                          {item.icon}
                          {item.title}
                        </div>
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                          {item.submenu.map((subItem) => (
                            <li key={subItem.title}>
                              <NavigationMenuLink asChild>
                                <Link
                                  href={subItem.href}
                                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                >
                                  <div className="flex items-center text-sm font-medium leading-none">
                                    {subItem.icon}
                                    <span className="ml-2">
                                      {subItem.title}
                                    </span>
                                  </div>
                                  {subItem.description && (
                                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                      {subItem.description}
                                    </p>
                                  )}
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  ) : (
                    <NavigationMenuItem key={item.title}>
                      <Link href={item.href} legacyBehavior passHref>
                        <NavigationMenuLink
                          className={cn(
                            navigationMenuTriggerStyle(),
                            "bg-transparent hover:bg-accent/50",
                            pathname === item.href && "bg-accent/50",
                          )}
                        >
                          <div className="flex items-center">
                            {item.icon}
                            {item.title}
                          </div>
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                  ),
                )}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-t">
          <div className="container mx-auto py-4 px-6 space-y-4">
            {menuItems.map((item) => (
              <div key={item.title} className="py-1">
                {item.submenu ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        className="w-full justify-between text-left"
                      >
                        <div className="flex items-center">
                          {item.icon}
                          {item.title}
                        </div>
                        <ChevronDown className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-full">
                      {item.submenu.map((subItem) => (
                        <DropdownMenuItem
                          key={subItem.title}
                          onClick={() => {
                            router.push(subItem.href);
                            setIsMobileMenuOpen(false);
                          }}
                        >
                          <div className="flex items-center">
                            {subItem.icon}
                            <span className="ml-2">{subItem.title}</span>
                          </div>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Button
                    variant="ghost"
                    className="w-full justify-start"
                    onClick={() => {
                      router.push(item.href);
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    <div className="flex items-center">
                      {item.icon}
                      {item.title}
                    </div>
                  </Button>
                )}
              </div>
            ))}
            <div className="pt-4 flex flex-col gap-2"></div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
