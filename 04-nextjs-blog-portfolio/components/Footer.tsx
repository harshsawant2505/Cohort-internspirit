export default function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-card-foreground mb-4 md:mb-0">
            <p className="font-serif text-lg font-bold text-primary">Portfolio</p>
            <p className="text-sm text-muted-foreground">Built with Next.js & Tailwind CSS</p>
          </div>

          <div className="flex space-x-6">
            <a href="#" className="text-card-foreground hover:text-primary transition-colors">
              Twitter
            </a>
            <a href="#" className="text-card-foreground hover:text-primary transition-colors">
              GitHub
            </a>
            <a href="#" className="text-card-foreground hover:text-primary transition-colors">
              LinkedIn
            </a>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">© 2024 Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
