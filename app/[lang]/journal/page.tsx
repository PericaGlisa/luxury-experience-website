import { Suspense } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { NewsletterSection } from "@/components/newsletter-section"
import { JournalContent } from "@/components/journal-content"
import type { Metadata } from "next"
import { translations } from "@/lib/translations"

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const language = (lang === "en" || lang === "sr" ? lang : "sr") as "en" | "sr"
  return {
    title: translations[language].journalTitle,
  }
}

export default function JournalPage() {
  return (
    <main className="min-h-screen bg-[#F7F4EE]">
      <Header />
      <Suspense fallback={<div className="py-10 text-center text-[#5A6B70]">Loading journal...</div>}>
        <JournalContent />
      </Suspense>
      <NewsletterSection />
      <Footer />
    </main>
  )
}
