import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { NewsletterSection } from "@/components/newsletter-section"
import { FaqContent } from "@/components/faq-content"
import type { Metadata } from "next"
import { translations } from "@/lib/translations"

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const language = (lang === "en" || lang === "sr" ? lang : "sr") as "en" | "sr"
  return {
    title: translations[language].faqTitle,
  }
}

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-[#FFFEF9]">
      <Header />
      <FaqContent />
      <NewsletterSection />
      <Footer />
    </main>
  )
}
