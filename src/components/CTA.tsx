import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Mail, Bell } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const CTA = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!email) return;

  try {
    const res = await fetch("https://script.google.com/macros/s/AKfycbxmDTi2Ns-MXP-qV07d64yzkFQzZPRQ0HHUzKfgMLlGV5RCT3BIrS2Xq1elgI1nwlY/exec", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: new URLSearchParams({ email }).toString()
    });

    const text = await res.text();
    if (text === "Success") {
      setIsSubmitted(true);
      toast({
        title: "Thanks for joining our waitlist!",
        description: "We'll notify you as soon as Switch launches.",
      });
      setEmail("");
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  } catch (err) {
    toast({
      title: "Something went wrong.",
      description: "Please try again later.",
      variant: "destructive",
    });
  }
};

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <Badge variant="secondary" className="w-fit mx-auto">
            🚀 Coming Soon
          </Badge>

          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              Be the First to{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Switch
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're building the future of home discovery for India's Gen Z.
              Join our waitlist to get early access and exclusive updates.
            </p>
          </div>

          {/* Email Signup Form */}
          <div className="max-w-md mx-auto">
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 h-12 text-base"
                required
              />
              <Button
                type="submit"
                variant="hero"
                size="lg"
                className="h-12 px-6"
                disabled={isSubmitted}
              >
                {isSubmitted ? (
                  <>
                    <Bell className="mr-2 h-5 w-5" />
                    Added!
                  </>
                ) : (
                  <>
                    <Mail className="mr-2 h-5 w-5" />
                    Join Waitlist
                  </>
                )}
              </Button>
            </form>
            <p className="text-sm text-muted-foreground mt-3">
              No spam, ever. Unsubscribe anytime.
            </p>
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 pt-8 border-t border-border/20">
            <div className="text-center space-y-2">
              <div className="text-lg font-semibold text-primary">Early Access</div>
              <div className="text-sm text-muted-foreground">
                Be among the first to try Switch
              </div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-lg font-semibold text-primary">Exclusive Features</div>
              <div className="text-sm text-muted-foreground">
                Get access to beta features first
              </div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-lg font-semibold text-primary">Special Pricing</div>
              <div className="text-sm text-muted-foreground">
                Early bird discounts and offers
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
