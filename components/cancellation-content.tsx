"use client"

import { useLanguage } from "@/lib/language-context"

export function CancellationContent() {
  const { language } = useLanguage()

  return (
    <section className="pt-36 md:pt-48 pb-16 px-5 md:px-10 lg:px-20">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-light text-[#1B4B5A] mb-6">
            {language === "sr" ? "Politika otkazivanja" : "Cancellation Policy"}
          </h1>
        </div>

        <div className="space-y-8 text-[#5A6B70]">
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h2 className="font-serif text-2xl text-[#1B4B5A] mb-4">
              {language === "sr" ? "60+ dana pre polaska" : "60+ Days Before Departure"}
            </h2>
            <p className="leading-relaxed">
              {language === "sr"
                ? "Pun povraćaj novca minus administrativna taksa od 5%."
                : "Full refund minus 5% administrative fee."}
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h2 className="font-serif text-2xl text-[#1B4B5A] mb-4">
              {language === "sr" ? "30-59 dana pre polaska" : "30-59 Days Before Departure"}
            </h2>
            <p className="leading-relaxed">
              {language === "sr" ? "Povraćaj od 50% ukupne cene." : "50% refund of the total price."}
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h2 className="font-serif text-2xl text-[#1B4B5A] mb-4">
              {language === "sr" ? "Manje od 30 dana" : "Less Than 30 Days"}
            </h2>
            <p className="leading-relaxed">
              {language === "sr"
                ? "Nema povraćaja novca. Preporučujemo putno osiguranje za zaštitu vaše investicije."
                : "No refund available. We recommend travel insurance to protect your investment."}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
