import HeroSection from '@/components/home/HeroSection'
import CategoriesSection from '@/components/home/CategoriesSection'
import TestimonialsSection from '@/components/home/TestimonialsSection'
import CityGuidesSection from '@/components/home/CityGuidesSection'
import ProfessionalCTA from '@/components/home/ProfessionalCTA'

export const metadata = {
  title: 'CercaPro - Profesionales de confianza en Ciudad Real',
  description: 'Encuentra fontaneros, electricistas, cerrajeros y manitas verificados en Ciudad Real. Contacta directamente, sin intermediarios.',
  alternates: { canonical: 'https://www.cercapro.es/' },
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CategoriesSection />
      <TestimonialsSection />
      <CityGuidesSection />
      <ProfessionalCTA />
    </>
  )
}
