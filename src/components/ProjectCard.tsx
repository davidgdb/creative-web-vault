
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { LinkIcon, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  githubUrl?: string;
  liveUrl?: string;
  alignment?: "left" | "right";
  delay?: number;
}

const ProjectCard = ({
  title,
  description,
  technologies,
  imageUrl,
  githubUrl,
  liveUrl,
  alignment = "left",
  delay = 0
}: ProjectCardProps) => {
  return (
    <div
      className={`relative opacity-0 animate-fadeIn ${alignment === "right" ? "md:text-right" : ""}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <Card className="glass-card bg-navy-light/50 border border-slate/10 overflow-hidden relative">
        <div className="grid md:grid-cols-12 gap-0">
          <div
            className={`md:col-span-7 relative ${
              alignment === "right" ? "md:order-last" : ""
            }`}
          >
            <CardContent className="p-6 md:p-8 h-full flex flex-col justify-center">
              <div className="mb-2">
                <p className="text-teal font-mono mb-1">Featured Project</p>
                <h3 className="text-xl md:text-2xl font-bold text-slate-light mb-4">{title}</h3>
              </div>

              <div className="glass-card bg-navy-dark/90 p-5 mb-4 z-10 relative">
                <p className="text-slate text-sm md:text-base">{description}</p>
              </div>

              <div className="flex flex-wrap gap-2 mb-5 text-xs font-mono text-slate-light">
                {technologies.map((tech) => (
                  <Badge key={tech} variant="secondary" className="bg-navy-dark/80 text-teal">
                    {tech}
                  </Badge>
                ))}
              </div>

              <div className={`flex gap-4 ${alignment === "right" ? "md:justify-end" : ""}`}>
                {githubUrl && (
                  <Button variant="ghost" size="icon" asChild>
                    <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-5 w-5 text-slate-light hover:text-teal" />
                    </a>
                  </Button>
                )}
                {liveUrl && (
                  <Button variant="ghost" size="icon" asChild>
                    <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                      <LinkIcon className="h-5 w-5 text-slate-light hover:text-teal" />
                    </a>
                  </Button>
                )}
              </div>
            </CardContent>
          </div>
          <div className="md:col-span-5 h-64 md:h-auto">
            <div className="w-full h-full relative">
              <div className="absolute inset-0 bg-teal/20 hover:bg-transparent transition-colors z-10"></div>
              <img
                src={imageUrl}
                alt={title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ProjectCard;
