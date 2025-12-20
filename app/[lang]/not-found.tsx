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
      
      <div className="flex-grow flex items-center justify-center pt-36 md:pt-48 pb-12 md:pb-24 px-5">
        {/* Content */}
        <div className="max-w-2xl w-full text-center px-6 py-8 md:py-12 mx-auto">
          <div className="mb-8 inline-block">
            <div className="bg-[#1B4B5A]/5 rounded-2xl px-6 py-2 border border-[#1B4B5A]/10">
              <span className="text-sm md:text-base font-medium tracking-[0.2em] uppercase text-[#1B4B5A]">Error</span>
            </div>
          </div>
          
          <h1 className="font-serif text-8xl md:text-[12rem] font-light mb-6 text-[#1B4B5A] opacity-20 leading-none tracking-tighter">
            404
          </h1>
          
          <h2 className="font-serif text-3xl md:text-5xl font-light mb-6 tracking-tight px-4 text-[#1B4B5A]">
            {t("notFoundTitle")}
          </h2>
          
          <p className="text-base md:text-xl text-[#5A6B70] mb-12 max-w-md mx-auto leading-relaxed px-4">
            {t("notFoundDescription")}
          </p>
          
          <Button 
            asChild
            className="bg-[#1B4B5A] hover:bg-[#0D3D4A] text-white rounded-full px-10 py-7 text-lg font-medium transition-all duration-500 shadow-xl hover:shadow-[#1B4B5A]/20 transform hover:-translate-y-1 group"
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
