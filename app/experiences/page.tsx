import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { NewsletterSection } from "@/components/newsletter-section"
import { ExperiencesContent } from "@/components/experiences-content"

export default function ExperiencesPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ExperiencesContent />
      <NewsletterSection />
      <Footer />
    </main>
  )
}
