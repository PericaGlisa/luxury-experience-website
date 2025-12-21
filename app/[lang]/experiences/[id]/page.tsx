import { ExperienceDetail } from "@/components/experience-detail"
import { Header } from "@/components/header"
import { NewsletterSection } from "@/components/newsletter-section"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"
import { experiences } from "@/lib/data"

export async function generateMetadata({ params }: { params: Promise<{ id: string, lang: string }> }): Promise<Metadata> {
  const { id, lang } = await params
  const experience = experiences.find((e) => e.slug.en === id || e.slug.sr === id)
  
  if (!experience) return { title: "Experience Not Found" }

  const language = (lang === "en" || lang === "sr" ? lang : "sr") as "en" | "sr"
  const title = `${experience.title[language]} | Maestrale Experiences`
  const description = experience.description[language]
  const image = experience.image || "/og-image.jpg"

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
          alt: experience.title[language],
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

export default async function ExperiencePage({ params }: { params: Promise<{ id: string, lang: string }> }) {
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
