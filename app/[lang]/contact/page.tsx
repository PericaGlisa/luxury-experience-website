import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactContent } from "@/components/contact-content"
import type { Metadata } from "next"
import { translations } from "@/lib/language-context"

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const language = (lang === "en" || lang === "sr" ? lang : "sr") as "en" | "sr"
  return {
    title: translations[language].contactTitle,
  }
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#F7F4EE]">
      <Header />
      <ContactContent />
      <Footer />
    </main>
  )
}
