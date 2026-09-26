import type { Metadata } from 'next'
import Image from 'next/image'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { getAllPosts } from '@/lib/posts'
import { basePath } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Blog | Kaleb dos Santos Ramos — Advogado',
  description:
    'Conteúdo informativo sobre direito previdenciário, família, cível e contratos.',
}

function formatDate(dateStr: string) {
  return new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  }).format(new Date(`${dateStr}T00:00:00`))
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <p className="mb-3 text-xs uppercase tracking-[0.2em] text-gold">
          Blog
        </p>
        <h1 className="max-w-2xl text-balance font-serif text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
          Conteúdo informativo para você entender melhor seus direitos
        </h1>
        <p className="mt-5 max-w-2xl text-pretty text-muted-foreground">
          Textos com caráter meramente informativo sobre temas de direito
          previdenciário, família, cível e contratos. Cada caso tem suas
          particularidades — este conteúdo não substitui uma orientação
          jurídica individualizada.
        </p>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <a
              key={post.slug}
              href={`${basePath}/blog/${post.slug}/`}
              className="group flex flex-col overflow-hidden rounded-lg border border-border bg-card transition-colors hover:border-gold/60"
            >
              <div className="relative aspect-[3/2] w-full overflow-hidden">
                <Image
                  src={`${basePath}${post.cover}`}
                  alt=""
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="text-xs uppercase tracking-[0.15em] text-gold">
                  {post.category}
                </p>
                <h2 className="mt-3 text-balance font-serif text-lg font-semibold leading-snug tracking-tight">
                  {post.title}
                </h2>
                <p className="mt-3 flex-1 text-pretty text-sm leading-relaxed text-muted-foreground">
                  {post.excerpt}
                </p>
                <p className="mt-5 text-xs text-muted-foreground">
                  {formatDate(post.date)}
                </p>
              </div>
            </a>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
