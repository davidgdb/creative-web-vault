
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-featured e-commerce platform built with React and Node.js. Features include product listings, cart functionality, user authentication, and payment processing integration.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "JWT"],
      imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      githubUrl: "#",
      liveUrl: "#",
      alignment: "left" as const
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop interface, and team collaboration features. Built with a modern tech stack.",
      technologies: ["TypeScript", "Next.js", "Prisma", "PostgreSQL", "WebSockets"],
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      githubUrl: "#",
      liveUrl: "#",
      alignment: "right" as const
    },
    {
      title: "Developer Portfolio",
      description: "A customizable portfolio template for developers to showcase their skills and projects. Features a modern design, responsive layout, and easy customization.",
      technologies: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
      imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      githubUrl: "#",
      liveUrl: "#",
      alignment: "left" as const
    }
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-light mb-12 flex items-center">
          <span className="font-mono text-teal mr-2">03.</span> My Projects
          <div className="ml-4 h-px bg-slate/20 flex-grow"></div>
        </h2>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              {...project}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
