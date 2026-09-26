import type { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { MessageCircle } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { getAllPosts, getPostBySlug } from '@/lib/posts'
import { basePath, whatsappUrl } from '@/lib/site'

// Necessário para o site estático (output: 'export'): gera em tempo de
// build uma página para cada slug existente em lib/posts.ts.
export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}
  return {
    title: `${post.title} | Kaleb dos Santos Ramos — Advogado`,
    description: post.excerpt,
  }
}

function formatDate(dateStr: string) {
  return new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  }).format(new Date(`${dateStr}T00:00:00`))
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <article className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <a
          href={`${basePath}/blog/`}
          className="text-sm text-muted-foreground transition-colors hover:text-gold"
        >
          ← Voltar para o blog
        </a>

        <p className="mt-6 text-xs uppercase tracking-[0.2em] text-gold">
          {post.category}
        </p>
        <h1 className="mt-3 text-balance font-serif text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
          {post.title}
        </h1>
        <p className="mt-4 text-sm text-muted-foreground">
          {formatDate(post.date)}
        </p>

        <div className="relative mt-10 aspect-[3/2] w-full overflow-hidden rounded-lg">
          <Image
            src={`${basePath}${post.cover}`}
            alt=""
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="mt-10 space-y-6">
          {post.body.map((paragraph, i) => (
            <p
              key={i}
              className="text-pretty leading-relaxed text-foreground/90"
            >
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-14 rounded-lg border border-gold/40 bg-gold/5 p-6 text-center">
          <p className="text-balance font-serif text-lg font-semibold">
            Ficou com uma dúvida sobre o seu caso?
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Cada situação tem suas particularidades. Envie uma mensagem para
            conversarmos.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-medium text-navy transition-opacity hover:opacity-90"
          >
            <MessageCircle className="size-4" />
            Falar pelo WhatsApp
          </a>
        </div>
      </article>

      <SiteFooter />
    </main>
  )
}
