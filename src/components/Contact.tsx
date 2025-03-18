
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";
import { MailIcon, MapPinIcon, GithubIcon, LinkedinIcon } from "lucide-react";
import emailjs from '@emailjs/browser';

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: 'Leo Costa',
      };

      const response = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      if (response.status === 200) {
        toast.success("Mensagem enviada com sucesso! Entraremos em contato em breve.");
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error("Erro ao enviar mensagem. Tente novamente mais tarde.");
      }
    } catch (error) {
      console.error('Error sending email:', error);
      toast.error("Erro ao enviar mensagem. Tente novamente mais tarde.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 bg-secondary/50 relative">
      {/* Background image with low opacity */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src="/lovable-uploads/628268de-feab-4683-8d46-a3aacb4373a1.png" 
          alt="Bridge background" 
          className="w-full h-full object-cover opacity-10"
        />
      </div>
      
      <div className="container mx-auto max-w-5xl relative z-10">
        <h2 className="section-title text-center mb-16">Entre em Contato</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-8 animate-slide-in">
            <p className="text-lg">
              Estou disponível para novos projetos e colaborações. 
              Se você tem um projeto em mente ou apenas quer conversar sobre 
              tecnologia, entre em contato comigo!
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-full">
                  <MailIcon className="h-5 w-5 text-primary" />
                </div>
                <a href="mailto:leocostadeveloper@icloud.com" className="hover:text-primary transition-colors">
                  leocostadeveloper@icloud.com
                </a>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-full">
                  <MapPinIcon className="h-5 w-5 text-primary" />
                </div>
                <span>Brasil & Portugal</span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-full">
                  <GithubIcon className="h-5 w-5 text-primary" />
                </div>
                <a href="https://github.com/leocostarj22" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  GitHub
                </a>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-full">
                  <LinkedinIcon className="h-5 w-5 text-primary" />
                </div>
                <a href="https://www.linkedin.com/in/leocostadeveloper/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
          
          <Card className="animate-slide-in bg-card/90 backdrop-blur-sm" style={{ animationDelay: "200ms" }}>
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium">
                    Nome
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Seu nome"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Seu email"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium">
                    Mensagem
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Sua mensagem"
                    rows={5}
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
