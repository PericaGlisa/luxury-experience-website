import { HotelDetail } from "@/components/hotel-detail"
import { Header } from "@/components/header"
import { NewsletterSection } from "@/components/newsletter-section"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"
import { hotels } from "@/components/top-rated-hotels"

export async function generateMetadata({ params }: { params: Promise<{ id: string, lang: string }> }): Promise<Metadata> {
  const { id, lang } = await params
  const hotel = hotels.find((h) => h.slug.en === id || h.slug.sr === id)
  
  if (!hotel) return { title: "Hotel Not Found" }

  return {
    title: hotel.name,
    description: `${hotel.name} - Luxury stay in ${hotel.location}. Book your perfect Sardinia holiday with Maestrale.`,
  }
}

export default async function HotelPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params

  return (
    <main>
      <Header />
      <HotelDetail id={id} />
      <NewsletterSection />
      <Footer />
    </main>
  )
}
