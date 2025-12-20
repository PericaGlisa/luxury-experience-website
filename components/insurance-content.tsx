"use client"

import { Shield, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"
import Link from "next/link"

export function InsuranceContent() {
  const { language, getUrl } = useLanguage()

  const benefits = {
    en: [
      "Trip cancellation coverage",
      "Medical emergency assistance",
      "Baggage loss and delay protection",
      "24/7 worldwide support",
      "Flight delay compensation",
      "Emergency evacuation coverage",
    ],
    sr: [
      "Pokriće otkazivanja putovanja",
      "Pomoć u medicinskim hitnim slučajevima",
      "Zaštita od gubitka i kašnjenja prtljaga",
      "24/7 podrška širom sveta",
      "Kompenzacija za kašnjenje leta",
      "Pokriće za hitnu evakuaciju",
    ],
  }

  return (
    <section className="pt-36 md:pt-48 pb-16 px-5 md:px-10 lg:px-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#C9A962]/20 rounded-full mb-6">
            <Shield className="w-8 h-8 text-[#C9A962]" />
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-light text-[#1B4B5A] mb-6">
            {language === "sr" ? "Putno osiguranje" : "Travel Insurance"}
          </h1>
          <p className="text-[#5A6B70] text-lg max-w-2xl mx-auto">
            {language === "sr"
              ? "Zaštitite svoju investiciju i putujte sa spokojnim umom uz naše sveobuhvatno putno osiguranje."
              : "Protect your investment and travel with peace of mind with our comprehensive travel insurance."}
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm">
          <h2 className="font-serif text-2xl text-[#1B4B5A] mb-8 text-center">
            {language === "sr" ? "Šta je uključeno" : "What's Included"}
          </h2>
          <div className="grid md:grid-cols-2 gap-4 mb-10">
            {benefits[language].map((benefit, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-[#40B5AD] shrink-0" />
                <span className="text-[#5A6B70]">{benefit}</span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button asChild className="bg-[#1B4B5A] hover:bg-[#0D3D4A] text-white rounded-full px-8 py-3">
              <Link href={getUrl("/contact")}>
                {language === "sr" ? "Saznajte više" : "Learn More"}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
