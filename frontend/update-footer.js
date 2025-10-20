const fs = require('fs');

const footer = `import Link from "next/link";
import { Home, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Footer() {
  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-3">
              <div className="flex items-center justify-center w-10 h-10 bg-foreground text-background rounded-sm">
                <span className="text-xl font-bold">P</span>
              </div>
              <span className="text-2xl font-bold tracking-tight text-foreground">PRESTIGE</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Premium real estate solutions with advanced CRM and analytics tools for modern professionals.
            </p>
            <div className="flex space-x-2">
              <Button size="icon" variant="outline" className="hover:bg-foreground hover:text-background transition-colors">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button size="icon" variant="outline" className="hover:bg-foreground hover:text-background transition-colors">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button size="icon" variant="outline" className="hover:bg-foreground hover:text-background transition-colors">
                <Instagram className="w-4 h-4" />
              </Button>
              <Button size="icon" variant="outline" className="hover:bg-foreground hover:text-background transition-colors">
                <Linkedin className="w-4 h-4" />
              </Button>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/properties" className="hover:text-foreground transition-colors">Browse Properties</Link></li>
              <li><Link href="/pricing" className="hover:text-foreground transition-colors">Pricing</Link></li>
              <li><Link href="/about" className="hover:text-foreground transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-foreground transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">For Agents</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/crm" className="hover:text-foreground transition-colors">CRM Dashboard</Link></li>
              <li><Link href="/analytics" className="hover:text-foreground transition-colors">Analytics</Link></li>
              <li><Link href="/resources" className="hover:text-foreground transition-colors">Resources</Link></li>
              <li><Link href="/support" className="hover:text-foreground transition-colors">Support</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="font-semibold">Stay Updated</h3>
            <p className="text-sm text-muted-foreground">
              Subscribe to get latest properties and insights.
            </p>
            <div className="flex gap-2">
              <Input type="email" placeholder="Your email" className="flex-1" />
              <Button>Subscribe</Button>
            </div>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>contact@prestige.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 000-0000</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>New York, NY</span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-border mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>&copy; 2025 PRESTIGE. All rights reserved.</p>
          <div className="flex gap-4 mt-4 sm:mt-0">
            <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-foreground transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
`;

fs.writeFileSync('components/layout/Footer.tsx', footer);
console.log('Updated Footer with PRESTIGE branding');
