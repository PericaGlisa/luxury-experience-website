import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { NewsletterSection } from "@/components/newsletter-section"
import { ExperiencesContent } from "@/components/experiences-content"
import type { Metadata } from "next"
import { translations } from "@/lib/translations"

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const language = (lang === "en" || lang === "sr" ? lang : "sr") as "en" | "sr"
  const title = translations[language].experiencesTitle
  const description = language === "sr"
    ? "Otkrijte autentična i luksuzna iskustva na Sardiniji. Privatne ture, degustacije vina i skriveni dragulji."
    : "Discover authentic and luxury experiences in Sardinia. Private tours, wine tastings, and hidden gems."
  const image = "/helicopter-tour-sardinia-island-aerial-view.jpg"

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
