import { CalendarCheck, FileSearch, Video, ShieldCheck, ArrowRight } from 'lucide-react'

const steps = [
  {
    step: '01',
    label: 'Passo 1',
    icon: CalendarCheck,
    title: 'Agendamento Simples',
    description:
      'Escolha a data e o horário mais convenientes pelo calendário online no Google Meet ou entre em contato direto pelo WhatsApp.',
  },
  {
    step: '02',
    label: 'Passo 2',
    icon: FileSearch,
    title: 'Análise Prévia de Documentos',
    description:
      'Envio seguro de documentos com antecedência para estudo preliminar detalhado do seu caso, resguardado pelo sigilo da OAB.',
  },
  {
    step: '03',
    label: 'Passo 3',
    icon: Video,
    title: 'Consulta Online ou Presencial',
    description:
      'Videochamada individual pelo Google Meet (sem necessidade de instalar programas pesados) ou atendimento presencial em Luziânia/GO.',
  },
  {
    step: '04',
    label: 'Passo 4',
    icon: ShieldCheck,
    title: 'Solução e Encaminhamento',
    description:
      'Apresentação clara dos seus direitos, riscos e custos, definindo a melhor estratégia (acordo extrajudicial ágil ou ação judicial) com suporte do Dr. Kaleb.',
  },
]

export function HowItWorks() {
  return (
    <section id="como-funciona" className="scroll-mt-20 border-t border-border bg-muted/30 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.2em] text-gold font-semibold">
            Atendimento Estruturado
          </p>
          <h2 className="text-balance font-serif text-3xl font-semibold tracking-tight md:text-4xl text-foreground">
            Como Funciona o Atendimento
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Um processo transparente, sem complicação e sem jargões jurídicos desnecessários. Veja como é simples iniciar seu atendimento:
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((item, idx) => (
            <div
              key={item.step}
              className="relative flex flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-xs transition-all hover:border-gold/50 hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex size-12 items-center justify-center rounded-xl border border-gold/40 bg-gold/5 text-gold">
                    <item.icon className="size-5" />
                  </div>
                  <span className="font-serif text-2xl font-bold text-gold/60">
                    {item.step}
                  </span>
                </div>
                <span className="mt-4 inline-block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {item.label}
                </span>
                <h3 className="mt-1 font-serif text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>

              {idx < steps.length - 1 && (
                <div className="mt-4 hidden lg:block text-right">
                  <ArrowRight className="inline-block size-4 text-muted-foreground/40" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
