import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { PracticeAreas } from '@/components/practice-areas'
import { HowItWorks } from '@/components/how-it-works'
import { About } from '@/components/about'
import { AppointmentSchedule } from '@/components/appointment-schedule'
import { Coverage } from '@/components/coverage'
import { FaqSection } from '@/components/faq-section'
import { ContactCta } from '@/components/contact-cta'
import { FloatingAction } from '@/components/floating-action'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <Hero />
      <PracticeAreas />
      <HowItWorks />
      <About />
      <AppointmentSchedule />
      <Coverage />
      <FaqSection />
      <ContactCta />
      <FloatingAction />
      <SiteFooter />
    </main>
  )
}
