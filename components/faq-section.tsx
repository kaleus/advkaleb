'use client'

import { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'

interface FaqItem {
  question: string
  answer: string
}

const faqs: FaqItem[] = [
  {
    question: 'Como funciona a consulta jurídica por videochamada no Google Meet?',
    answer:
      'A consulta online é realizada de forma individual e segura. Após escolher o melhor horário na agenda oficial do site, você recebe a confirmação imediata e o link do Google Meet diretamente no seu e-mail. No horário marcado, basta clicar no link para ingressar pelo celular ou computador, sem necessidade de baixar nenhum aplicativo pesado.',
  },
  {
    question: 'O Dr. Kaleb também atende presencialmente em Luziânia/GO e região?',
    answer:
      'Sim. Para clientes que preferem atendimento presencial, as reuniões podem ser agendadas previamente no escritório em Luziânia/GO, bem como atendimentos nas comarcas do Entorno do DF (Valparaíso de Goiás, Cidade Ocidental, Novo Gama, Cristalina) e em Brasília/DF.',
  },
  {
    question: 'Quais documentos são necessários para a primeira consulta?',
    answer:
      'Para o primeiro atendimento, recomenda-se ter em mãos um documento pessoal oficial com foto (RG ou CNH), comprovante de endereço recente e os documentos pertinentes à demanda (por exemplo: extrato CNIS e carta de indeferimento para causas previdenciárias; certidão de casamento e nascimento dos filhos para família; contrato de locação e comprovantes de pagamento para litígios cíveis).',
  },
  {
    question: 'Como funciona o sigilo profissional das minhas informações e documentos?',
    answer:
      'Todas as informações, relatos e documentos compartilhados com o Dr. Kaleb são estritamente protegidos pelo sigilo profissional previsto no Estatuto da Advocacia e da OAB (Lei Federal nº 8.906/1994) e no Código de Ética e Disciplina. Seus dados são tratados com total discrição e segurança.',
  },
  {
    question: 'Como são tratados os honorários advocatícios?',
    answer:
      'Os honorários advocatícios são pactuados de forma transparente em contrato formal escrito, respeitando as diretrizes da Tabela de Honorários da OAB. Em demandas previdenciárias, por exemplo, é comum a pactuação de honorários de êxito (“quota litis”), em que o pagamento está vinculado ao sucesso da demanda, sempre acordado de forma prévia e clara.',
  },
]

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggle = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx))
  }

  return (
    <section id="faq" className="scroll-mt-20 border-t border-border bg-background py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center">
          <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#8F7236] dark:text-[#E3BC4E]">
            <HelpCircle className="size-3.5" />
            Tire Suas Dúvidas
          </p>
          <h2 className="text-balance font-serif text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Perguntas Frequentes
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Respostas claras sobre agendamento, atendimento online por Google Meet, honorários e atuação jurídica.
          </p>
        </div>

        <div className="mt-12 space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx
            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-gold/50"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left font-serif text-base font-semibold text-foreground transition-colors hover:text-gold sm:p-6 sm:text-lg"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`size-5 shrink-0 text-gold transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="border-t border-border/60 bg-muted/20 px-5 py-4 text-sm leading-relaxed text-muted-foreground sm:px-6 sm:py-5 sm:text-base">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
