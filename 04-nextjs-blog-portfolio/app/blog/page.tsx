import BlogCard from "@/components/BlogCard"


export default function BlogPage() {
  
const posts= [
  {
    id: 1,
    title: "Getting Started with Next.js App Router",
    slug: "getting-started-nextjs-app-router",
    excerpt:
      "Learn how to build modern web applications with Next.js 13+ App Router. Discover the power of server components, layouts, and file-based routing.",
    content: `
# Getting Started with Next.js App Router

The Next.js App Router is a powerful new paradigm for building React applications. It introduces several key concepts that make development more intuitive and performant.

## Key Features

### Server Components by Default
Server Components are the default in the App Router. They run on the server and can directly access databases, file systems, and other server-side resources.

### File-based Routing
The App Router uses a file-based routing system where folders define routes and special files define UI for route segments.

### Layouts and Templates
Layouts preserve state and avoid re-rendering, while templates create a new instance for each child.

## Getting Started

To create a new Next.js project with App Router:

\`\`\`bash
npx create-next-app@latest my-app --app
\`\`\`

This will set up a new project with the App Router enabled by default.

## Conclusion

The App Router represents the future of Next.js development, offering better performance, developer experience, and more intuitive patterns for building modern web applications.
    `,
    date: "2024-01-15",
    readTime: "5 min read",
    image: "/nextjs-app-router.png",
    author: "John Doe",
  },
  {
    id: 2,
    title: "Mastering Tailwind CSS for Modern Web Design",
    slug: "mastering-tailwind-css-modern-design",
    excerpt:
      "Explore advanced Tailwind CSS techniques and best practices for creating beautiful, responsive designs. Learn about custom configurations and optimization strategies.",
    content: `
# Mastering Tailwind CSS for Modern Web Design

Tailwind CSS has revolutionized how we approach styling in modern web development. Its utility-first approach provides unprecedented flexibility and maintainability.

## Why Tailwind CSS?

### Utility-First Approach
Instead of writing custom CSS, you compose designs using utility classes directly in your HTML.

### Responsive Design Made Easy
Tailwind's responsive prefixes make it simple to create designs that work across all devices.

### Customization and Theming
The framework is highly customizable through the configuration file, allowing you to define your own design system.

## Advanced Techniques

### Custom Components
While Tailwind is utility-first, you can still create reusable components by extracting common patterns.

### Performance Optimization
Tailwind's purge feature removes unused styles, keeping your CSS bundle size minimal.

## Best Practices

1. Use semantic class names for complex components
2. Leverage Tailwind's design tokens for consistency
3. Create custom utilities for project-specific needs
4. Use the @apply directive sparingly

## Conclusion

Tailwind CSS empowers developers to build beautiful, maintainable designs quickly and efficiently. Its utility-first approach, combined with excellent tooling, makes it an ideal choice for modern web projects.
    `,
    date: "2024-01-10",
    readTime: "7 min read",
    image: "/tailwind-css-design-system.png",
    author: "Jane Smith",
  },
  {
    id: 3,
    title: "Building Responsive Layouts with CSS Grid and Flexbox",
    slug: "responsive-layouts-css-grid-flexbox",
    excerpt:
      "Master the art of creating flexible, responsive layouts using CSS Grid and Flexbox. Learn when to use each technology and how to combine them effectively.",
    content: `
# Building Responsive Layouts with CSS Grid and Flexbox

Modern CSS layout techniques have made it easier than ever to create responsive, flexible designs. CSS Grid and Flexbox are two powerful tools that, when used together, can handle virtually any layout challenge.

## Understanding the Fundamentals

### CSS Grid: Two-Dimensional Layouts
CSS Grid excels at creating complex, two-dimensional layouts where you need precise control over both rows and columns.

### Flexbox: One-Dimensional Layouts
Flexbox is perfect for one-dimensional layouts, whether in a row or column, and excels at distributing space and aligning items.

## When to Use Each

### Use CSS Grid When:
- Creating complex page layouts
- You need precise control over both dimensions
- Working with overlapping elements
- Building responsive card layouts

### Use Flexbox When:
- Aligning items within a container
- Creating navigation bars
- Centering content
- Building flexible component layouts

## Combining Grid and Flexbox

The real power comes from combining these technologies. Use Grid for the overall page structure and Flexbox for component-level layouts.

## Responsive Design Strategies

1. Mobile-first approach
2. Use relative units (fr, %, vw, vh)
3. Implement breakpoints strategically
4. Test across different devices

## Conclusion

CSS Grid and Flexbox together provide a complete solution for modern web layouts. Understanding when and how to use each will make you a more effective front-end developer.
    `,
    date: "2024-01-05",
    readTime: "6 min read",
    image: "/css-grid-flexbox-layout.png",
    author: "Mike Johnson",
  },
]

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">Blog Posts</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Thoughts, tutorials, and insights about web development, design, and technology. Join me as I share my
          learning journey and discoveries in the ever-evolving world of tech.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <BlogCard
            key={post.id}
            title={post.title}
            excerpt={post.excerpt}
            date={post.date}
            slug={post.slug}
            image={post.image}
            readTime={post.readTime}
          />
        ))}
      </div>
    </div>
  )
}
