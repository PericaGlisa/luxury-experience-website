import { ExperienceDetail } from "@/components/experience-detail"
import { Header } from "@/components/header"
import { NewsletterSection } from "@/components/newsletter-section"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"
import { experiences } from "@/components/experiences-content"

export async function generateMetadata({ params }: { params: Promise<{ id: string, lang: string }> }): Promise<Metadata> {
  const { id, lang } = await params
  const experience = experiences.find((e) => e.slug.en === id || e.slug.sr === id)
  
  if (!experience) return { title: "Experience Not Found" }

  return {
    title: experience.title,
    description: experience.description,
  }
}

export default async function ExperiencePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params

  return (
    <main>
      <Header />
      <ExperienceDetail id={id} />
      <NewsletterSection />
      <Footer />
    </main>
  )
}
