import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Smartphone, Download } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <Badge variant="secondary" className="w-fit mx-auto">
            🎉 Ready to Switch?
          </Badge>
          
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              Your Perfect Home is Just a
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {" "}Swipe Away
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join thousands of Gen Z users who've already found their perfect living 
              arrangements through Switch. Start your journey today!
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="lg" className="text-lg px-8 py-6">
              <Smartphone className="mr-2 h-5 w-5" />
              Get Started Now
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              <Download className="mr-2 h-5 w-5" />
              Download App
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-8 border-t border-border/20">
            <div className="text-center space-y-2">
              <div className="text-2xl font-bold text-primary">10K+</div>
              <div className="text-muted-foreground">Active Users</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-2xl font-bold text-primary">5K+</div>
              <div className="text-muted-foreground">Successful Matches</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-2xl font-bold text-primary">15+</div>
              <div className="text-muted-foreground">Cities Covered</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;