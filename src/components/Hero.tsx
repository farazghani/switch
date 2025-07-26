import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, X, Home, Users } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
import appMockup from "@/assets/app-mockup.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <Badge variant="secondary" className="w-fit">
                🇮🇳 Made for India's Gen Z
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Swipe Right for Your
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {" "}Perfect Home
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Find verified rentals and roommates effortlessly. Tinder-style swiping meets 
                real estate - making relocation simple for India's young professionals.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="text-lg px-8 py-6">
                <Home className="mr-2 h-5 w-5" />
                Find Your Place
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                <Users className="mr-2 h-5 w-5" />
                Find Roommates
              </Button>
            </div>

            <div className="flex items-center space-x-8 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>1000+ Verified Listings</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>Safe & Trusted</span>
              </div>
            </div>
          </div>

          {/* Right Content - App Mockup */}
          <div className="relative animate-slide-up">
            <div className="relative max-w-md mx-auto">
              {/* Background decoration */}
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-4 -left-4 w-64 h-64 bg-gradient-to-tr from-secondary/20 to-primary/20 rounded-full blur-3xl"></div>
              
              {/* Main phone mockup */}
              <div className="relative z-10 bg-gradient-to-br from-card to-card/80 rounded-3xl p-6 shadow-2xl border border-border/50 backdrop-blur-sm">
                <img 
                  src={appMockup} 
                  alt="Switch App Interface" 
                  className="w-full rounded-2xl shadow-lg"
                />
                
                {/* Floating action buttons */}
                <div className="absolute -right-6 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4">
                  <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center shadow-lg animate-float">
                    <X className="h-6 w-6 text-white" />
                  </div>
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow-lg animate-float" style={{animationDelay: '1.5s'}}>
                    <Heart className="h-6 w-6 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;