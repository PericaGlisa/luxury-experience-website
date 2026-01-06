"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"

export function PromoBanner() {
  const { t, getUrl } = useLanguage()

  return (
    <section className="py-12 md:py-16 px-5 md:px-10 lg:px-20 bg-[#F7F4EE]">
      <div className="max-w-7xl mx-auto">
        <div className="relative h-[400px] md:h-[450px] rounded-[2rem] overflow-hidden group shadow-2xl">
          {/* Background Image */}
          <Image
            src="/luxury-resort-costa-smeralda-sardinia-infinity-pool.jpg"
            alt="Luxury Sardinia Resort"
            fill
            className="object-cover transition-transform duration-1000 group-hover:scale-110"
          />
          
          {/* Advanced Multi-layer Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#1B4B5A]/90 via-[#1B4B5A]/40 to-transparent" />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
          
          {/* Content Container */}
          <div className="relative h-full flex flex-col justify-center px-8 md:px-16 lg:px-24">
            <div className="max-w-xl space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
                <div className="w-1.5 h-1.5 rounded-full bg-[#C9A962] animate-pulse" />
                <span className="text-white/90 text-xs font-medium tracking-widest uppercase">
                  {t("bannerSubtitle")}
                </span>
              </div>
              
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white font-medium leading-tight">
                {t("bannerTitle")}
              </h2>
              
              <p className="text-white/80 text-base md:text-lg font-light leading-relaxed max-w-md">
                {t("bannerDescription")}
              </p>
              
              <div className="flex flex-wrap gap-4 pt-2">
                <Button
                  asChild
                  className="bg-white text-[#1B4B5A] hover:bg-[#C9A962] hover:text-white rounded-full px-8 py-6 transition-all duration-500 group/btn"
                >
                  <Link href={getUrl("/booking")} className="flex items-center gap-2 font-medium">
                    {t("bannerCTA")}
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Subtle Decorative Border Overlay */}
          <div className="absolute inset-4 border border-white/10 rounded-[1.5rem] pointer-events-none" />
        </div>
      </div>
    </section>
  )
}
