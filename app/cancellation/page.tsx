import { Header } from "@/components/header"
import { CancellationContent } from "@/components/cancellation-content"
import { NewsletterSection } from "@/components/newsletter-section"
import { Footer } from "@/components/footer"

export default function CancellationPage() {
  return (
    <main className="min-h-screen bg-[#FFFEF9]">
      <Header />
      <CancellationContent />
      <NewsletterSection />
      <Footer />
    </main>
  )
}
