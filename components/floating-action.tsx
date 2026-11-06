'use client'

import { MessageCircle, Calendar } from 'lucide-react'
import { site } from '@/lib/site'

export function FloatingAction() {
  const whatsappTarget = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
    'Olá Dr. Kaleb, gostaria de agendar uma consulta jurídica.'
  )}`

  return (
    <aside
      aria-label="Ações rápidas de contato"
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3"
    >
      <a
        href="#agendamento"
        aria-label="Ir para agendamento de consulta online"
        className="flex size-11 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-lg transition-transform hover:scale-105 hover:border-gold md:hidden"
      >
        <Calendar className="size-5 text-gold" />
      </a>
      <a
        href={whatsappTarget}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com Dr. Kaleb no WhatsApp"
        className="group relative flex size-14 items-center justify-center rounded-full bg-emerald-600 text-white shadow-xl shadow-emerald-950/25 transition-transform hover:scale-105 hover:bg-emerald-500"
      >
        <span className="absolute -top-1 -right-1 flex size-3.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex size-3.5 rounded-full bg-emerald-300" />
        </span>
        <MessageCircle className="size-7" />
      </a>
    </aside>
  )
}
