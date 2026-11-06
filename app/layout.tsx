import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Atkinson_Hyperlegible, Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

const atkinson = Atkinson_Hyperlegible({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-atkinson',
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
  "frame-src 'self' https://calendar.google.com https://accounts.google.com",
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
    <html lang="pt-BR" className={`${atkinson.variable} ${poppins.variable} scroll-smooth`}>
      <head>
        {isProduction && (
          <meta httpEquiv="Content-Security-Policy" content={contentSecurityPolicy} />
        )}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LegalService",
              "name": "Kaleb dos Santos Ramos — Advocacia",
              "alternateName": "Kaleb dos Santos Ramos Advogado",
              "url": "https://advkaleb.com.br",
              "telephone": "+5561983365619",
              "email": "advkaleb@gmail.com",
              "image": "https://advkaleb.com.br/images/kaleb.jpg",
              "priceRange": "$$",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Luziânia",
                "addressRegion": "GO",
                "addressCountry": "BR"
              },
              "areaServed": [
                "Luziânia",
                "Valparaíso de Goiás",
                "Cidade Ocidental",
                "Novo Gama",
                "Cristalina",
                "Distrito Federal"
              ],
              "founder": {
                "@type": "Person",
                "name": "Kaleb dos Santos Ramos",
                "jobTitle": "Advogado",
                "identifier": "OAB/DF 74.275"
              }
            }),
          }}
        />
      </head>
      <body className="antialiased font-sans bg-background text-foreground">
        {children}
        {isProduction && <Analytics />}
      </body>
    </html>
  )
}
