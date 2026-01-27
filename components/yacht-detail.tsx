"use client"

import Image from "next/image"
import Link from "next/link"
import { Anchor, Users, Ruler, Star, ArrowLeft, Compass, Shield, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"
import { notFound } from "next/navigation"
import { yachts, yachtFeatureNames } from "@/lib/data"

export function YachtDetail({ id }: { id: string }) {
  const { language, getUrl } = useLanguage()
  const yacht = yachts.find((y) => y.id === id || y.slug.en === id || y.slug.sr === id)
  
  if (!yacht) {
    notFound()
  }

  const yachtType = typeof yacht.type === 'string' ? yacht.type : yacht.type[language as 'en' | 'sr']

  return (
    <section className="pt-36 md:pt-48 pb-16 px-5 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <Link
          href={getUrl("/yachts")}
          className="inline-flex items-center gap-2 text-[#5A6B70] hover:text-[#1B4B5A] mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{language === "sr" ? "Nazad na flotu" : "Back to fleet"}</span>
        </Link>

        {/* Image Gallery */}
        <div className="grid lg:grid-cols-2 gap-4 mb-10">
          <div className="relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden">
            <Image src={yacht.images?.[0] || yacht.image || "/placeholder.svg"} alt={yacht.name} fill className="object-cover" />
            <div className="absolute top-4 left-4 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full">
              <span className="text-sm font-medium text-[#1B4B5A]">{yachtType}</span>
            </div>
          </div>
          <div className="grid grid-rows-2 gap-4">
            <div className="relative h-[190px] lg:h-[240px] rounded-2xl overflow-hidden">
              <Image
                src={yacht.images?.[1] || "/placeholder.svg?height=300&width=500&query=yacht interior luxury salon"}
                alt={`${yacht.name} interior`}
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-[190px] lg:h-[240px] rounded-2xl overflow-hidden">
              <Image
                src={yacht.images?.[2] || "/placeholder.svg?height=300&width=500&query=yacht deck sunset cruise"}
                alt={`${yacht.name} deck`}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center gap-1">
                <Star className="w-5 h-5 fill-[#C9A962] text-[#C9A962]" />
                <span className="font-medium text-[#1B4B5A]">{yacht.rating}</span>
              </div>
              <span className="text-sm text-[#5A6B70]">
                {yacht.builder} • {yacht.built}
              </span>
            </div>

            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#1B4B5A] mb-6">{yacht.name}</h1>

            <p className="text-[#5A6B70] text-lg leading-relaxed mb-8">
              {yacht.description ? (typeof yacht.description === 'string' ? yacht.description : yacht.description[language as "en" | "sr"]) : ""}
            </p>

            {/* Specifications */}
            <h3 className="font-serif text-xl text-[#1B4B5A] mb-4">
              {language === "sr" ? "Specifikacije" : "Specifications"}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="text-center p-4 bg-[#F7F4EE] rounded-xl">
                <Ruler className="w-5 h-5 text-[#C9A962] mx-auto mb-2" />
                <p className="text-xs text-[#5A6B70] mb-1">{language === "sr" ? "Dužina" : "Length"}</p>
                <p className="font-medium text-[#1B4B5A]">{yacht.length}</p>
              </div>
              <div className="text-center p-4 bg-[#F7F4EE] rounded-xl">
                <Users className="w-5 h-5 text-[#C9A962] mx-auto mb-2" />
                <p className="text-xs text-[#5A6B70] mb-1">{language === "sr" ? "Gosti" : "Guests"}</p>
                <p className="font-medium text-[#1B4B5A]">{yacht.guests}</p>
              </div>
              <div className="text-center p-4 bg-[#F7F4EE] rounded-xl">
                <Anchor className="w-5 h-5 text-[#C9A962] mx-auto mb-2" />
                <p className="text-xs text-[#5A6B70] mb-1">{language === "sr" ? "Posada" : "Crew"}</p>
                <p className="font-medium text-[#1B4B5A]">{yacht.crew}</p>
              </div>
              <div className="text-center p-4 bg-[#F7F4EE] rounded-xl">
                <Compass className="w-5 h-5 text-[#C9A962] mx-auto mb-2" />
                <p className="text-xs text-[#5A6B70] mb-1">{language === "sr" ? "Brzina" : "Speed"}</p>
                <p className="font-medium text-[#1B4B5A]">{yacht.speed}</p>
              </div>
            </div>

            {/* Features */}
            <h3 className="font-serif text-xl text-[#1B4B5A] mb-4">
              {language === "sr" ? "Oprema i aktivnosti" : "Equipment & Activities"}
            </h3>
            <div className="flex flex-wrap gap-3">
              {yacht.features?.map((feature) => (
                <span key={feature} className="px-4 py-2 bg-[#1B4B5A] text-white text-sm rounded-full">
                  {yachtFeatureNames[feature]?.[language as "en" | "sr"] || feature}
                </span>
              ))}
            </div>
          </div>

          {/* Booking Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 bg-white rounded-3xl p-6 shadow-lg border border-[#E8E4DC]">
              <div className="space-y-3 mb-6 text-sm">
                <div className="flex items-center justify-between py-2 border-b border-[#E8E4DC]">
                  <span className="text-[#5A6B70]">{language === "sr" ? "Domet" : "Range"}</span>
                  <span className="text-[#1B4B5A] font-medium">{yacht.range}</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-[#E8E4DC]">
                  <span className="text-[#5A6B70]">{language === "sr" ? "Godina" : "Year"}</span>
                  <span className="text-[#1B4B5A] font-medium">{yacht.built}</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-[#5A6B70]">{language === "sr" ? "Proizvođač" : "Builder"}</span>
                  <span className="text-[#1B4B5A] font-medium">{yacht.builder}</span>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-[#F7F4EE] rounded-xl mb-6">
                <Calendar className="w-5 h-5 text-[#C9A962]" />
                <div>
                  <p className="text-xs text-[#5A6B70]">{language === "sr" ? "Minimalno" : "Minimum"}</p>
                  <p className="text-sm text-[#1B4B5A] font-medium">3 {language === "sr" ? "dana" : "days"}</p>
                </div>
              </div>
  
              <Button asChild className="w-full bg-[#1B4B5A] hover:bg-[#0D3D4A] text-white rounded-full py-6 text-base">
                <Link href={getUrl("/contact")}>
                  {language === "sr" ? "Zatražite ponudu" : "Request Quote"}
                </Link>
              </Button>

              <div className="flex items-center justify-center gap-2 mt-4 text-xs text-[#5A6B70]">
                <Shield className="w-4 h-4 text-[#40B5AD]" />
                <span>{language === "sr" ? "Puno osiguranje uključeno" : "Full insurance included"}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
