import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { NewsletterSection } from "@/components/newsletter-section"
import { TermsContent } from "@/components/terms-content"
import type { Metadata } from "next"
import { translations } from "@/lib/translations"

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const language = (lang === "en" || lang === "sr" ? lang : "sr") as "en" | "sr"
  const title = translations[language].termsTitle
  const description = language === "sr"
    ? "Uslovi korišćenja Maestrale Luxury Experience usluga. Informacije o pravima i obavezama korisnika."
    : "Terms of Service for Maestrale Luxury Experience services. Information about user rights and obligations."
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

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#FFFEF9]">
      <Header />
      <TermsContent />
      <NewsletterSection />
      <Footer />
    </main>
  )
}
