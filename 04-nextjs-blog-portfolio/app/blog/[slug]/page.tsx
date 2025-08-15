import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { getPostBySlug, getAllPosts } from "@/data/posts"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
 


  const post = getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Back to Blog */}
      <Link href="/blog" className="inline-flex items-center text-primary hover:text-primary/80 mb-8 transition-colors">
        <svg className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back to Blog
      </Link>

      {/* Article Header */}
      <header className="mb-12">
        <div className="relative h-64 md:h-96 w-full rounded-lg overflow-hidden mb-8">
          <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" priority />
        </div>

        <div className="flex items-center text-sm text-muted-foreground mb-6">
          <time dateTime={post.date}>{post.date}</time>
          <span className="mx-2">•</span>
          <span>{post.readTime}</span>
          <span className="mx-2">•</span>
          <span>By {post.author}</span>
        </div>

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground leading-tight">
          {post.title}
        </h1>
      </header>

      {/* Article Content */}
      <div className="prose prose-lg max-w-none">
        <div
          className="text-foreground leading-relaxed"
          dangerouslySetInnerHTML={{
            __html: post.content
              .replace(/\n/g, "<br />")
              .replace(/#{1,6}\s/g, (match) => {
                const level = match.trim().length
                return `<h${level} class="text-${4 - level}xl font-serif font-bold text-foreground mt-8 mb-4">`
              })
              .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"),
          }}
        />
      </div>

      {/* Article Footer */}
      <footer className="mt-16 pt-8 border-t border-border">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm text-muted-foreground mb-2">Written by</p>
            <p className="font-medium text-foreground">{post.author}</p>
          </div>

          <Link
            href="/blog"
            className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            More Posts
          </Link>
        </div>
      </footer>
    </article>
  )
}
