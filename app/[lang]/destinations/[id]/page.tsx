import { DestinationDetail } from "@/components/destination-detail"
import { Header } from "@/components/header"
import { NewsletterSection } from "@/components/newsletter-section"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"
import { destinations } from "@/lib/data"

export async function generateMetadata({ params }: { params: Promise<{ id: string, lang: string }> }): Promise<Metadata> {
  const { id, lang } = await params
  const destination = destinations.find((d) => d.slug.en === id || d.slug.sr === id)
  
  if (!destination) return { title: "Destination Not Found" }

  const language = (lang === "en" || lang === "sr" ? lang : "sr") as "en" | "sr"
  const title = `${destination.name} | Luxury Destinations`
  const description = destination.description[language]
  const image = destination.image || "/porto-cervo-luxury-marina-sardinia-yachts.jpg"

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
          alt: destination.name,
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

export default async function DestinationPage({ params }: { params: Promise<{ id: string, lang: string }> }) {
  const { id } = await params

  return (
    <main>
      <Header />
      <DestinationDetail id={id} />
      <NewsletterSection />
      <Footer />
    </main>
  )
}
