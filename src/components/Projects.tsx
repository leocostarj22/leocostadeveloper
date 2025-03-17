
import { ProjectsTabs } from "./ProjectsTabs";

export function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-secondary/50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="section-title text-center mb-16">Meus Projetos</h2>
        <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-12">
          Ao longo da minha carreira, desenvolvi diversos sites e aplicações web utilizando diferentes tecnologias.
          Aqui estão alguns dos principais projetos em Joomla e WordPress que tive o prazer de trabalhar.
        </p>
        <ProjectsTabs />
      </div>
    </section>
  );
}
