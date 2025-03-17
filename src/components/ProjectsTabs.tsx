
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProjectCard } from "./ProjectCard";

export function ProjectsTabs() {
  const [activeTab, setActiveTab] = useState("joomla");

  const wordpressProjects = [
    {
      title: "Grupo Sigma System",
      description: "Site institucional para empresa de soluções em sistemas.",
      url: "www.gruposigmasystem.com.br",
      type: "Site Institucional",
      technologies: ["WordPress", "PHP", "HTML", "CSS", "JavaScript"],
      image: "/gruposigmasystem.png"
    },
    {
      title: "Praxisystem",
      description: "Website para empresa especializada em soluções de software.",
      url: "www.praxisistem.com.br",
      type: "Site Institucional",
      technologies: ["WordPress", "PHP", "HTML", "CSS", "JavaScript"],
      image: "/praxisistem.png"
    },
    {
      title: "Colégio Sant'Anna",
      description: "Site para empresa do setor da Educação.",
      url: "www.csantanna.com.br",
      type: "Site Institucional",
      technologies: ["WordPress", "PHP", "HTML", "CSS", "JavaScript"],
      image: "/colegiosantanna.png"
    },
    {
      title: "Varejão da Construção",
      description: "E-commerce para loja de materiais de construção.",
      url: "www.varejaodaconstrucao.com",
      type: "E-commerce",
      technologies: ["WordPress", "WooCommerce", "PHP", "HTML", "CSS", "JavaScript"],
      image: "/varejaodaconstrucao.png"
    }
  ];

  const joomlaProjects = [
    {
      title: "Médio Tejo",
      description: "Portal regional para a comunidade intermunicipal do Médio Tejo em Portugal.",
      url: "mediotejo.pt",
      type: "Portal Regional",
      technologies: ["Joomla", "PHP", "HTML", "CSS", "JavaScript"],
      image: "/mediotejo.png"
    },
    {
      title: "Município de Alcanena",
      description: "Site oficial para o município de Alcanena em Portugal.",
      url: "cm-alcanena.pt",
      type: "Site Municipal",
      technologies: ["Joomla", "PHP", "HTML", "CSS", "JavaScript"],
      image: "/alcanena.png"
    },
    {
      title: "Município de Constância",
      description: "Site oficial para o município de Constância em Portugal.",
      url: "cm-constancia.pt",
      type: "Site Municipal",
      technologies: ["Joomla", "PHP", "HTML", "CSS", "JavaScript"],
      image: "/constancia.png"
    },
    {
      title: "Município de Vila Nova da Barquinha",
      description: "Site oficial para o município de Vila Nova da Barquinha em Portugal.",
      url: "cm-vnbarquinha.pt",
      type: "Site Municipal",
      technologies: ["Joomla", "PHP", "HTML", "CSS", "JavaScript"],
      image: "/barquinha.png"
    },
    {
      title: "Município de Ferreira do Zêzere",
      description: "Site oficial para o município de Ferreira do Zêzere em Portugal.",
      url: "cm-ferreiradozezere.pt",
      type: "Site Municipal",
      technologies: ["Joomla", "PHP", "HTML", "CSS", "JavaScript"],
      image: "/ferreira.png"
    },
    {
      title: "Município do Entroncamento",
      description: "Site oficial para o município do Entroncamento em Portugal.",
      url: "cm-entroncamento.pt",
      type: "Site Municipal",
      technologies: ["Joomla", "PHP", "HTML", "CSS", "JavaScript"],
      image: "/entroncamento.png"
    },
    {
      title: "Município de Mação",
      description: "Site oficial para o município de Mação em Portugal.",
      url: "cm-macao.pt",
      type: "Site Municipal",
      technologies: ["Joomla", "PHP", "HTML", "CSS", "JavaScript"],
      image: "/macao.png"
    },
    {
      title: "Município de Sardoal",
      description: "Site oficial para o município de Sardoal em Portugal.",
      url: "cm-sardoal.pt",
      type: "Site Municipal",
      technologies: ["Joomla", "PHP", "HTML", "CSS", "JavaScript"],
      image: "/sardoal.png"
    },
    {
      title: "Município de Sertã",
      description: "Site oficial para o município de Sertã em Portugal.",
      url: "cm-serta.pt",
      type: "Site Municipal",
      technologies: ["Joomla", "PHP", "HTML", "CSS", "JavaScript"],
      image: "/serta.png"
    },
    {
      title: "Município de Tomar",
      description: "Site oficial para o município de Tomar em Portugal.",
      url: "cm-tomar.pt",
      type: "Site Municipal",
      technologies: ["Joomla", "PHP", "HTML", "CSS", "JavaScript"],
      image: "/tomar.png"
    },
    {
      title: "Município de Torres Novas",
      description: "Site oficial para o município de Torres Novas em Portugal.",
      url: "cm-torresnovas.pt",
      type: "Site Municipal",
      technologies: ["Joomla", "PHP", "HTML", "CSS", "JavaScript"],
      image: "/torresnovas.png"
    },
    {
      title: "Município de Vila de Rei",
      description: "Site oficial para o município de Vila de Rei em Portugal.",
      url: "cm-viladerei.pt",
      type: "Site Municipal",
      technologies: ["Joomla", "PHP", "HTML", "CSS", "JavaScript"],
      image: "/viladerei.png"
    },
    {
      title: "Turismo de Constância",
      description: "Portal turístico do município de Constância.",
      url: "turismo.cm-constancia.pt",
      type: "Portal Turístico",
      technologies: ["Joomla", "PHP", "HTML", "CSS", "JavaScript"],
      image: "/turismoconstancia.png"
    },
    {
      title: "Turismo de Sardoal",
      description: "Portal turístico do município de Sardoal.",
      url: "turismo.cm-sardoal.pt",
      type: "Portal Turístico",
      technologies: ["Joomla", "PHP", "HTML", "CSS", "JavaScript"],
      image: "/turismosardoal.png"
    }
  ];

  return (
    <Tabs defaultValue="joomla" className="w-full" onValueChange={setActiveTab}>
      <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
        <TabsTrigger value="joomla">Joomla</TabsTrigger>
        <TabsTrigger value="wordpress">WordPress</TabsTrigger>
      </TabsList>
      
      <TabsContent value="joomla" className="mt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {joomlaProjects.map((project, index) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              url={project.url}
              type={project.type}
              technologies={project.technologies}
              delay={index * 50}
              image={project.image}
            />
          ))}
        </div>
      </TabsContent>
      
      <TabsContent value="wordpress" className="mt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wordpressProjects.map((project, index) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              url={project.url}
              type={project.type}
              technologies={project.technologies}
              delay={index * 100}
              image={project.image}
            />
          ))}
        </div>
      </TabsContent>
    </Tabs>
  );
}
