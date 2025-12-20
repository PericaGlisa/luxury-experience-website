"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/lib/language-context"

export default function NotFound() {
  const { t, getUrl } = useLanguage()

  return (
    <main className="min-h-screen bg-[#F7F4EE] flex flex-col">
      <Header />
      
      <div className="flex-grow relative flex items-center justify-center pt-24 pb-12 px-5">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/luxury-yacht-sailing-mediterranean-costa-smeralda.jpg"
            alt="Luxury yacht in Sardinia"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-2xl w-full text-center text-white px-6 py-12 md:py-20 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl">
          <h1 className="font-serif text-8xl md:text-[12rem] font-light mb-4 opacity-90 leading-none">
            404
          </h1>
          <h2 className="font-serif text-3xl md:text-5xl font-light mb-6 tracking-tight">
            {t("notFoundTitle")}
          </h2>
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-md mx-auto leading-relaxed">
            {t("notFoundDescription")}
          </p>
          
          <Button 
            asChild
            className="bg-white text-[#1B4B5A] hover:bg-[#F7F4EE] rounded-full px-8 py-6 text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <Link href={getUrl("/")} className="flex items-center gap-2">
              <ArrowLeft className="w-5 h-5" />
              {t("backToHome")}
            </Link>
          </Button>
        </div>
      </div>

      <Footer />
    </main>
  )
}
