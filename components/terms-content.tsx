"use client"

import { useLanguage } from "@/lib/language-context"

export function TermsContent() {
  const { language } = useLanguage()

  return (
    <section className="pt-36 md:pt-48 pb-16 px-5 md:px-10 lg:px-20">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-light text-[#1B4B5A] mb-6">
            {language === "sr" ? "Uslovi korišćenja" : "Terms of Service"}
          </h1>
          <p className="text-[#5A6B70]">
            {language === "sr" ? "Poslednje ažuriranje: Januar 2025" : "Last updated: January 2025"}
          </p>
        </div>

        <div className="space-y-8 text-[#5A6B70]">
          <div>
            <h2 className="font-serif text-2xl text-[#1B4B5A] mb-4">
              {language === "sr" ? "Prihvatanje uslova" : "Acceptance of Terms"}
            </h2>
            <p className="leading-relaxed">
              {language === "sr"
                ? "Korišćenjem usluga Maestrale Luxury Experience, prihvatate ove uslove korišćenja. Ako se ne slažete sa bilo kojim delom ovih uslova, molimo vas da ne koristite naše usluge."
                : "By using Maestrale Luxury Experience services, you accept these terms of service. If you do not agree with any part of these terms, please do not use our services."}
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-[#1B4B5A] mb-4">
              {language === "sr" ? "Rezervacije i plaćanja" : "Bookings and Payments"}
            </h2>
            <p className="leading-relaxed">
              {language === "sr"
                ? "Sve rezervacije su podložne dostupnosti i potvrdi. Depozit može biti potreban za osiguranje rezervacije. Završna uplata je obično potrebna 30 dana pre datuma polaska."
                : "All bookings are subject to availability and confirmation. A deposit may be required to secure your booking. Final payment is typically required 30 days before the departure date."}
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-[#1B4B5A] mb-4">
              {language === "sr" ? "Odgovornost" : "Liability"}
            </h2>
            <p className="leading-relaxed">
              {language === "sr"
                ? "Maestrale Luxury Experience deluje kao posrednik između vas i pružalaca usluga. Nismo odgovorni za radnje, propuste ili kašnjenja bilo kog pružaoca usluga treće strane."
                : "Maestrale Luxury Experience acts as an intermediary between you and service providers. We are not liable for the actions, omissions, or delays of any third-party service provider."}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
