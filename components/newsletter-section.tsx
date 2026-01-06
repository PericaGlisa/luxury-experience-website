"use client"

import type React from "react"
import { useState } from "react"
import { Sparkles, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"

export function NewsletterSection() {
  const { t, language } = useLanguage()
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })

      if (response.ok) {
        setEmail("")
        setStatus("success")
      } else {
        setStatus("error")
        console.error("Newsletter subscription failed")
      }
    } catch (error) {
      setStatus("error")
      console.error("Newsletter subscription error", error)
    }
  }

  return (
    <section className="py-20 md:py-28 px-5 md:px-10 lg:px-20 bg-gradient-to-br from-[#F7F4EE] via-[#F0EDE5] to-[#E8E3D9] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#C9A962]/15 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#1B4B5A]/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C9A962]/5 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 bg-[#1B4B5A]/10 rounded-full px-4 py-2 mb-6">
          <Sparkles className="w-4 h-4 text-[#C9A962]" />
          <span className="text-sm font-medium text-[#1B4B5A]">
            {language === "sr" ? "Ekskluzivne ponude" : "Exclusive Offers"}
          </span>
        </div>

        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-[#1B4B5A] mb-4 text-balance">
          {language === "sr" ? "Budite u toku sa luksuzom" : "Stay in Touch with Luxury"}
        </h2>
        <p className="text-[#5A6B70] text-base md:text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
          {language === "sr"
            ? "Pridružite se našoj ekskluzivnoj mailing listi i budite prvi koji će saznati za posebne ponude, nove destinacije i luksuzna iskustva."
            : "Join our exclusive mailing list and be the first to know about special offers, new destinations, and luxury experiences."}
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t("emailPlaceholder")}
            required
            className="flex-1 px-6 py-4 rounded-full bg-white border border-[#1B4B5A]/20 text-[#1B4B5A] placeholder:text-[#5A6B70]/60 focus:outline-none focus:border-[#C9A962] focus:ring-2 focus:ring-[#C9A962]/20 transition-all text-base shadow-sm"
          />
          <Button
            type="submit"
            className="bg-[#1B4B5A] hover:bg-[#0D3D4A] text-white rounded-full px-8 py-4 h-auto min-h-[56px] font-semibold text-base flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all"
          >
            {t("subscribe")}
            <ArrowRight className="w-5 h-5" />
          </Button>
        </form>
        {status === "success" && (
          <p className="mt-2 text-xs text-[#1B4B5A] text-center">
            {language === "sr"
              ? "Uspešno ste se prijavili na newsletter."
              : "You have successfully subscribed to the newsletter."}
          </p>
        )}
        {status === "error" && (
          <p className="mt-2 text-xs text-[#B00020] text-center">
            {language === "sr"
              ? "Došlo je do greške pri prijavi. Pokušajte ponovo."
              : "Subscription failed. Please try again."}
          </p>
        )}

        <p className="text-xs text-[#5A6B70]/70 mt-6">
          {language === "sr"
            ? "Bez spama, samo ekskluzivni sadržaj. Možete se odjaviti u bilo kom trenutku."
            : "No spam, only exclusive content. Unsubscribe anytime."}
        </p>
      </div>
    </section>
  )
}
