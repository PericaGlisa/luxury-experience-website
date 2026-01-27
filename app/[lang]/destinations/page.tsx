import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { NewsletterSection } from "@/components/newsletter-section"
import { DestinationsContent } from "@/components/destinations-content"
import type { Metadata } from "next"
import { translations } from "@/lib/translations"

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const language = (lang === "en" || lang === "sr" ? lang : "sr") as "en" | "sr"
  const title = translations[language].destinationsTitle
  const description = language === "sr"
    ? "Istražite najekskluzivnije destinacije na Sardiniji. Od Kosta Smeralde do skrivenih uvala La Madalene."
    : "Explore the most exclusive destinations in Sardinia. From Costa Smeralda to the hidden bays of La Maddalena."
  const image = "/la-maddalena-islands-sardinia-turquoise-water.jpg"

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
