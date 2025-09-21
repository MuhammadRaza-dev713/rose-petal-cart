import { Instagram, Facebook, Twitter, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-heading font-bold text-primary">
              Blush & Bloom
            </h3>
            <p className="text-muted-foreground font-body max-w-sm">
              Where feminine elegance meets timeless style. Discover pieces that celebrate your unique beauty.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="hover:bg-primary-soft">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary-soft">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary-soft">
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-heading font-semibold text-foreground">Quick Links</h4>
            <div className="flex flex-col space-y-2">
              <a href="/" className="text-muted-foreground hover:text-primary transition-romantic font-body">
                Shop All
              </a>
              <a href="/new-arrivals" className="text-muted-foreground hover:text-primary transition-romantic font-body">
                New Arrivals
              </a>
              <a href="/about" className="text-muted-foreground hover:text-primary transition-romantic font-body">
                About Us
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-romantic font-body">
                Size Guide
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-romantic font-body">
                Returns & Exchanges
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="font-heading font-semibold text-foreground">Stay in Bloom</h4>
            <p className="text-muted-foreground font-body">
              Subscribe to our newsletter for the latest collections and exclusive offers.
            </p>
            <div className="flex space-x-2">
              <Input
                type="email"
                placeholder="Your email"
                className="flex-1 font-body"
              />
              <Button className="bg-primary hover:bg-primary/90 font-body">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground font-body">
            © 2024 Blush & Bloom. All rights reserved. Made with love for the modern woman.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;