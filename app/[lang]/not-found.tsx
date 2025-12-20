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
      <div className="bg-white shadow-sm z-50">
        <Header />
      </div>
      
      <div className="flex-grow relative flex items-center justify-center py-20 md:py-32 px-5">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/luxury-sardinian-villa-with-pool-overlooking-medit.jpg"
            alt="Luxury Sardinia"
            fill
            className="object-cover"
            priority
            quality={100}
          />
          <div className="absolute inset-0 bg-[#1B4B5A]/30 backdrop-blur-[1px]" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-2xl w-full text-center text-white px-6 py-12 md:py-20 rounded-[2.5rem] bg-[#1B4B5A]/20 backdrop-blur-xl border border-white/30 shadow-2xl mx-auto">
          <div className="mb-6 inline-block">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl px-6 py-2 border border-white/20">
              <span className="text-sm md:text-base font-medium tracking-[0.2em] uppercase">Error</span>
            </div>
          </div>
          
          <h1 className="font-serif text-8xl md:text-[10rem] font-light mb-4 opacity-95 leading-none tracking-tighter">
            404
          </h1>
          
          <h2 className="font-serif text-3xl md:text-5xl font-light mb-6 tracking-tight px-4">
            {t("notFoundTitle")}
          </h2>
          
          <p className="text-base md:text-xl text-white/90 mb-10 max-w-md mx-auto leading-relaxed px-4">
            {t("notFoundDescription")}
          </p>
          
          <Button 
            asChild
            className="bg-[#C9A962] hover:bg-[#B39352] text-white rounded-full px-10 py-7 text-lg font-medium transition-all duration-500 shadow-xl hover:shadow-[#C9A962]/20 transform hover:-translate-y-1 group"
          >
            <Link href={getUrl("/")} className="flex items-center gap-3">
              <ArrowLeft className="w-5 h-5 transition-transform duration-500 group-hover:-translate-x-1" />
              <span>{t("backToHome")}</span>
            </Link>
          </Button>
        </div>
      </div>

      <Footer />
    </main>
  )
}
