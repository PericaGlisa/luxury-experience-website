import { DestinationDetail } from "@/components/destination-detail"
import { Header } from "@/components/header"
import { NewsletterSection } from "@/components/newsletter-section"
import { Footer } from "@/components/footer"

export default async function DestinationPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params

  return (
    <main>
      <Header />
      <DestinationDetail id={id} />
      <NewsletterSection />
      <Footer />
    </main>
  )
}
