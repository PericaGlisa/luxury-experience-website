import { Header } from "@/components/header"
import { PrivacyContent } from "@/components/privacy-content"
import { NewsletterSection } from "@/components/newsletter-section"
import { Footer } from "@/components/footer"

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#FFFEF9]">
      <Header />
      <PrivacyContent />
      <NewsletterSection />
      <Footer />
    </main>
  )
}
