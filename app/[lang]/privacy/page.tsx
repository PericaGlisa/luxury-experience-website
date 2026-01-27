import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { NewsletterSection } from "@/components/newsletter-section"
import { PrivacyContent } from "@/components/privacy-content"
import type { Metadata } from "next"
import { translations } from "@/lib/translations"

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const language = (lang === "en" || lang === "sr" ? lang : "sr") as "en" | "sr"
  const title = translations[language].privacyTitle
  const description = language === "sr"
    ? "Politika privatnosti Maestrale Luxury Experience. Saznajte kako štitimo i koristimo vaše podatke."
    : "Privacy Policy of Maestrale Luxury Experience. Learn how we protect and use your data."
  const image = "/porto-cervo-luxury-marina-sardinia-yachts.jpg"

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
