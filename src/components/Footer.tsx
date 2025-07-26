import { Badge } from "@/components/ui/badge";
import { Instagram, Twitter, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">S</span>
              </div>
              <span className="text-xl font-bold">Switch</span>
            </div>
            <p className="text-muted-foreground">
              Making home discovery effortless for India's Gen Z through smart technology 
              and verified connections.
            </p>
            <div className="flex space-x-3">
              <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer">
                <Instagram className="h-4 w-4" />
              </div>
              <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer">
                <Twitter className="h-4 w-4" />
              </div>
              <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer">
                <Linkedin className="h-4 w-4" />
              </div>
            </div>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Product</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">How it Works</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Download App</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Company</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Press</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Support</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Safety</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-muted-foreground text-sm">
            © 2024 Switch. All rights reserved. Made with ❤️ for India's Gen Z.
          </div>
          <div className="flex items-center space-x-4">
            <Badge variant="secondary" className="text-xs">
              🇮🇳 Proudly Indian
            </Badge>
            <div className="flex items-center space-x-1 text-muted-foreground text-sm">
              <Mail className="h-4 w-4" />
              <span>hello@switchapp.in</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;