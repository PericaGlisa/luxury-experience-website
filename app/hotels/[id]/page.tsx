import { HotelDetail } from "@/components/hotel-detail"
import { Header } from "@/components/header"
import { NewsletterSection } from "@/components/newsletter-section"
import { Footer } from "@/components/footer"

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
