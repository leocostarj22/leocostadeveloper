
import { Button } from "@/components/ui/button";
import { ArrowDownIcon } from "lucide-react";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center relative px-4 py-20">
      {/* Background image with low opacity */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src="/lovable-uploads/21352f70-41c9-47eb-a482-8646f4afeda5.png" 
          alt="Code background" 
          className="w-full h-full object-cover opacity-10"
        />
      </div>
      
      <div className="container max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-8 flex justify-center">
          <div className="rounded-full overflow-hidden border-4 border-primary/20 h-40 w-40 animate-fade-in">
            <img 
              src="/lovable-uploads/023b8a20-d348-4de8-9f97-6c48908181bf.png" 
              alt="Leonardo Costa" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            Leonardo Costa
          </span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-medium mb-8 animate-fade-in" style={{ animationDelay: "200ms" }}>
          Desenvolvedor Web Full Stack
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "400ms" }}>
          Especialista em criar sites interativos e aplicações web com foco em usabilidade,
          performance e design moderno.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "600ms" }}>
          <Button onClick={() => scrollToSection('projects')} size="lg" className="bg-primary hover:bg-primary/90">
            Ver Projetos
          </Button>
          <Button onClick={() => scrollToSection('contact')} variant="outline" size="lg">
            Entre em Contato
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={() => scrollToSection('about')}
          aria-label="Scroll to about section"
        >
          <ArrowDownIcon className="h-6 w-6" />
        </Button>
      </div>
      
      <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-60 h-60 rounded-full bg-primary blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 right-1/4 w-60 h-60 rounded-full bg-accent blur-3xl animate-pulse-slow" style={{ animationDelay: "1s" }}></div>
      </div>
    </section>
  );
}
