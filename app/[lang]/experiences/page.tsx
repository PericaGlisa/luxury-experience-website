import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { NewsletterSection } from "@/components/newsletter-section"
import { ExperiencesContent } from "@/components/experiences-content"
import type { Metadata } from "next"
import { translations } from "@/lib/translations"

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const language = (lang === "en" || lang === "sr" ? lang : "sr") as "en" | "sr"
  return {
    title: translations[language].experiencesTitle,
  }
}

export default function ExperiencesPage() {
  return (
    <main className="min-h-screen bg-[#F7F4EE]">
      <Header />
      <ExperiencesContent />
      <NewsletterSection />
      <Footer />
    </main>
  )
}
