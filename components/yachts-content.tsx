"use client"

import Image from "next/image"
import Link from "next/link"
import { Anchor, Users, Ruler, Star, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"

const yachts = [
  {
    id: "1",
    slug: { en: "azzurra", sr: "azura" },
    name: "Azzurra",
    type: { en: "Motor Yacht", sr: "Motorna jahta" },
    length: "32m",
    guests: 10,
    crew: 5,
    rating: 4.9,
    pricePerDay: 8500,
    image: "/luxury-motor-yacht-mediterranean-blue-water.jpg",
  },
  {
    id: "2",
    slug: { en: "vento-di-mare", sr: "morski-vetar" },
    name: "Vento di Mare",
    type: { en: "Sailing Yacht", sr: "Jedrilica" },
    length: "24m",
    guests: 8,
    crew: 3,
    rating: 4.8,
    pricePerDay: 4200,
    image: "/luxury-sailing-yacht-sardinia-sunset-sails.jpg",
  },
  {
    id: "3",
    slug: { en: "costa-bella", sr: "lepa-obala" },
    name: "Costa Bella",
    type: { en: "Catamaran", sr: "Katamaran" },
    length: "18m",
    guests: 12,
    crew: 3,
    rating: 4.7,
    pricePerDay: 3800,
    image: "/luxury-catamaran-turquoise-water-mediterranean.jpg",
  },
  {
    id: "4",
    slug: { en: "mare-nostrum", sr: "nase-more" },
    name: "Mare Nostrum",
    type: { en: "Mega Yacht", sr: "Mega jahta" },
    length: "52m",
    guests: 14,
    crew: 12,
    rating: 5.0,
    pricePerDay: 25000,
    image: "/luxury-mega-yacht-aerial-view-mediterranean-sea.jpg",
  },
]

export function YachtsContent() {
  const { language } = useLanguage()

  return (
    <section className="pt-36 md:pt-48 pb-16 px-5 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Hero */}
        <div className="text-center mb-16">
          <p className="text-[#C9A962] text-sm font-medium tracking-widest uppercase mb-4">
            {language === "sr" ? "Čarter jahti" : "Yacht Charter"}
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-[#1B4B5A] mb-6">
            {language === "sr" ? "Privatne jahte za vaše putovanje" : "Private Yachts for Your Journey"}
          </h1>
          <p className="text-[#5A6B70] text-lg max-w-2xl mx-auto">
            {language === "sr"
              ? "Plovite smaragdnim vodama Sardinije na jahti koju naš tim brižljivo uklapa u vaš plan putovanja, sa posadom, rutama i doživljajima po meri."
              : "Sail the emerald waters of Sardinia on a yacht carefully matched to your itinerary, with crew, routes, and experiences tailored to you."}
          </p>
        </div>

        {/* Yachts Grid - Added links to detail pages */}
        <div className="grid lg:grid-cols-2 gap-8">
          {yachts.map((yacht) => (
            <Link key={yacht.id} href={`/${language}/yachts/${yacht.slug[language as "en" | "sr"]}`}>
              <div className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row cursor-pointer">
                <div className="relative w-full md:w-1/2 h-64 md:h-auto overflow-hidden">
                  <Image
                    src={yacht.image || "/placeholder.svg"}
                    alt={yacht.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex-1 p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-[#C9A962] font-medium uppercase tracking-wide">
                        {yacht.type[language as "en" | "sr"]}
                      </span>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-[#C9A962] text-[#C9A962]" />
                        <span className="text-sm font-medium text-[#1B4B5A]">{yacht.rating}</span>
                      </div>
                    </div>
                    <h3 className="font-serif text-2xl text-[#1B4B5A] mb-4 group-hover:text-[#40B5AD] transition-colors">
                      {yacht.name}
                    </h3>
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="text-center p-3 bg-[#F7F4EE] rounded-xl">
                        <Ruler className="w-4 h-4 text-[#5A6B70] mx-auto mb-1" />
                        <p className="text-xs text-[#5A6B70]">{language === "sr" ? "Dužina" : "Length"}</p>
                        <p className="text-sm font-medium text-[#1B4B5A]">{yacht.length}</p>
                      </div>
                      <div className="text-center p-3 bg-[#F7F4EE] rounded-xl">
                        <Users className="w-4 h-4 text-[#5A6B70] mx-auto mb-1" />
                        <p className="text-xs text-[#5A6B70]">{language === "sr" ? "Gosti" : "Guests"}</p>
                        <p className="text-sm font-medium text-[#1B4B5A]">{yacht.guests}</p>
                      </div>
                      <div className="text-center p-3 bg-[#F7F4EE] rounded-xl">
                        <Anchor className="w-4 h-4 text-[#5A6B70] mx-auto mb-1" />
                        <p className="text-xs text-[#5A6B70]">{language === "sr" ? "Posada" : "Crew"}</p>
                        <p className="text-sm font-medium text-[#1B4B5A]">{yacht.crew}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-end">
                    <Button className="bg-[#1B4B5A] hover:bg-[#0D3D4A] text-white rounded-full px-5">
                      {language === "sr" ? "Detalji" : "Details"}
                      <ArrowUpRight className="w-4 h-4 ml-1" />
                    </Button>
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
