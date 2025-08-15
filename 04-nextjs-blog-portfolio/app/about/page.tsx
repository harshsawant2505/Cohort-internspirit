import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid md:grid-cols-3 gap-12">
     
        <div className="md:col-span-2">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-8">About Me</h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Hello! I'm a passionate full-stack developer with over 5 years of experience building modern web
              applications. I specialize in React, Next.js, and Node.js, with a keen eye for user experience and
              performance optimization.
            </p>

            <p className="text-muted-foreground mb-6 leading-relaxed">
              My journey in web development started during college when I built my first website using HTML and CSS.
              Since then, I've been fascinated by the rapid evolution of web technologies and the endless possibilities
              they offer for creating meaningful digital experiences.
            </p>

            <p className="text-muted-foreground mb-8 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or
              sharing my knowledge through blog posts and community talks. I believe in continuous learning and the
              power of collaboration in the developer community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-serif font-bold text-foreground mb-4">Frontend Skills</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• React & Next.js</li>
                <li>• TypeScript</li>
                <li>• Tailwind CSS</li>
                <li>• State Management</li>
                <li>• Responsive Design</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-serif font-bold text-foreground mb-4">Backend Skills</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Node.js & Express</li>
                <li>• PostgreSQL & MongoDB</li>
                <li>• RESTful APIs</li>
                <li>• Authentication</li>
                <li>• Cloud Deployment</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 bg-card rounded-lg p-8">
        <h2 className="text-2xl font-serif font-bold text-card-foreground mb-6 text-center">Let's Connect</h2>
        <p className="text-center text-muted-foreground mb-8">
          I'm always interested in new opportunities and collaborations. Feel free to reach out if you'd like to work
          together!
        </p>
        <div className="flex justify-center space-x-6">
          <a
            href="mailto:hello@example.com"
            className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            Get In Touch
          </a>
          <a
            href="#"
            className="bg-secondary text-secondary-foreground px-6 py-3 rounded-lg font-medium hover:bg-secondary/90 transition-colors"
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  )
}
