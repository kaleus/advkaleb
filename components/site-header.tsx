'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { whatsappUrl, basePath } from '@/lib/site'

const links = [
  { href: '#areas', label: 'Áreas de Atuação' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#atuacao', label: 'Onde Atuo' },
  { href: '#contato', label: 'Contato' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-3">
          <span className="relative flex size-10 shrink-0">
            <Image
              src={`${basePath}/images/logo-mark.png`}
              alt="Kaleb Ramos"
              fill
              className="object-contain [@media(prefers-color-scheme:dark)]:hidden"
              priority
            />
            <Image
              src={`${basePath}/images/logo-mark-dark.png`}
              alt="Kaleb Ramos"
              fill
              className="hidden object-contain [@media(prefers-color-scheme:dark)]:block"
              priority
            />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-serif text-lg font-semibold tracking-tight">
              Kaleb Ramos
            </span>
            <span className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              Advocacia
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-gold px-5 py-2 text-sm font-medium text-navy transition-opacity hover:opacity-90"
          >
            WhatsApp
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border/60 bg-background md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 rounded-full bg-gold px-5 py-2.5 text-center text-sm font-medium text-navy"
            >
              Falar no WhatsApp
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}
