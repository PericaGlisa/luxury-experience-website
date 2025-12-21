import { DestinationDetail } from "@/components/destination-detail"
import { Header } from "@/components/header"
import { NewsletterSection } from "@/components/newsletter-section"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"
import { destinations } from "@/components/destinations-content"

export async function generateMetadata({ params }: { params: Promise<{ id: string, lang: string }> }): Promise<Metadata> {
  const { id, lang } = await params
  const destination = destinations.find((d) => d.slug.en === id || d.slug.sr === id)
  
  if (!destination) return { title: "Destination Not Found" }

  const language = (lang === "en" || lang === "sr" ? lang : "sr") as "en" | "sr"

  return {
    title: destination.name,
    description: destination.description[language],
  }
}

export default async function DestinationPage({ params }: { params: Promise<{ id: string }> }) {
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
