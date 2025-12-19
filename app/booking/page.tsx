"use client"

import { useEffect } from "react"
import Cal, { getCalApi } from "@calcom/embed-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/lib/language-context"

export default function BookingPage() {
  const { language } = useLanguage()

  useEffect(() => {
    ;(async function () {
      const cal = await getCalApi({ namespace: "15min", origin: "https://app.cal.eu" })
      cal("ui", {
        cssVarsPerTheme: {
          light: { "cal-brand": "#1B4B5A" },
          dark: { "cal-brand": "#C9A962" },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      })

      cal("inline", {
        elementOrSelector: "#cal-booking-embed",
        calLink: "maestralelux/15min",
        config: { layout: "month_view", theme: "light" },
      })
    })()
  }, [])

  return (
    <main className="min-h-screen bg-[#F7F4EE]">
      <Header />
      
      <section className="pt-36 md:pt-48 pb-16 px-5 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#C9A962] text-sm font-medium tracking-widest uppercase mb-4">
              {language === "sr" ? "Zakazivanje" : "Booking"}
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-[#1B4B5A] mb-6">
              {language === "sr" ? "Zakažite konsultacije" : "Book a Consultation"}
            </h1>
            <p className="text-[#5A6B70] text-lg max-w-2xl mx-auto">
              {language === "sr"
                ? "Odaberite termin koji vam najviše odgovara za kratke konsultacije sa našim timom."
                : "Choose a time that works best for you for a brief consultation with our team."}
            </p>
          </div>

          <div className="bg-white rounded-3xl p-4 md:p-8 shadow-sm overflow-hidden min-h-[600px]">
            <div 
              id="cal-booking-embed" 
              style={{ width: "100%", height: "100%", minHeight: "600px" }}
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
