import { Header } from "@/components/header"
import { TermsContent } from "@/components/terms-content"
import { NewsletterSection } from "@/components/newsletter-section"
import { Footer } from "@/components/footer"

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#FFFEF9]">
      <Header />
      <TermsContent />
      <NewsletterSection />
      <Footer />
    </main>
  )
}
