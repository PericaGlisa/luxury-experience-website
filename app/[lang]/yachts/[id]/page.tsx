import { YachtDetail } from "@/components/yacht-detail"
import { Header } from "@/components/header"
import { NewsletterSection } from "@/components/newsletter-section"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"
import { yachts } from "@/components/yachts-content"

export async function generateMetadata({ params }: { params: Promise<{ id: string, lang: string }> }): Promise<Metadata> {
  const { id, lang } = await params
  const yacht = yachts.find((y) => y.slug.en === id || y.slug.sr === id)
  
  if (!yacht) return { title: "Yacht Not Found" }

  const language = (lang === "en" || lang === "sr" ? lang : "sr") as "en" | "sr"

  return {
    title: `${yacht.name} | Luxury Yacht Charter`,
    description: `Experience the Mediterranean aboard ${yacht.name}, a ${yacht.length} ${yacht.type[language]}. Book your exclusive Sardinia yacht charter with Maestrale.`,
  }
}

export default async function YachtPage({ params }: { params: Promise<{ id: string }> }) {
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
