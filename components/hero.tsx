import Image from 'next/image'
import { MessageCircle, MapPin, Video } from 'lucide-react'
import { whatsappUrl, site, basePath } from '@/lib/site'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={`${basePath}/images/hero.png`}
          alt=""
          fill
          priority
          className="object-cover object-center opacity-[0.08]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background to-background" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-36">
        <div className="max-w-3xl">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/5 px-4 py-1.5 text-xs uppercase tracking-[0.18em] text-gold">
            <MapPin className="size-3.5" />
            Luziânia/GO e Entorno do DF
          </p>
          <h1 className="text-balance font-serif text-4xl font-semibold leading-[1.1] tracking-tight md:text-6xl">
            Orientação jurídica com clareza e responsabilidade
          </h1>
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Advocacia dedicada às áreas Cível, Contratos, Família e
            Previdenciário. Um atendimento próximo, informativo e comprometido
            com o entendimento de cada situação.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#agendamento"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-navy shadow-lg shadow-gold/20 transition-opacity hover:opacity-90"
            >
              <Video className="size-4" />
              Agendar Consulta Online
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-medium transition-colors hover:bg-muted"
            >
              <MessageCircle className="size-4 text-emerald-500" />
              Falar no WhatsApp
            </a>
          </div>

          <p className="mt-6 text-sm text-muted-foreground">
            {site.phoneDisplay}
          </p>
        </div>
      </div>
    </section>
  )
}
