import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Kaleb dos Santos Ramos | Advogado — Luziânia/GO e Entorno do DF',
  description:
    'Advocacia nas áreas Cível, Contratos, Família e Previdenciário em Luziânia/GO e região do Entorno do DF. Atendimento informativo e orientação jurídica.',
  generator: 'v0.app',
  referrer: 'strict-origin-when-cross-origin',
  robots: { index: true, follow: true },
  keywords: [
    'advogado',
    'Luziânia',
    'Entorno do DF',
    'direito previdenciário',
    'direito de família',
    'direito civil',
    'INSS',
    'aposentadoria',
  ],
  authors: [{ name: 'Kaleb dos Santos Ramos' }],
  openGraph: {
    title: 'Kaleb dos Santos Ramos | Advogado',
    description:
      'Advocacia nas áreas Cível, Contratos, Família e Previdenciário em Luziânia/GO e região do Entorno do DF.',
    locale: 'pt_BR',
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#0a0a0a',
}

// Content Security Policy para o site estático (GitHub Pages não permite
// cabeçalhos HTTP, então a política é entregue via <meta http-equiv>).
// Aplicada apenas na build de produção para não quebrar o preview do v0,
// que roda em modo de desenvolvimento.
const contentSecurityPolicy = [
  "default-src 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "frame-ancestors 'self'",
  "frame-src 'none'",
  "img-src 'self' data:",
  "font-src 'self' data:",
  "style-src 'self' 'unsafe-inline'",
  "script-src 'self' 'unsafe-inline' https://va.vercel-scripts.com",
  "connect-src 'self' https://va.vercel-scripts.com https://vitals.vercel-insights.com",
  "form-action 'self'",
  'upgrade-insecure-requests',
].join('; ')

const isProduction = process.env.NODE_ENV === 'production'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${playfair.variable}`}>
      {isProduction && (
        <meta httpEquiv="Content-Security-Policy" content={contentSecurityPolicy} />
      )}
      <body className="antialiased font-sans">
        {children}
        {isProduction && <Analytics />}
      </body>
    </html>
  )
}
