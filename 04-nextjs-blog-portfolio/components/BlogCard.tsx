import Link from "next/link"
import Image from "next/image"

interface BlogCardProps {
  title: string
  excerpt: string
  date: string
  slug: string
  image: string
  readTime: string
}

export default function BlogCard({ title, excerpt, date, slug, image, readTime }: BlogCardProps) {
  return (
    <article className="bg-card rounded-lg border border-border overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48 w-full">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>

      <div className="p-6">
        <div className="flex items-center text-sm text-muted-foreground mb-3">
          <time dateTime={date}>{date}</time>
          <span className="mx-2">•</span>
          <span>{readTime}</span>
        </div>

        <h3 className="text-xl font-serif font-bold text-card-foreground mb-3 hover:text-primary transition-colors">
          <Link href={`/blog/${slug}`}>{title}</Link>
        </h3>

        <p className="text-muted-foreground mb-4 line-clamp-3">{excerpt}</p>

        <Link
          href={`/blog/${slug}`}
          className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors"
        >
          Read more
          <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </article>
  )
}
