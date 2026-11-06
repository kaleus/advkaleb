import { Scale, HeartHandshake, FileText, Landmark, MessageCircle } from 'lucide-react'

const WHATSAPP_PHONE = '5561983365619'

const areas = [
  {
    icon: Landmark,
    title: 'Previdenciário',
    description:
      'Acompanhamento em pedidos, revisões e recursos de benefícios junto ao INSS.',
    topics: [
      'Aposentadoria',
      'Auxílio-doença',
      'BPC/LOAS',
      'Revisão de benefícios',
    ],
    waMessage:
      'Olá Dr. Kaleb, gostaria de orientações sobre benefício do INSS (aposentadoria/auxílio/BPC).',
  },
  {
    icon: HeartHandshake,
    title: 'Família',
    description:
      'Orientação em temas sensíveis do direito de família, sempre com cuidado e discrição.',
    topics: ['Divórcio', 'Pensão alimentícia', 'Guarda', 'Herança'],
    waMessage:
      'Olá Dr. Kaleb, gostaria de tirar dúvidas sobre Direito de Família (divórcio/pensão/guarda).',
  },
  {
    icon: Scale,
    title: 'Cível',
    description:
      'Questões relacionadas a responsabilidade civil, indenizações, cobranças e conflitos entre particulares.',
    topics: ['Indenizações', 'Cobranças', 'Responsabilidade civil'],
    waMessage:
      'Olá Dr. Kaleb, gostaria de orientação sobre uma questão Cível/Indenizatória.',
  },
  {
    icon: FileText,
    title: 'Contratos',
    description:
      'Análise, elaboração e revisão de contratos, buscando segurança jurídica em cada acordo.',
    topics: ['Elaboração', 'Revisão', 'Análise de cláusulas'],
    waMessage:
      'Olá Dr. Kaleb, preciso de análise ou elaboração de um Contrato.',
  },
]

export function PracticeAreas() {
  return (
    <section id="areas" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <div className="max-w-2xl">
        <p className="mb-3 text-xs uppercase tracking-[0.2em] text-gold">
          Áreas de Atuação
        </p>
        <h2 className="text-balance font-serif text-3xl font-semibold tracking-tight md:text-4xl">
          Como posso ajudar você
        </h2>
        <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
          Cada caso é único. O objetivo é oferecer informação clara e uma
          orientação jurídica cuidadosa para que você compreenda seus direitos e
          suas opções.
        </p>
      </div>

      <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
        {areas.map((area) => (
          <div key={area.title} className="flex flex-col justify-between bg-background p-8 md:p-10">
            <div>
              <div className="flex size-12 items-center justify-center rounded-xl border border-gold/40 bg-gold/5 text-gold">
                <area.icon className="size-5" />
              </div>
              <h3 className="mt-6 font-serif text-xl font-semibold">
                {area.title}
              </h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                {area.description}
              </p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {area.topics.map((topic) => (
                  <li
                    key={topic}
                    className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground"
                  >
                    {topic}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-border/50">
              <a
                href={`https://wa.me/5561983365619?text=${encodeURIComponent(area.waMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gold hover:text-foreground transition-colors"
              >
                <MessageCircle className="size-3.5" />
                Consultar sobre {area.title} →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
