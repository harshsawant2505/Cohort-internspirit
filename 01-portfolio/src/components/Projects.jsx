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
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="bg-gray-900 rounded-lg p-6 hover:bg-gray-800 transition-colors">
              <div className="text-4xl mb-4">{project.image}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, index) => (
                  <span key={index} className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
