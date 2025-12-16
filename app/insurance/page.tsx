import { Header } from "@/components/header"
import { InsuranceContent } from "@/components/insurance-content"
import { NewsletterSection } from "@/components/newsletter-section"
import { Footer } from "@/components/footer"

export default function InsurancePage() {
  return (
    <main className="min-h-screen bg-[#FFFEF9]">
      <Header />
      <InsuranceContent />
      <NewsletterSection />
      <Footer />
    </main>
  )
}
