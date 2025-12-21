import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { NewsletterSection } from "@/components/newsletter-section"
import { InsuranceContent } from "@/components/insurance-content"
import type { Metadata } from "next"
import { translations } from "@/lib/translations"

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const language = (lang === "en" || lang === "sr" ? lang : "sr") as "en" | "sr"
  const title = translations[language].insuranceTitle
  const description = language === "sr"
    ? "Informacije o putnom osiguranju za vaša luksuzna putovanja na Sardiniju. Ostanite bezbedni i osigurani."
    : "Travel insurance information for your luxury Sardinia trips. Stay safe and insured."
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

export default function InsurancePage() {
  return (
    <main className="min-h-screen bg-[#FFFEF9]">
      <Header />
      <InsuranceContent />
      <NewsletterSection />
      <Footer />
    </main>
  )
}
