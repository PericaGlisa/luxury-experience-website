import { YachtDetail } from "@/components/yacht-detail"
import { Header } from "@/components/header"
import { NewsletterSection } from "@/components/newsletter-section"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"
import { yachts } from "@/lib/data"

export async function generateMetadata({ params }: { params: Promise<{ id: string, lang: string }> }): Promise<Metadata> {
  const { id, lang } = await params
  const yacht = yachts.find((y) => y.slug.en === id || y.slug.sr === id)
  
  if (!yacht) return { title: "Yacht Not Found" }

  const language = (lang === "en" || lang === "sr" ? lang : "sr") as "en" | "sr"
  const title = `${yacht.name} | Luxury Yacht Charter`
  const description = language === "sr" 
    ? `Doživite Mediteran na jahti ${yacht.name}, dužine ${yacht.length}. Rezervišite svoj ekskluzivni čarter na Sardiniji sa Maestrale.`
    : `Experience the Mediterranean aboard ${yacht.name}, a ${yacht.length} luxury yacht. Book your exclusive Sardinia yacht charter with Maestrale.`
  const image = yacht.image || yacht.images?.[0] || "/og-image.jpg"

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
          alt: yacht.name,
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

export default async function YachtPage({ params }: { params: Promise<{ id: string, lang: string }> }) {
  const { id } = await params

  return (
    <main>
      <Header />
      <YachtDetail id={id} />
      <NewsletterSection />
      <Footer />
    </main>
  )
}
