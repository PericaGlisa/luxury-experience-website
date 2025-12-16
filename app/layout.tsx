import type React from "react"
import type { Metadata } from "next"
import { Cormorant_Garamond, Montserrat } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { LanguageProvider } from "@/lib/language-context"
import { ScrollToTop } from "@/components/scroll-to-top"
import "./globals.css"

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

export const metadata: Metadata = {
  title: "Maestrale | Luxury Sardinia Travel & Experiences",
  description:
    "Maestrale kreira luksuzna putovanja na Sardiniju za goste iz Srbije, regiona ExYu i celog Balkana, sa privatnim vilama, jahtama, skrivenim mestima i personalizovanim itinererima.",
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
    title: "Maestrale | Luksuzna putovanja na Sardiniju",
    description:
      "Diskretan partner za organizaciju luksuznih putovanja na Sardiniju za goste iz Srbije, regiona i Balkana, sa vilama, hotelima, jahtama i iskustvima krojenim po meri.",
    url: "/",
    siteName: "Maestrale Luxury Experience",
    locale: "sr_RS",
    alternateLocale: ["en_US", "hr_HR", "bs_BA", "sl_SI"],
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
    title: "Maestrale | Luxury Sardinia Travel",
    description:
      "Tailor made Sardinia journeys for guests from Serbia, ExYu and the Balkans, with villas, yachts and curated experiences.",
    images: ["/luxury-sardinian-villa-with-pool-overlooking-medit.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="sr">
      <body className={`${cormorant.variable} ${montserrat.variable} font-sans antialiased`}>
        <LanguageProvider>
          <ScrollToTop />
          {children}
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
