import type { Metadata } from "next"
import { translations } from "@/lib/translations"
import { BookingClient } from "@/components/booking-client"

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const language = (lang === "en" || lang === "sr" ? lang : "sr") as "en" | "sr"
  return {
    title: translations[language].bookingTitle,
  }
}

export default function BookingPage() {
  return <BookingClient />
}
