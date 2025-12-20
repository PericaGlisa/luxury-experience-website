"use client"

import { useEffect } from "react"
import Link from "next/link"
import { ArrowLeft, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/lib/language-context"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  const { t, getUrl, language } = useLanguage()

  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <main className="min-h-screen bg-[#F7F4EE] flex flex-col">
      <Header />
      
      <div className="flex-grow flex items-center justify-center pt-36 md:pt-48 pb-12 md:pb-24 px-5">
        <div className="max-w-2xl w-full text-center px-6 py-8 md:py-12 mx-auto">
          <div className="mb-8 inline-block">
            <div className="bg-[#1B4B5A]/5 rounded-2xl px-6 py-2 border border-[#1B4B5A]/10">
              <span className="text-sm md:text-base font-medium tracking-[0.2em] uppercase text-[#1B4B5A]">
                {t("errorLabel")}
              </span>
            </div>
          </div>
          
          <h1 className="font-serif text-8xl md:text-[12rem] font-light mb-6 text-[#1B4B5A] opacity-20 leading-none tracking-tighter">
            500
          </h1>
          
          <h2 className="font-serif text-3xl md:text-5xl font-light mb-6 tracking-tight px-4 text-[#1B4B5A]">
            {language === "sr" ? "Nešto nije u redu" : "Something went wrong"}
          </h2>
          
          <p className="text-base md:text-xl text-[#5A6B70] mb-12 max-w-md mx-auto leading-relaxed px-4">
            {language === "sr" 
              ? "Došlo je do neočekivane greške. Naš tim je obavešten i radimo na rešavanju problema." 
              : "An unexpected error has occurred. Our team has been notified and we are working to fix it."}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              onClick={() => reset()}
              className="bg-[#1B4B5A] hover:bg-[#0D3D4A] text-white rounded-full px-10 py-7 text-lg font-medium transition-all duration-500 shadow-xl hover:shadow-[#1B4B5A]/20 transform hover:-translate-y-1 group"
            >
              <RefreshCw className="w-5 h-5 mr-3 transition-transform duration-500 group-hover:rotate-180" />
              <span>{language === "sr" ? "Pokušajte ponovo" : "Try again"}</span>
            </Button>

            <Button 
              asChild
              variant="outline"
              className="border-[#1B4B5A] text-[#1B4B5A] hover:bg-[#1B4B5A] hover:text-white rounded-full px-10 py-7 text-lg font-medium transition-all duration-500 transform hover:-translate-y-1"
            >
              <Link href={getUrl("/")} className="flex items-center gap-3">
                <ArrowLeft className="w-5 h-5" />
                <span>{t("backToHome")}</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
