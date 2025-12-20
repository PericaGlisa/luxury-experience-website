import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { NewsletterSection } from "@/components/newsletter-section"
import { YachtsContent } from "@/components/yachts-content"

export default function YachtsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <YachtsContent />
      <NewsletterSection />
      <Footer />
    </main>
  )
}
