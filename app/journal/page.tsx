import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { NewsletterSection } from "@/components/newsletter-section"
import { JournalContent } from "@/components/journal-content"

export default function JournalPage() {
  return (
    <main className="min-h-screen bg-[#F7F4EE]">
      <Header />
      <JournalContent />
      <NewsletterSection />
      <Footer />
    </main>
  )
}
