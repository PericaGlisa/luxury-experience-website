import { ArticleDetail } from "@/components/article-detail"
import { Header } from "@/components/header"
import { NewsletterSection } from "@/components/newsletter-section"
import { Footer } from "@/components/footer"

export default async function ArticlePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params

  return (
    <main>
      <Header />
      <ArticleDetail id={id} />
      <NewsletterSection />
      <Footer />
    </main>
  )
}
