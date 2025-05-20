
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Star } from "lucide-react";

const Skills = () => {
  const categories = [
    {
      name: "Frontend Development",
      icon: <Code className="h-6 w-6 text-teal" />,
      skills: [
        "React", "TypeScript", "Next.js", "HTML5", "CSS3/SASS", 
        "Tailwind CSS", "Redux", "GraphQL", "JavaScript (ES6+)", "Responsive Design"
      ]
    },
    {
      name: "Backend Development",
      icon: <Star className="h-6 w-6 text-teal" />, 
      skills: [
        "Node.js", "Express", "PostgreSQL", "MongoDB", "Redis",
        "REST API Design", "Authentication & Authorization", "Docker", "AWS", "Firebase"
      ]
    }
  ];

  return (
    <section id="skills" className="section-padding bg-navy-dark">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-light mb-12 flex items-center">
          <span className="font-mono text-teal mr-2">02.</span> Skills & Technologies
          <div className="ml-4 h-px bg-slate/20 flex-grow"></div>
        </h2>

        <div className="grid gap-8 md:gap-12">
          {categories.map((category, index) => (
            <div key={category.name} className="opacity-0 animate-fadeIn" style={{ animationDelay: `${index * 100}ms` }}>
              <Card className="glass-card bg-navy-light/50 border border-slate/10 overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-center mb-6">
                    {category.icon}
                    <h3 className="text-xl font-semibold ml-3 text-slate-light">{category.name}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map(skill => (
                      <Badge 
                        key={skill} 
                        className="bg-slate/10 hover:bg-slate/20 text-teal border border-slate/20"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
