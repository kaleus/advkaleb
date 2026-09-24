import Image from 'next/image'
import { site, basePath } from '@/lib/site'

export function About() {
  return (
    <section id="sobre" className="border-y border-border bg-muted/30">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border md:aspect-square">
          <Image
            src="/images/kaleb.jpg"
            alt="Kaleb dos Santos Ramos, advogado"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        <div>
          <p className="mb-3 text-xs uppercase tracking-[0.2em] text-gold">
            Sobre
          </p>
          <h2 className="text-balance font-serif text-3xl font-semibold tracking-tight md:text-4xl">
            Kaleb dos Santos Ramos
          </h2>
          <p className="mt-2 text-sm font-medium text-muted-foreground">
            {site.role} — {site.oab}
          </p>
          <div className="mt-6 space-y-4 leading-relaxed text-muted-foreground">
            <p>
              Advogado atuante em Luziânia/GO e na região do Entorno do Distrito
              Federal, com foco nas áreas Cível, Contratos, Família e
              Previdenciário.
            </p>
            <p>
              O trabalho é pautado pela ética, pela transparência e pelo respeito
              a cada história. A proposta é explicar o direito de forma
              acessível, para que você tome decisões bem informado, com
              tranquilidade e segurança.
            </p>
            <p>
              O atendimento é feito de forma direta e humana, entendendo o
              contexto de cada pessoa antes de indicar os caminhos jurídicos
              possíveis.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
