import type React from "react"
import type { Metadata } from "next"
import { Cormorant_Garamond, Montserrat } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { LanguageProvider } from "@/lib/language-context"
import { ScrollToTop } from "@/components/scroll-to-top"
import { WhatsAppWidget } from "@/components/whatsapp-widget"
import "../globals.css"

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "sr" }]
}

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-serif",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
})

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const isEn = lang === "en"

  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://maestralelux.com"),
    title: isEn ? "Maestrale | Luxury Sardinia Travel & Experiences" : "Maestrale | Luksuzna putovanja na Sardiniju",
    description: isEn
      ? "Maestrale creates bespoke luxury journeys to Sardinia for guests from the Balkans, featuring private villas, yachts, hidden gems, and personalized itineraries."
      : "Maestrale kreira luksuzna putovanja na Sardiniju za goste iz Srbije, regiona ExYu i celog Balkana, sa privatnim vilama, jahtama, skrivenim mestima i personalizovanim itinererima.",
    keywords: [
      "Sardinia luxury travel",
      "Sardinia private villas",
      "Sardinia yacht charter",
      "Sardinia itinerary",
      "putovanje na Sardiniju",
      "luksuzno putovanje Sardinija",
      "Sardinija iz Srbije",
      "Sardinija ExYu",
      "Sardinija Balkan",
      "luksuzne vile Sardinija",
      "čarter jahti Sardinija",
      "Costa Smeralda",
      "Porto Cervo",
      "luksuzna putovanja Balkan",
      "luksuzna putovanja ExYu",
      "tailor made Sardinia journeys",
    ],
    openGraph: {
      title: isEn ? "Maestrale | Luxury Sardinia Travel" : "Maestrale | Luksuzna putovanja na Sardiniju",
      description: isEn
        ? "Bespoke luxury journeys to Sardinia for guests from the Balkans, with villas, hotels, yachts, and tailored experiences."
        : "Diskretan partner za organizaciju luksuznih putovanja na Sardiniju za goste iz Srbije, regiona i Balkana, sa vilama, hotelima, jahtama i iskustvima krojenim po meri.",
      url: `/${lang}`,
      siteName: "Maestrale Luxury Experience",
      locale: isEn ? "en_US" : "sr_RS",
      alternateLocale: isEn ? ["sr_RS"] : ["en_US"],
      type: "website",
      images: [
        {
          url: "/luxury-sardinian-villa-with-pool-overlooking-medit.jpg",
          width: 1200,
          height: 630,
          alt: "Luxury Sardinian villa with pool overlooking the Mediterranean",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: isEn ? "Maestrale | Luxury Sardinia Travel" : "Maestrale | Luksuzna putovanja na Sardiniju",
      description: isEn
        ? "Tailor made Sardinia journeys for guests from Serbia, ExYu and the Balkans, with villas, yachts and curated experiences."
        : "Personalizovana luksuzna putovanja na Sardiniju za goste sa Balkana, sa vilama, jahtama i kustoski odabranim iskustvima.",
      images: ["/luxury-sardinian-villa-with-pool-overlooking-medit.jpg"],
    },
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `/${lang}`,
      languages: {
        en: "/en",
        sr: "/sr",
      },
    },
    icons: {
      icon: "/favicon.png",
      shortcut: "/favicon.png",
      apple: "/favicon.png",
    },
  }
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: Promise<{ lang: string }>
}>) {
  const { lang } = await params
  
  return (
    <html lang={lang} suppressHydrationWarning>
      <body className={`${cormorant.variable} ${montserrat.variable} font-sans antialiased`} suppressHydrationWarning>
        <LanguageProvider initialLanguage={lang as "en" | "sr"}>
          <ScrollToTop />
          {children}
          <WhatsAppWidget />
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
