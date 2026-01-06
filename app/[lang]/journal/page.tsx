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
  const title = translations[language].journalTitle
  const description = language === "sr"
    ? "Maestrale Journal - Vaš izvor inspiracije za luksuzna putovanja, kulturu i stil života na Sardiniji."
    : "Maestrale Journal - Your source of inspiration for luxury travel, culture, and lifestyle in Sardinia."
  const image = "/luxury-private-dining-sunset-mediterranean.jpg"

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
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
