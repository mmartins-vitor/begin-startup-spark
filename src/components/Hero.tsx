import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoImage from "@/assets/begin-logo.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,hsl(38_92%_50%/0.08),transparent_50%)]" />
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          {/* Logo */}
          <div className="mb-12 flex justify-center">
            <img 
              src={logoImage} 
              alt="BEGIN Logo" 
              className="w-32 h-32 md:w-40 md:h-40 animate-float"
            />
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 tracking-tight">
            Brazil Egix Innovation
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-light">
            Transformando ideias em soluções tecnológicas inovadoras
          </p>
          
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Desenvolvemos tecnologia de ponta para impulsionar o futuro dos negócios brasileiros
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-xl transition-all hover:scale-105"
            >
              Conhecer Soluções
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-border hover:bg-accent/10 px-8 py-6 text-lg rounded-xl transition-all hover:scale-105"
            >
              Entre em Contato
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
