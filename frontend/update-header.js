const fs = require('fs');

const header = `"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, Building2, BarChart3, Users } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigation = [
    { name: "Properties", href: "/properties", icon: Building2 },
    { name: "CRM", href: "/crm", icon: Users },
    { name: "Analytics", href: "/analytics", icon: BarChart3 },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="flex items-center justify-center w-10 h-10 bg-foreground text-background rounded-sm group-hover:scale-105 transition-transform">
              <span className="text-xl font-bold">P</span>
            </div>
            <span className="text-2xl font-bold tracking-tight text-foreground">PRESTIGE</span>
          </Link>
          <div className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href}>
                <Button variant="ghost" className="flex items-center gap-2">
                  <item.icon className="w-4 h-4" />{item.name}
                </Button>
              </Link>
            ))}
          </div>
          <div className="hidden md:flex items-center space-x-3">
            <Link href="/pricing"><Button variant="outline">Pricing</Button></Link>
            <Link href="/login"><Button>Get Started</Button></Link>
          </div>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2 rounded-lg hover:bg-accent">
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-2 border-t border-border">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href}>
                <Button variant="ghost" className="w-full justify-start flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
                  <item.icon className="w-4 h-4" />{item.name}
                </Button>
              </Link>
            ))}
            <div className="pt-4 space-y-2">
              <Link href="/pricing" className="block"><Button variant="outline" className="w-full">Pricing</Button></Link>
              <Link href="/login" className="block"><Button className="w-full">Get Started</Button></Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
`;

fs.writeFileSync('components/layout/Header.tsx', header);
console.log('Updated Header with PRESTIGE branding');
