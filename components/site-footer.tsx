import Image from 'next/image'
import { site, basePath } from '@/lib/site'

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="flex flex-col justify-between gap-8 md:flex-row">
          <div>
            <div className="flex items-center gap-3">
              <span className="relative flex size-9 shrink-0">
                <Image
                  src={`${basePath}/images/logo-mark.png`}
                  alt="Kaleb Ramos"
                  fill
                  className="object-contain [@media(prefers-color-scheme:dark)]:hidden"
                />
                <Image
                  src={`${basePath}/images/logo-mark-dark.png`}
                  alt="Kaleb Ramos"
                  fill
                  className="hidden object-contain [@media(prefers-color-scheme:dark)]:block"
                />
              </span>
              <p className="font-serif text-lg font-semibold">{site.name}</p>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              {site.role} — {site.oab}
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              Luziânia/GO e Entorno do DF
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              {site.phoneDisplay}
            </p>
            <a
              href={`mailto:${site.email}`}
              className="mt-1 inline-block text-sm text-muted-foreground transition-colors hover:text-gold"
            >
              {site.email}
            </a>
          </div>

          <nav className="flex flex-col gap-2 text-sm text-muted-foreground">
            <a href="#areas" className="transition-colors hover:text-foreground">
              Áreas de Atuação
            </a>
            <a href="#sobre" className="transition-colors hover:text-foreground">
              Sobre
            </a>
            <a href="#atuacao" className="transition-colors hover:text-foreground">
              Onde Atuo
            </a>
            <a href="#contato" className="transition-colors hover:text-foreground">
              Contato
            </a>
          </nav>
        </div>

        <div className="mt-12 space-y-4 border-t border-border pt-8">
          <p className="text-xs leading-relaxed text-muted-foreground">
            Este site tem caráter meramente informativo, em conformidade com o
            Código de Ética e Disciplina da OAB e o Provimento nº 205/2021. As
            informações aqui apresentadas não constituem oferta de serviços,
            captação de clientela, nem promessa ou garantia de resultado em
            qualquer demanda. Cada caso deve ser analisado individualmente.
          </p>
          <p className="text-xs text-muted-foreground">
            &copy; {year} {site.name}. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
