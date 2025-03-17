
import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLinkIcon } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  url: string;
  type: string;
  technologies: string[];
  delay?: number;
  image?: string;
}

export function ProjectCard({ title, description, url, type, technologies, delay = 0, image = "/placeholder.svg" }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  const formattedUrl = url.startsWith('http') ? url : `https://${url}`;
  
  return (
    <Card 
      className="project-card h-full flex flex-col animate-fade-in overflow-hidden"
      style={{ animationDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="h-48 overflow-hidden relative">
        <img 
          src={image} 
          alt={title} 
          className={`w-full h-full object-cover transition-transform duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/80 pointer-events-none"></div>
      </div>
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl mb-1">{title}</CardTitle>
            <CardDescription className="text-sm">
              {type}
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground">{description}</p>
        
        <div className="mt-4 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span 
              key={tech} 
              className="text-xs px-2 py-1 bg-secondary text-secondary-foreground rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button 
          variant="outline" 
          className="w-full group"
          onClick={() => window.open(formattedUrl, '_blank')}
        >
          <span className="transition-transform group-hover:translate-x-[-4px]">Visitar Site</span>
          <ExternalLinkIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-[4px]" />
        </Button>
      </CardFooter>
    </Card>
  );
}
