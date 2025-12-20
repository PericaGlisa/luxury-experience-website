"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, MapPin, Star, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"

const hotels = [
  {
    id: "1",
    name: "Costa Smeralda Resort",
    slug: { en: "costa-smeralda-resort", sr: "costa-smeralda-rizort" },
    location: "Porto Cervo, Sardinia",
    rating: 4.9,
    reviews: 3420,
    price: 450,
    image: "/luxury-resort-costa-smeralda-sardinia-infinity-pool.jpg",
  },
  {
    id: "2",
    name: "Skyview Retreat",
    slug: { en: "skyview-retreat", sr: "skyview-utociste" },
    location: "La Maddalena, Sardinia",
    rating: 4.8,
    reviews: 2345,
    price: 320,
    image: "/overwater-bungalows-tropical-resort-sunset-mediter.jpg",
  },
  {
    id: "3",
    name: "Villa Mediterranea",
    slug: { en: "villa-mediterranea", sr: "vila-mediteranea" },
    location: "Cala di Volpe, Sardinia",
    rating: 4.7,
    reviews: 1890,
    price: 580,
    image: "/luxury-mediterranean-villa-private-beach-sardinia.jpg",
  },
  {
    id: "4",
    name: "Emerald Bay Hotel",
    slug: { en: "emerald-bay-hotel", sr: "hotel-emerald-bay" },
    location: "Porto Rotondo, Sardinia",
    rating: 4.8,
    reviews: 2156,
    price: 395,
    image: "/boutique-hotel-turquoise-bay-sardinia-coastline.jpg",
  },
]

export function TopRatedHotels() {
  const { language, t } = useLanguage()

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
            <Link href={`/${language}/destinations`}>
              <Button
                variant="outline"
                className="rounded-full border-[#D4C9B8] text-[#1B4B5A] hover:bg-[#1B4B5A] hover:text-white px-6 bg-transparent"
              >
                {t("exploreMore")}
              </Button>
            </Link>
            <Link href={`/${language}/destinations`}>
              <button className="w-10 h-10 rounded-full bg-[#1B4B5A] flex items-center justify-center text-white hover:bg-[#0D3D4A] transition-colors">
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </Link>
          </div>
        </div>

        {/* Hotels Grid - Updated links to hotel detail pages */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {hotels.map((hotel) => (
            <Link
              key={hotel.id}
              href={`/${language}/hotels/${hotel.slug[language as "en" | "sr"]}`}
              className="block"
            >
              <div className="group relative rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-shadow cursor-pointer">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={hotel.image || "/placeholder.svg"}
                    alt={hotel.name}
                    fill
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
