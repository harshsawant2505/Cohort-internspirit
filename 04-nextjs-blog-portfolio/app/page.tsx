import Link from "next/link"
import Image from "next/image"


export default function HomePage() {
  

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
              Welcome to My
              <span className="text-primary block">Digital Portfolio</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              I'm a passionate developer sharing insights about modern web development, design patterns, and the latest
              technologies. Join me on this journey of continuous learning and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">


              <Link
                href="/blog"
                className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors text-center"
              >
                Read My Blog
              </Link>



              <Link
                href="/about"
                className="bg-secondary text-secondary-foreground px-6 py-3 rounded-lg font-medium hover:bg-secondary/90 transition-colors text-center"
              >
                Learn About Me
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="relative h-96 w-full rounded-lg overflow-hidden">

              <Image
                src="/professional-developer-portrait.png"
                alt="Profile"
                width={500}
                height={500}
                className="object-cover scale-x-[-1]"
                priority
              />
              
            </div>
          </div>
        </div>
      </section>

    

      {/* Skills Section */}
      <section className="py-16 bg-card rounded-lg">
        <div className="px-8">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-card-foreground mb-12 text-center">
            Technologies I Work With
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: "Next.js", icon: "⚡" },
              { name: "React", icon: "⚛️" },
              { name: "TypeScript", icon: "📘" },
              { name: "Tailwind CSS", icon: "🎨" },
              { name: "Node.js", icon: "🟢" },
              { name: "PostgreSQL", icon: "🐘" },
              { name: "Git", icon: "📚" },
              { name: "Vercel", icon: "▲" },
            ].map((tech) => (
              <div key={tech.name} className="text-center">
                <div className="text-4xl mb-3">{tech.icon}</div>
                <h3 className="font-medium text-card-foreground">{tech.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
