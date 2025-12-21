import { ArticleDetail } from "@/components/article-detail"
import { Header } from "@/components/header"
import { NewsletterSection } from "@/components/newsletter-section"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"
import { journalArticles } from "@/lib/data"

export async function generateMetadata({ params }: { params: Promise<{ id: string, lang: string }> }): Promise<Metadata> {
  const { id, lang } = await params
  const language = (lang === "en" || lang === "sr" ? lang : "sr") as "en" | "sr"
  const article = journalArticles.find((a) => a.slug.en === id || a.slug.sr === id)
  
  if (!article) return { title: "Article Not Found" }

  const title = `${article.title[language]} | Maestrale Journal`
  const description = article.excerpt[language]
  const image = article.image || "/og-image.jpg"

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
          alt: article.title[language],
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

export default async function ArticlePage({ params }: { params: Promise<{ id: string, lang: string }> }) {
  const { id, lang } = await params
  const language = (lang === "en" || lang === "sr" ? lang : "sr") as "en" | "sr"

  return (
    <main>
      <Header />
      <ArticleDetail id={id} />
      <NewsletterSection />
      <Footer />
    </main>
  )
}
