
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Skill {
  name: string;
  level: number;
  category: string;
}

export function Skills() {
  const skills: Skill[] = [
    { name: "HTML", level: 95, category: "Frontend" },
    { name: "CSS", level: 90, category: "Frontend" },
    { name: "JavaScript", level: 85, category: "Frontend" },
    { name: "PHP", level: 90, category: "Backend" },
    { name: "Laravel", level: 80, category: "Backend" },
    { name: "Joomla", level: 95, category: "CMS" },
    { name: "WordPress", level: 95, category: "CMS" },
    { name: "Drupal", level: 75, category: "CMS" },
    { name: "MySQL", level: 85, category: "Database" },
    { name: "MariaDB", level: 85, category: "Database" },
    { name: "SQL Server", level: 75, category: "Database" },
    { name: "API Rest", level: 80, category: "Backend" },
    { name: ".NET", level: 70, category: "Backend" },
  ];

  // Define cores específicas para cada categoria
  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Frontend":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300";
      case "Backend":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300";
      case "CMS":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
      case "Database":
        return "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300";
    }
  };

  const categories = Array.from(new Set(skills.map(skill => skill.category)));

  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <h2 className="section-title text-center mb-16">Minhas Competências</h2>
        
        <div className="grid grid-cols-1 gap-8">
          {categories.map((category, categoryIndex) => (
            <Card key={category} className="animate-fade-in" style={{ animationDelay: `${categoryIndex * 150}ms` }}>
              <CardContent className="p-6">
                <div className="flex items-center mb-6">
                  <h3 className="text-xl font-semibold">{category}</h3>
                  <Badge className={`ml-3 ${getCategoryColor(category)}`}>{skills.filter(skill => skill.category === category).length}</Badge>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {skills
                    .filter(skill => skill.category === category)
                    .map((skill, skillIndex) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <span className="font-medium">{skill.name}</span>
                            <Badge variant="outline" className={`ml-2 text-xs px-1.5 py-0 ${getCategoryColor(category)}`}>
                              {skill.level}%
                            </Badge>
                          </div>
                        </div>
                        <div className="skill-bar">
                          <div 
                            className="skill-progress" 
                            style={{ 
                              width: `${skill.level}%`, 
                              transition: "width 1s ease-in-out",
                              transitionDelay: `${skillIndex * 100}ms`
                            }}
                          ></div>
                        </div>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
