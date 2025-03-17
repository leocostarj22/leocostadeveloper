
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X, Menu, HomeIcon, CodeIcon, BriefcaseIcon, UserIcon, MailIcon } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const handleScroll = () => {
    setScrolled(window.scrollY > 20);
  };
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${scrolled ? 'bg-background/90 backdrop-blur-sm shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Avatar className="h-10 w-10 border-2 border-primary">
            <AvatarImage src="/lovable-uploads/023b8a20-d348-4de8-9f97-6c48908181bf.png" alt="Leonardo Costa" />
            <AvatarFallback>LC</AvatarFallback>
          </Avatar>
          <div className="text-xl font-bold text-primary">
            <span>Leonardo Costa</span>
          </div>
        </div>
        
        <div className="hidden md:flex items-center space-x-6">
          <Button variant="ghost" onClick={() => scrollToSection('home')} className="flex items-center gap-2">
            <HomeIcon className="h-4 w-4" />
            <span>Início</span>
          </Button>
          <Button variant="ghost" onClick={() => scrollToSection('about')} className="flex items-center gap-2">
            <UserIcon className="h-4 w-4" />
            <span>Sobre</span>
          </Button>
          <Button variant="ghost" onClick={() => scrollToSection('projects')} className="flex items-center gap-2">
            <BriefcaseIcon className="h-4 w-4" />
            <span>Projetos</span>
          </Button>
          <Button variant="ghost" onClick={() => scrollToSection('skills')} className="flex items-center gap-2">
            <CodeIcon className="h-4 w-4" />
            <span>Competências</span>
          </Button>
          <Button variant="ghost" onClick={() => scrollToSection('contact')} className="flex items-center gap-2">
            <MailIcon className="h-4 w-4" />
            <span>Contato</span>
          </Button>
        </div>
        
        <div className="md:hidden flex items-center">
          <Button variant="ghost" size="icon" onClick={toggleMenu}>
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-background/95 backdrop-blur-sm z-50 flex flex-col">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <Avatar className="h-10 w-10 border-2 border-primary">
                <AvatarImage src="/lovable-uploads/023b8a20-d348-4de8-9f97-6c48908181bf.png" alt="Leonardo Costa" />
                <AvatarFallback>LC</AvatarFallback>
              </Avatar>
              <div className="text-xl font-bold text-primary">
                <span>Leonardo Costa</span>
              </div>
            </div>
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              <X className="h-6 w-6" />
            </Button>
          </div>
          
          <div className="flex flex-col items-center justify-center flex-1 space-y-8">
            <Button variant="ghost" onClick={() => scrollToSection('home')} className="flex items-center gap-2 text-lg">
              <HomeIcon className="h-5 w-5" />
              <span>Início</span>
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection('about')} className="flex items-center gap-2 text-lg">
              <UserIcon className="h-5 w-5" />
              <span>Sobre</span>
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection('projects')} className="flex items-center gap-2 text-lg">
              <BriefcaseIcon className="h-5 w-5" />
              <span>Projetos</span>
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection('skills')} className="flex items-center gap-2 text-lg">
              <CodeIcon className="h-5 w-5" />
              <span>Competências</span>
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection('contact')} className="flex items-center gap-2 text-lg">
              <MailIcon className="h-5 w-5" />
              <span>Contato</span>
            </Button>
          </div>
        </div>
      )}

      <ThemeToggle />
    </nav>
  );
}
