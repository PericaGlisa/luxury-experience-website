import type React from "react"
import type { Metadata } from "next"
import { Cormorant_Garamond, Montserrat } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { LanguageProvider } from "@/lib/language-context"
import { translations } from "@/lib/translations"
import { ScrollToTop } from "@/components/scroll-to-top"
import { WhatsAppWidget } from "@/components/whatsapp-widget"
import JsonLd from "@/components/json-ld"
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
  const language = (lang === "en" || lang === "sr" ? lang : "sr") as "en" | "sr"
  const t = translations[language]
  const isEn = language === "en"

  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://maestralelux.com"),
    title: {
      template: `%s | ${t.siteName}`,
      default: t.homeTitle,
    },
    description: t.siteDescription,
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
      title: t.homeTitle,
      description: t.siteDescription,
      url: `/${language}`,
      siteName: t.siteName,
      locale: language === "en" ? "en_US" : "sr_RS",
      alternateLocale: language === "en" ? ["sr_RS"] : ["en_US"],
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
      title: t.homeTitle,
      description: t.siteDescription,
      images: ["/luxury-sardinian-villa-with-pool-overlooking-medit.jpg"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
    },
    alternates: {
      canonical: `/${language}`,
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
        <JsonLd />
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
