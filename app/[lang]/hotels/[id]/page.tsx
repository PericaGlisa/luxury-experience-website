import { HotelDetail } from "@/components/hotel-detail"
import { Header } from "@/components/header"
import { NewsletterSection } from "@/components/newsletter-section"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"
import { hotels } from "@/lib/data"

export async function generateMetadata({ params }: { params: Promise<{ id: string, lang: string }> }): Promise<Metadata> {
  const { id, lang } = await params
  const hotel = hotels.find((h) => h.slug.en === id || h.slug.sr === id)
  
  const language = (lang === "en" || lang === "sr" ? lang : "sr") as "en" | "sr"
  const title = `${hotel.name} | Luxury Hotels`
  const description = language === "sr"
    ? `${hotel.name} - Luksuzni smeštaj u mestu ${hotel.location}. Rezervišite savršen odmor na Sardiniji sa Maestrale.`
    : `${hotel.name} - Luxury stay in ${hotel.location}. Book your perfect Sardinia holiday with Maestrale.`
  const image = hotel.images?.[0] || "/porto-cervo-luxury-marina-sardinia-yachts.jpg"

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: hotel.name,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  }
}

export default async function HotelPage({ params }: { params: Promise<{ id: string, lang: string }> }) {
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
