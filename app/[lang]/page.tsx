import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { TopRatedHotels } from "@/components/top-rated-hotels"
import { NewsletterSection } from "@/components/newsletter-section"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"
import { translations } from "@/lib/translations"

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const language = (lang === "en" || lang === "sr" ? lang : "sr") as "en" | "sr"
  const title = translations[language].homeTitle
  const description = translations[language].siteDescription
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
          alt: "Maestrale Luxury Experience",
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

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F7F4EE]">
      <Header />
      <HeroSection />
      <TopRatedHotels />
      <NewsletterSection />
      <Footer />
    </main>
  )
}
