import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { PracticeAreas } from '@/components/practice-areas'
import { About } from '@/components/about'
import { Coverage } from '@/components/coverage'
import { ContactCta } from '@/components/contact-cta'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <Hero />
      <PracticeAreas />
      <About />
      <Coverage />
      <ContactCta />
      <SiteFooter />
    </main>
  )
}
