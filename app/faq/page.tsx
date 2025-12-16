import { Header } from "@/components/header"
import { FaqContent } from "@/components/faq-content"
import { NewsletterSection } from "@/components/newsletter-section"
import { Footer } from "@/components/footer"

export default function FaqPage() {
  return (
    <main className="min-h-screen bg-[#FFFEF9]">
      <Header />
      <FaqContent />
      <NewsletterSection />
      <Footer />
    </main>
  )
}
