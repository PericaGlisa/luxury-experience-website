import { Suspense } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { NewsletterSection } from "@/components/newsletter-section"
import { JournalContent } from "@/components/journal-content"

export default function JournalPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Suspense fallback={<div className="py-10 text-center text-[#5A6B70]">Loading journal...</div>}>
        <JournalContent />
      </Suspense>
      <NewsletterSection />
      <Footer />
    </main>
  )
}
