import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { NewsletterSection } from "@/components/newsletter-section"
import { YachtsContent } from "@/components/yachts-content"
import type { Metadata } from "next"
import { translations } from "@/lib/translations"

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const language = (lang === "en" || lang === "sr" ? lang : "sr") as "en" | "sr"
  const title = translations[language].yachtsTitle
  const description = language === "sr"
    ? "Istražite našu ekskluzivnu flotu luksuznih jahti za čarter na Sardiniji. Od motornih jahti do katamarana."
    : "Explore our exclusive fleet of luxury yachts for charter in Sardinia. From motor yachts to catamarans."
  const image = "/luxury-mega-yacht-aerial-view-mediterranean-sea.jpg"

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

export default function YachtsPage() {
  return (
    <main className="min-h-screen bg-[#F7F4EE]">
      <Header />
      <YachtsContent />
      <NewsletterSection />
      <Footer />
    </main>
  )
}
