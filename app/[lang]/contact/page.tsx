import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactContent } from "@/components/contact-content"
import type { Metadata } from "next"
import { translations } from "@/lib/translations"

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const language = (lang === "en" || lang === "sr" ? lang : "sr") as "en" | "sr"
  const title = translations[language].contactTitle
  const description = language === "sr"
    ? "Kontaktirajte Maestrale Luxury Experience tim. Tu smo da vam pomognemo u planiranju vašeg savršenog odmora na Sardiniji."
    : "Contact the Maestrale Luxury Experience team. We are here to help you plan your perfect Sardinia getaway."
  const image = "/porto-cervo-luxury-marina-sardinia-yachts.jpg"

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
          alt: title,
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

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#F7F4EE]">
      <Header />
      <ContactContent />
      <Footer />
    </main>
  )
}
