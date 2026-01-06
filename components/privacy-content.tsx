"use client"

import { useLanguage } from "@/lib/language-context"

export function PrivacyContent() {
  const { language } = useLanguage()

  return (
    <section className="pt-36 md:pt-48 pb-16 px-5 md:px-10 lg:px-20">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-light text-[#1B4B5A] mb-6">
            {language === "sr" ? "Politika privatnosti" : "Privacy Policy"}
          </h1>
          <p className="text-[#5A6B70]">
            {language === "sr" ? "Poslednje ažuriranje: Januar 2025" : "Last updated: January 2025"}
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="space-y-8 text-[#5A6B70]">
            <div>
              <h2 className="font-serif text-2xl text-[#1B4B5A] mb-4">
                {language === "sr" ? "Prikupljanje informacija" : "Information Collection"}
              </h2>
              <p className="leading-relaxed">
                {language === "sr"
                  ? "Prikupljamo informacije koje nam dostavite direktno, kao što su vaše ime, email adresa, broj telefona i preferencije putovanja kada koristite naš sajt ili se pretplatite na naš bilten."
                  : "We collect information you provide directly to us, such as your name, email address, phone number, and travel preferences when you use our site or subscribe to our newsletter."}
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl text-[#1B4B5A] mb-4">
                {language === "sr" ? "Korišćenje informacija" : "Use of Information"}
              </h2>
              <p className="leading-relaxed">
                {language === "sr"
                  ? "Koristimo vaše informacije za obradu rezervacija, komunikaciju sa vama o našim uslugama, slanje promotivnih materijala (uz vašu saglasnost) i poboljšanje korisničkog iskustva."
                  : "We use your information to process bookings, communicate with you about our services, send promotional materials (with your consent), and improve user experience."}
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl text-[#1B4B5A] mb-4">
                {language === "sr" ? "Zaštita podataka" : "Data Protection"}
              </h2>
              <p className="leading-relaxed">
                {language === "sr"
                  ? "Primenjujemo odgovarajuće tehničke i organizacione mere za zaštitu vaših ličnih podataka od neovlašćenog pristupa, izmena, otkrivanja ili uništenja."
                  : "We implement appropriate technical and organizational measures to protect your personal data from unauthorized access, alteration, disclosure, or destruction."}
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl text-[#1B4B5A] mb-4">
                {language === "sr" ? "Kontaktirajte nas" : "Contact Us"}
              </h2>
              <p className="leading-relaxed">
                {language === "sr" ? (
                  <>
                    Za sva pitanja u vezi sa ovom politikom privatnosti, kontaktirajte nas na{" "}
                    <a href="mailto:info@maestralelux.com">info@maestralelux.com</a>.
                  </>
                ) : (
                  <>
                    For any questions regarding this privacy policy, contact us at{" "}
                    <a href="mailto:info@maestralelux.com">info@maestralelux.com</a>.
                  </>
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
