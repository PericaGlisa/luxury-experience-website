import { YachtDetail } from "@/components/yacht-detail"
import { Header } from "@/components/header"
import { NewsletterSection } from "@/components/newsletter-section"
import { Footer } from "@/components/footer"

export default async function YachtPage({ params }: { params: Promise<{ id: string; lang: string }> }) {
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
