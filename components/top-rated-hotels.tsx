"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, MapPin, Star, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"
import { hotels } from "@/lib/data"

export function TopRatedHotels() {
  const { language, t, getUrl } = useLanguage()

  return (
    <section className="py-16 md:py-24 px-5 md:px-10 lg:px-20 bg-[#F7F4EE]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <CheckCircle className="w-5 h-5 text-[#40B5AD]" />
              <span className="text-sm font-medium text-[#5A6B70] tracking-wide">{t("topRatedHotels")}</span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-[#1B4B5A]">{t("topRatedHotelsTitle")}</h2>
          </div>
          <div className="flex items-center gap-3">
            <Button
              asChild
              variant="outline"
              className="rounded-full border-[#D4C9B8] text-[#1B4B5A] hover:bg-[#1B4B5A] hover:text-white px-6 bg-transparent"
            >
              <Link href={getUrl("/experiences")}>
                {t("exploreMore")}
              </Link>
            </Button>
            <Button
              asChild
              size="icon"
              className="w-10 h-10 rounded-full bg-[#1B4B5A] flex items-center justify-center text-white hover:bg-[#0D3D4A] transition-colors"
            >
              <Link href={getUrl("/destinations")}>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Hotels Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {hotels.map((hotel) => (
            <Link
              key={hotel.id}
              href={getUrl(`/hotels/${hotel.slug[language as "en" | "sr"]}`)}
              className="block"
            >
              <div className="group relative rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-shadow cursor-pointer">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={hotel.images?.[0] || "/placeholder.svg"}
                    alt={hotel.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1B4B5A]/90 via-[#1B4B5A]/40 to-transparent" />

                  {/* Content on Image */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="font-serif text-lg font-medium mb-1 group-hover:text-[#C9A962] transition-colors">
                      {hotel.name}
                    </h3>
                    <div className="flex items-center">
                      <div className="flex items-center gap-1 text-sm">
                        <MapPin className="w-3.5 h-3.5 text-[#C9A962]" />
                        <span className="opacity-90">{hotel.location}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex items-center gap-1">
                        <Star className="w-3.5 h-3.5 fill-[#C9A962] text-[#C9A962]" />
                        <span className="text-sm font-medium">{hotel.rating}</span>
                      </div>
                      <span className="text-xs opacity-75">
                        • {(hotel.reviews / 1000).toFixed(1)}K {t("ratings")}
                      </span>
                      <span className="text-xs text-[#40B5AD] underline">
                        ({hotel.reviews.toLocaleString()} {t("reviews")})
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
