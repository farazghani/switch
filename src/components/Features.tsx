import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Shield, Smartphone, Users, MapPin, Clock } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Heart,
      title: "Swipe to Match",
      description: "Tinder-style interface makes finding your perfect rental or roommate fun and intuitive",
      color: "text-red-500"
    },
    {
      icon: Shield,
      title: "Verified Listings",
      description: "All properties and profiles are thoroughly verified for your safety and peace of mind",
      color: "text-green-500"
    },
    {
      icon: Smartphone,
      title: "Mobile-First",
      description: "Designed specifically for mobile use - find your next home while on the go",
      color: "text-blue-500"
    },
    {
      icon: Users,
      title: "Find Roommates",
      description: "Connect with like-minded people looking for shared living arrangements",
      color: "text-purple-500"
    },
    {
      icon: MapPin,
      title: "Location-Based",
      description: "Discover places near your work, college, or preferred neighborhoods",
      color: "text-orange-500"
    },
    {
      icon: Clock,
      title: "Quick Setup",
      description: "Get started in minutes - no lengthy forms or complicated processes",
      color: "text-cyan-500"
    }
  ];

  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="w-fit mx-auto">
            ✨ Features
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold">
            Everything You Need in One
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {" "}Simple App
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Switch combines the best of modern technology with real estate to create 
            the most seamless home-finding experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border/50 bg-card/50 backdrop-blur-sm"
              >
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className={`h-6 w-6 ${feature.color}`} />
                    </div>
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;