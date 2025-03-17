
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCapIcon, BriefcaseIcon, LightbulbIcon } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <h2 className="section-title text-center mb-16">Sobre Mim</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 animate-slide-in">
            <p className="text-lg">
              Sou um desenvolvedor web apaixonado por criar experiências digitais excepcionais. 
              Com expertise em diversas tecnologias e frameworks, meu objetivo é desenvolver 
              soluções web que sejam não apenas visualmente atraentes, mas também altamente 
              funcionais e eficientes.
            </p>
            <p className="text-lg">
              Minha jornada no desenvolvimento web começou com projetos em Joomla e WordPress, 
              expandindo-se para frameworks mais avançados como Laravel e .NET. Tenho orgulho 
              de ter trabalhado em diversos projetos para municípios portugueses e empresas brasileiras.
            </p>
            <p className="text-lg">
              Acredito que o bom design e a programação eficiente andam juntos para criar 
              experiências digitais memoráveis que ajudam empresas e organizações a alcançarem 
              seus objetivos.
            </p>
          </div>
          
          <div className="space-y-6">
            <Card className="border-l-4 border-l-primary animate-slide-in">
              <CardContent className="flex items-start gap-4 p-6">
                <div className="bg-primary/10 p-3 rounded-full">
                  <BriefcaseIcon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Experiência Profissional</h3>
                  <p className="text-muted-foreground">
                    Desenvolvimento de sites e aplicações para empresas e municípios, 
                    com foco em usabilidade e performance.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-l-4 border-l-primary animate-slide-in" style={{ animationDelay: "200ms" }}>
              <CardContent className="flex items-start gap-4 p-6">
                <div className="bg-primary/10 p-3 rounded-full">
                  <GraduationCapIcon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Formação</h3>
                  <p className="text-muted-foreground">
                    Especialização contínua em tecnologias web modernas e 
                    boas práticas de desenvolvimento.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-l-4 border-l-primary animate-slide-in" style={{ animationDelay: "400ms" }}>
              <CardContent className="flex items-start gap-4 p-6">
                <div className="bg-primary/10 p-3 rounded-full">
                  <LightbulbIcon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Abordagem</h3>
                  <p className="text-muted-foreground">
                    Foco em soluções criativas, código limpo e manutenível, 
                    e experiências de usuário excepcionais.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
