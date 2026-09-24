import { MapPin } from 'lucide-react'
import { site } from '@/lib/site'

export function Coverage() {
  return (
    <section id="atuacao" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <div className="max-w-2xl">
        <p className="mb-3 text-xs uppercase tracking-[0.2em] text-gold">
          Onde Atuo
        </p>
        <h2 className="text-balance font-serif text-3xl font-semibold tracking-tight md:text-4xl">
          Luziânia/GO e região do Entorno do DF
        </h2>
        <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
          Atendimento presencial e à distância para clientes das seguintes
          cidades e regiões próximas.
        </p>
      </div>

      <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {site.cities.map((city) => (
          <li
            key={city}
            className="flex items-center gap-3 rounded-xl border border-border px-5 py-4 transition-colors hover:border-gold/50"
          >
            <MapPin className="size-4 text-gold" />
            <span className="font-medium">{city}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
