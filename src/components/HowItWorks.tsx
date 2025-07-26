import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { UserPlus, Search, Heart, Home } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: UserPlus,
      step: "01",
      title: "Sign Up",
      description: "Create your profile in minutes with basic details and preferences",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Search,
      step: "02", 
      title: "Set Preferences",
      description: "Tell us your budget, location, and what you're looking for",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Heart,
      step: "03",
      title: "Start Swiping",
      description: "Swipe through verified listings and potential roommates",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Home,
      step: "04",
      title: "Move In",
      description: "Connect with matches and finalize your perfect living arrangement",
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="w-fit mx-auto">
            🚀 Process
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold">
            How Switch
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {" "}Works
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From signup to move-in, we've made the entire process as smooth as possible.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <Card 
                key={index}
                className="group relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300"
              >
                <CardContent className="p-6 space-y-4 text-center relative z-10">
                  <div className="mx-auto w-16 h-16 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="text-sm font-semibold text-muted-foreground">
                      Step {step.step}
                    </div>
                    <h3 className="text-xl font-bold">{step.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </CardContent>
                
                {/* Step connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary/30 to-transparent z-0"></div>
                )}
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;