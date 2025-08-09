import Card from "./Card";

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and MongoDB",
      tech: ["React", "Node.js", "MongoDB"],
      image: "🛒"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Collaborative task management tool with real-time updates",
      tech: ["Vue.js", "Socket.io", "Express"],
      image: "📋"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "Real-time weather data visualization with interactive charts",
      tech: ["React", "D3.js", "API"],
      image: "🌤️"
    },
    {
      id: 4,
      title: "Blog Platform",
      description: "Modern blogging platform with markdown support",
      tech: ["Next.js", "Prisma", "PostgreSQL"],
      image: "📝"
    },
    {
      id: 5,
      title: "Portfolio Website",
      description: "Responsive portfolio website with smooth animations",
      tech: ["React", "Tailwind", "Framer Motion"],
      image: "💼"
    },
    {
      id: 6,
      title: "Chat Application",
      description: "Real-time chat app with group messaging features",
      tech: ["React", "Firebase", "WebRTC"],
      image: "💬"
    },
     {
      id: 7,
      title: "Chat Application",
      description: "Real-time chat app with group messaging features",
      tech: ["React", "Firebase", "WebRTC"],
      image: "💬"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project,index) => (
            <Card index={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default ProjectsSection