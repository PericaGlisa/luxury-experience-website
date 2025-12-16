import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { TopRatedHotels } from "@/components/top-rated-hotels"
import { NewsletterSection } from "@/components/newsletter-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F7F4EE]">
      <Header />
      <HeroSection />
      <TopRatedHotels />
      <NewsletterSection />
      <Footer />
    </main>
  )
}
