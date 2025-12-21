"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { cn } from "@/lib/utils"
import { faqs } from "@/lib/data"

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
