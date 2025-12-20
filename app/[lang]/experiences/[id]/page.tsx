import { ExperienceDetail } from "@/components/experience-detail"
import { Header } from "@/components/header"
import { NewsletterSection } from "@/components/newsletter-section"
import { Footer } from "@/components/footer"

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
