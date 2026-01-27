import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { NewsletterSection } from "@/components/newsletter-section"
import { CancellationContent } from "@/components/cancellation-content"
import type { Metadata } from "next"
import { translations } from "@/lib/translations"

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const language = (lang === "en" || lang === "sr" ? lang : "sr") as "en" | "sr"
  const title = translations[language].cancellationTitle
  const description = language === "sr"
    ? "Politika otkazivanja za Maestrale Luxury Experience rezervacije. Detalji o povraćaju sredstava i uslovima."
    : "Cancellation Policy for Maestrale Luxury Experience bookings. Details on refunds and conditions."
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

export default function CancellationPage() {
  return (
    <main className="min-h-screen bg-[#FFFEF9]">
      <Header />
      <CancellationContent />
      <NewsletterSection />
      <Footer />
    </main>
  )
}
