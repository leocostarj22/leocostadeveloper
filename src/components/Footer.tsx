
import { HeartIcon, GithubIcon, LinkedinIcon } from "lucide-react";
import { Button } from "./ui/button";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 px-4 border-t">
      <div className="container mx-auto max-w-5xl text-center">
        <div className="flex justify-center space-x-4 mb-4">
          <Button variant="ghost" size="icon" onClick={() => window.open("https://github.com/leocostarj22", "_blank")}>
            <GithubIcon className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" onClick={() => window.open("https://www.linkedin.com/in/leocostadeveloper/", "_blank")}>
            <LinkedinIcon className="h-5 w-5" />
          </Button>
        </div>
        <p className="text-muted-foreground">
          &copy; {currentYear} Leonardo Costa. Todos os direitos reservados.
        </p>
        <p className="text-sm text-muted-foreground mt-2 flex items-center justify-center gap-1">
          Desenvolvido por @leocostadeveloper com muito café
        </p>
      </div>
    </footer>
  );
}
