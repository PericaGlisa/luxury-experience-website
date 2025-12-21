import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { NewsletterSection } from "@/components/newsletter-section"
import { FaqContent } from "@/components/faq-content"
import type { Metadata } from "next"
import { translations } from "@/lib/translations"

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const language = (lang === "en" || lang === "sr" ? lang : "sr") as "en" | "sr"
  const title = translations[language].faqTitle
  const description = language === "sr"
    ? "Pronađite odgovore na najčešća pitanja o luksuznim putovanjima, rezervacijama i uslugama na Sardiniji."
    : "Find answers to frequently asked questions about luxury travel, bookings, and services in Sardinia."
  const image = "/og-image.jpg"

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
