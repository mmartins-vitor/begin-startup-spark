const About = () => {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Sobre a BEGIN
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Somos uma startup brasileira focada em democratizar o acesso à tecnologia de ponta. 
              Nossa missão é desenvolver soluções inovadoras que impulsionem a transformação digital 
              das empresas brasileiras.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Com uma equipe especializada e apaixonada por tecnologia, trabalhamos para criar 
              produtos que fazem a diferença no mercado, combinando inovação, qualidade e 
              compromisso com resultados.
            </p>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-accent/20 via-accent/10 to-transparent p-8 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl font-bold text-accent mb-4">100+</div>
                <p className="text-xl text-foreground font-medium mb-8">Projetos Entregues</p>
                
                <div className="text-6xl font-bold text-accent mb-4">50+</div>
                <p className="text-xl text-foreground font-medium mb-8">Clientes Satisfeitos</p>
                
                <div className="text-6xl font-bold text-accent mb-4">5+</div>
                <p className="text-xl text-foreground font-medium">Anos de Experiência</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
