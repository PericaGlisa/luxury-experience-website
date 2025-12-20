import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { NewsletterSection } from "@/components/newsletter-section"
import { DestinationsContent } from "@/components/destinations-content"

export default function DestinationsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <DestinationsContent />
      <NewsletterSection />
      <Footer />
    </main>
  )
}
