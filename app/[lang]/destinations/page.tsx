import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { NewsletterSection } from "@/components/newsletter-section"
import { DestinationsContent } from "@/components/destinations-content"
import type { Metadata } from "next"
import { translations } from "@/lib/language-context"

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const language = (lang === "en" || lang === "sr" ? lang : "sr") as "en" | "sr"
  return {
    title: translations[language].destinationsTitle,
  }
}

export default function DestinationsPage() {
  return (
    <main className="min-h-screen bg-[#F7F4EE]">
      <Header />
      <DestinationsContent />
      <NewsletterSection />
      <Footer />
    </main>
  )
}
