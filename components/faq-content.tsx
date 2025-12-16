"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { cn } from "@/lib/utils"

const faqs = {
  en: [
    {
      question: "How do I book a luxury experience?",
      answer:
        "You can book through our consultation form on the homepage, or contact us directly via email or phone. Our travel specialists will guide you through the entire process.",
    },
    {
      question: "What is included in a yacht charter?",
      answer:
        "Our yacht charters include the vessel, professional crew, fuel, water toys, and basic provisions. Gourmet catering, premium beverages, and special requests can be arranged.",
    },
    {
      question: "What is the cancellation policy?",
      answer:
        "Cancellations made 30+ days before departure receive a full refund minus administrative fees. Cancellations within 30 days are subject to our tiered policy. Travel insurance is recommended.",
    },
    {
      question: "Do you offer customized itineraries?",
      answer:
        "Every journey is tailored to your preferences. From private island visits to exclusive dining experiences, we create bespoke itineraries for each guest.",
    },
    {
      question: "What destinations do you cover?",
      answer:
        "Our work is dedicated to Sardinia and Costa Smeralda. For other Mediterranean destinations we connect you with trusted partners, while our in house team designs only Sardinia journeys.",
    },
  ],
  sr: [
    {
      question: "Kako da rezervišem luksuzno iskustvo?",
      answer:
        "Možete rezervisati putem naše forme za konsultacije na početnoj stranici, ili nas direktno kontaktirati putem emaila ili telefona. Naši specijalisti za putovanja će vas voditi kroz ceo proces.",
    },
    {
      question: "Šta je uključeno u čarter jahte?",
      answer:
        "Naši čarteri jahti uključuju plovilo, profesionalnu posadu, gorivo, vodene igračke i osnovne namirnice. Gurmansko ketering, premium pića i posebni zahtevi mogu se organizovati.",
    },
    {
      question: "Koja je politika otkazivanja?",
      answer:
        "Otkazivanja izvršena 30+ dana pre polaska dobijaju pun povraćaj novca minus administrativne takse. Otkazivanja u roku od 30 dana podležu našoj stepenovanoj politici. Preporučuje se putno osiguranje.",
    },
    {
      question: "Da li nudite prilagođene itinerere?",
      answer:
        "Apsolutno! Svako putovanje je prilagođeno vašim željama. Od poseta privatnim ostrvima do ekskluzivnih gastronomskih iskustava, kreiramo jedinstvene itinerere za svakog gosta.",
    },
    {
      question: "Koje destinacije pokrivate?",
      answer:
        "Specijalizovani smo za Mediteran, sa fokusom na Sardiniju, Amalfi obalu, Kapri i Francusku Rivijeru. Takođe nudimo iskustva u Hrvatskoj i Grčkoj.",
    },
  ],
}

export function FaqContent() {
  const { language } = useLanguage()
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const currentFaqs = faqs[language]

  return (
    <section className="pt-36 md:pt-48 pb-16 px-5 md:px-10 lg:px-20">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-[#C9A962] text-sm font-medium tracking-widest uppercase mb-4">
            {language === "sr" ? "Pomoć i podrška" : "Help & Support"}
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-light text-[#1B4B5A] mb-6">
            {language === "sr" ? "Česta pitanja" : "Frequently Asked Questions"}
          </h1>
          <p className="text-[#5A6B70] text-lg">
            {language === "sr"
              ? "Pronađite odgovore na najčešća pitanja o našim uslugama."
              : "Find answers to the most common questions about our services."}
          </p>
        </div>

        <div className="space-y-4">
          {currentFaqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <h3 className="font-medium text-[#1B4B5A] pr-4">{faq.question}</h3>
                <ChevronDown
                  className={cn(
                    "w-5 h-5 text-[#C9A962] shrink-0 transition-transform",
                    openIndex === index && "rotate-180",
                  )}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-[#5A6B70] leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
