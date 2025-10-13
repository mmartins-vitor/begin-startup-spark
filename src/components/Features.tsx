import { Cpu, Zap, Shield, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Cpu,
    title: "Inteligência Artificial",
    description: "Soluções baseadas em IA para automação e insights avançados de negócio"
  },
  {
    icon: Zap,
    title: "Desenvolvimento Ágil",
    description: "Metodologias modernas para entregas rápidas e eficientes"
  },
  {
    icon: Shield,
    title: "Segurança Robusta",
    description: "Proteção de dados e infraestrutura com os mais altos padrões"
  },
  {
    icon: TrendingUp,
    title: "Escalabilidade",
    description: "Arquitetura preparada para crescer junto com seu negócio"
  }
];

const Features = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nossas Soluções
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tecnologias de ponta para transformar seu negócio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="group border-2 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-card"
            >
              <CardContent className="p-8">
                <div className="mb-6 w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <feature.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
