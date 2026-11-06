'use client'

import { useState } from 'react'
import { Calendar, Video, Clock, ExternalLink, ShieldCheck, MessageCircle } from 'lucide-react'
import { site, whatsappUrl } from '@/lib/site'

const GOOGLE_CALENDAR_URL =
  'https://calendar.google.com/calendar/appointments/schedules/AcZssZ1AJVeykTT_hcBsRMRzLf5aYojU_i0WM0qjQoSIMGBYU7l8rDoLMGGmsrhJdEWrN-UuXEJCyVgs?gv=true'

export function AppointmentSchedule() {
  const [iframeLoaded, setIframeLoaded] = useState(false)

  return (
    <section
      id="agendamento"
      className="scroll-mt-20 border-t border-border bg-gradient-to-b from-background via-muted/20 to-background py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Cabeçalho da Seção */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#8F7236] dark:text-[#E3BC4E]">
            <Calendar className="size-3.5" />
            Atendimento Online & Presencial
          </p>
          <h2 className="text-balance font-serif text-3xl font-semibold tracking-tight text-foreground md:text-5xl">
            Agende sua Consulta Jurídica
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            Escolha o melhor dia e horário na agenda oficial abaixo. A confirmação é instantânea e o link da videochamada no <strong>Google Meet</strong> é enviado diretamente para seu e-mail.
          </p>
        </div>

        {/* Badges de Benefícios */}
        <div className="mx-auto mt-8 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="flex items-center gap-3 rounded-xl border border-border/80 bg-card p-4 shadow-xs">
            <Video className="size-5 shrink-0 text-gold" />
            <span className="text-xs font-medium text-foreground">100% online via Google Meet</span>
          </div>
          <div className="flex items-center gap-3 rounded-xl border border-border/80 bg-card p-4 shadow-xs">
            <Clock className="size-5 shrink-0 text-gold" />
            <span className="text-xs font-medium text-foreground">Confirmação instantânea</span>
          </div>
          <div className="flex items-center gap-3 rounded-xl border border-border/80 bg-card p-4 shadow-xs">
            <ShieldCheck className="size-5 shrink-0 text-gold" />
            <span className="text-xs font-medium text-foreground">Sigilo profissional OAB</span>
          </div>
        </div>

        {/* Card do Container do Iframe */}
        <div className="relative mx-auto mt-10 max-w-4xl overflow-hidden rounded-2xl border border-border bg-card shadow-xl transition-all md:rounded-3xl hover:border-gold/50">
          {/* Barra superior de status e link direto */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border/60 bg-muted/40 px-5 py-3.5 text-xs text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="size-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-medium text-foreground">Agenda Aberta para Novos Atendimentos</span>
            </div>
            <a
              href={GOOGLE_CALENDAR_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-medium text-gold hover:underline transition-colors"
            >
              Abrir em tela inteira no Google Calendar ↗
              <ExternalLink className="size-3.5" />
            </a>
          </div>

          {/* Skeleton / Spinner de Carregamento */}
          {!iframeLoaded && (
            <div className="flex h-[620px] flex-col items-center justify-center gap-3 bg-card text-muted-foreground md:h-[680px]">
              <div className="size-8 animate-spin rounded-full border-2 border-gold border-t-transparent" />
              <p className="text-sm font-medium">Carregando calendário oficial de agendamento...</p>
            </div>
          )}

          {/* Google Calendar Appointment Scheduling iframe */}
          <div className="relative w-full min-h-[620px] md:min-h-[680px] bg-background">
            <iframe
              src={GOOGLE_CALENDAR_URL}
              style={{ border: 0 }}
              width="100%"
              height="650"
              frameBorder="0"
              title="Agendamento de Atendimento — Dr. Kaleb Ramos"
              className={`w-full min-h-[620px] md:min-h-[680px] border-0 transition-opacity duration-300 ${
                iframeLoaded ? 'opacity-100' : 'opacity-0 h-0'
              }`}
              loading="lazy"
              onLoad={() => setIframeLoaded(true)}
            />
          </div>

          {/* Rodapé Alternativo do Card para WhatsApp */}
          <div className="flex flex-col items-center justify-between gap-4 border-t border-border bg-muted/30 p-4 text-center sm:flex-row sm:p-5 sm:text-left">
            <div className="text-xs text-muted-foreground sm:text-sm">
              Prefere atendimento presencial em Luziânia/GO ou tem uma dúvida urgente?
            </div>
            <a
              href={`https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent('Olá Dr. Kaleb, gostaria de agendar um atendimento.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-xs font-semibold text-navy transition-opacity hover:opacity-90 sm:text-sm"
            >
              <MessageCircle className="size-4" />
              Agendar via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
