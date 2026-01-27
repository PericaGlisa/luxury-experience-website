import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { GalleryContent } from "@/components/gallery-content"
import type { Metadata } from "next"
import { translations } from "@/lib/translations"

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const language = (lang === "en" || lang === "sr" ? lang : "sr") as "en" | "sr"
  const title = translations[language].galleryTitleSEO
  const description = translations[language].galleryDescription

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  }
}

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-[#F7F4EE]">
      <Header />
      <GalleryContent />
      <Footer />
    </main>
  )
}
