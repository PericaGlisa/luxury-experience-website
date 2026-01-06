import type { Metadata } from "next"
import { translations } from "@/lib/translations"
import { BookingClient } from "@/components/booking-client"

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const language = (lang === "en" || lang === "sr" ? lang : "sr") as "en" | "sr"
  const title = translations[language].bookingTitle
  const description = language === "sr" 
    ? "Rezervišite svoje luksuzno iskustvo na Sardiniji. Jahte, privatni letovi, transferi i ekskluzivne ture."
    : "Book your luxury Sardinia experience. Yacht charters, private flights, transfers, and exclusive tours."
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

export default function BookingPage() {
  return <BookingClient />
}
