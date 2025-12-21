import { ArticleDetail } from "@/components/article-detail"
import { Header } from "@/components/header"
import { NewsletterSection } from "@/components/newsletter-section"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"
import { journalArticles } from "@/components/journal-content"

export async function generateMetadata({ params }: { params: Promise<{ id: string, lang: string }> }): Promise<Metadata> {
  const { id, lang } = await params
  const article = journalArticles.find((a) => a.slug.en === id || a.slug.sr === id)
  
  if (!article) return { title: "Article Not Found" }

  const language = (lang === "en" || lang === "sr" ? lang : "sr") as "en" | "sr"

  return {
    title: article.title[language],
    description: article.excerpt[language],
  }
}

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
