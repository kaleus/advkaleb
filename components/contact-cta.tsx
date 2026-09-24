import { MessageCircle, Mail } from 'lucide-react'
import { whatsappUrl, site } from '@/lib/site'

export function ContactCta() {
  return (
    <section
      id="contato"
      className="border-t-2 border-gold bg-navy text-white"
    >
      <div className="mx-auto max-w-6xl px-6 py-20 text-center md:py-28">
        <p className="mb-3 text-xs uppercase tracking-[0.2em] text-gold">
          Contato
        </p>
        <h2 className="mx-auto max-w-2xl text-balance font-serif text-3xl font-semibold tracking-tight md:text-4xl">
          Ficou com uma dúvida jurídica?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-white/70">
          Envie uma mensagem pelo WhatsApp para conversarmos sobre a sua
          situação. O atendimento é feito diretamente por este canal.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-medium text-navy transition-opacity hover:opacity-90"
          >
            <MessageCircle className="size-4" />
            Falar pelo WhatsApp
          </a>
          <span className="text-sm text-white/60">{site.phoneDisplay}</span>
          <a
            href={`mailto:${site.email}`}
            className="inline-flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-gold"
          >
            <Mail className="size-4" />
            {site.email}
          </a>
        </div>
      </div>
    </section>
  )
}
