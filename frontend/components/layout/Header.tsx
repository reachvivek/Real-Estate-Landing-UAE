"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, Building2, UserCircle, BookOpen, Mail, Phone } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigation = [
    { name: "Properties", href: "/properties", icon: Building2 },
    { name: "Agents", href: "/agents", icon: UserCircle },
    { name: "Blog", href: "/blog", icon: BookOpen },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16">
          {/* Logo - Fixed width */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="flex items-center justify-center w-10 h-10 bg-foreground text-background rounded-sm group-hover:scale-105 transition-transform">
                <span className="text-xl font-bold">P</span>
              </div>
              <span className="text-2xl font-bold tracking-tight text-foreground whitespace-nowrap">PRESTIGE</span>
            </Link>
          </div>

          {/* Center Navigation - Flex grow and center */}
          <div className="hidden md:flex flex-1 items-center justify-center">
            <div className="flex items-center space-x-2">
              {navigation.map((item) => (
                <Link key={item.name} href={item.href}>
                  <Button variant="ghost" className="flex items-center gap-2 h-10">
                    <item.icon className="w-4 h-4" />
                    {item.name}
                  </Button>
                </Link>
              ))}
            </div>
          </div>

          {/* Right Actions - Fixed width */}
          <div className="hidden md:flex flex-shrink-0 items-center space-x-3">
            <Link href="/contact">
              <Button variant="outline" size="default" className="h-10">
                <Mail className="w-4 h-4 mr-2" />
                Contact
              </Button>
            </Link>
            <a href="tel:+971501234567">
              <Button size="default" className="h-10">
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden ml-auto">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg hover:bg-accent transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-2 border-t border-border">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href}>
                <Button
                  variant="ghost"
                  className="w-full justify-start flex items-center gap-2 h-10"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <item.icon className="w-4 h-4" />
                  {item.name}
                </Button>
              </Link>
            ))}
            <div className="pt-4 space-y-2">
              <Link href="/contact" className="block" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="outline" className="w-full h-10">
                  <Mail className="w-4 h-4 mr-2" />
                  Contact Us
                </Button>
              </Link>
              <a href="tel:+971501234567" className="block">
                <Button className="w-full h-10">
                  <Phone className="w-4 h-4 mr-2" />
                  +971 50 123 4567
                </Button>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
