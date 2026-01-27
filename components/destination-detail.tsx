"use client"

import type React from "react"

import Image from "next/image"
import Link from "next/link"
import { MapPin, ArrowLeft, Sun, Umbrella, Utensils, ShoppingBag, Camera, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"
import { destinations, destinationHighlightNames, hotels } from "@/lib/data"
import { notFound } from "next/navigation"

const highlightIcons: Record<string, React.ReactNode> = {
  marina: <Umbrella className="w-5 h-5" />,
  shopping: <ShoppingBag className="w-5 h-5" />,
  dining: <Utensils className="w-5 h-5" />,
  beaches: <Sun className="w-5 h-5" />,
  nature: <Camera className="w-5 h-5" />,
  snorkeling: <Camera className="w-5 h-5" />,
  boating: <Umbrella className="w-5 h-5" />,
  luxury: <Star className="w-5 h-5" />,
  sunsets: <Sun className="w-5 h-5" />,
  golf: <Camera className="w-5 h-5" />,
  art: <Camera className="w-5 h-5" />,
  exclusive: <Star className="w-5 h-5" />,
  market: <ShoppingBag className="w-5 h-5" />,
}

export function DestinationDetail({ id }: { id: string }) {
  const { language, getUrl } = useLanguage()
  const destination = destinations.find((d) => d.id === id || d.slug.en === id || d.slug.sr === id)
  
  if (!destination) {
    notFound()
  }

  const destinationHotels = hotels.filter((hotel) => hotel.location.includes(destination.name))

  return (
    <section className="pt-36 md:pt-48 pb-16 px-5 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <Link
          href={getUrl("/destinations")}
          className="inline-flex items-center gap-2 text-[#5A6B70] hover:text-[#1B4B5A] mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{language === "sr" ? "Nazad na destinacije" : "Back to destinations"}</span>
        </Link>

        {/* Hero Image */}
        <div className="relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden mb-10">
          <Image src={destination.image || "/placeholder.svg"} alt={destination.name} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1B4B5A]/80 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <div className="flex items-center gap-2 mb-2">
              <MapPin className="w-4 h-4 text-[#C9A962]" />
              <span className="text-[#C9A962]">Sardinia, Italy</span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-2">{destination.name}</h1>
            <p className="text-xl text-white/90">{destination.tagline?.[language as "en" | "sr"] || ""}</p>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <p className="text-[#5A6B70] text-lg leading-relaxed mb-8">
              {destination.description[language as "en" | "sr"]}
            </p>

            {/* Gallery */}
            <h3 className="font-serif text-xl text-[#1B4B5A] mb-4">{language === "sr" ? "Galerija" : "Gallery"}</h3>
            <div className="grid grid-cols-3 gap-4 mb-8">
              {destination.gallery?.map((img, idx) => (
                <div key={idx} className="relative h-32 md:h-48 rounded-xl overflow-hidden">
                  <Image
                    src={img || `/placeholder.svg?height=200&width=300&query=${destination.name} sardinia ${idx}`}
                    alt={`${destination.name} ${idx + 1}`}
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>

            {/* Highlights */}
            <h3 className="font-serif text-xl text-[#1B4B5A] mb-4">{language === "sr" ? "Istaknuto" : "Highlights"}</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {destination.highlights?.map((highlight) => (
                <div key={highlight} className="flex flex-col items-center text-center p-4 bg-[#F7F4EE] rounded-xl">
                  <div className="text-[#C9A962] mb-2">{highlightIcons[highlight]}</div>
                  <span className="text-sm text-[#1B4B5A]">
                    {destinationHighlightNames[highlight]?.[language as "en" | "sr"] || highlight}
                  </span>
                </div>
              ))}
            </div>

            {destinationHotels.length > 0 && (
              <div className="mt-10">
                <h3 className="font-serif text-xl text-[#1B4B5A] mb-4">
                  {language === "sr" ? "Najbolje ocenjeni hoteli u ovoj destinaciji" : "Top-Rated Hotels in This Destination"}
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {destinationHotels.map((hotel) => (
                    <Link key={hotel.id} href={getUrl("/hotels/" + hotel.slug[language as "en" | "sr"])}>
                      <div className="group relative rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-shadow cursor-pointer">
                        <div className="relative h-40 overflow-hidden">
                          <Image
                            src={hotel.images[0] || "/placeholder.svg"}
                            alt={hotel.name}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#1B4B5A]/80 via-[#1B4B5A]/30 to-transparent" />
                          <div className="absolute bottom-0 left-0 right-0 p-3 text-white">
                            <h4 className="font-serif text-base font-medium mb-1 group-hover:text-[#C9A962] transition-colors">
                              {hotel.name}
                            </h4>
                            <div className="flex items-center text-xs">
                              <div className="flex items-center gap-1">
                                <MapPin className="w-3 h-3 text-[#C9A962]" />
                                <span className="opacity-90">{hotel.location}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 bg-white rounded-3xl p-6 shadow-lg border border-[#E8E4DC]">
              <h3 className="font-serif text-xl text-[#1B4B5A] mb-6 text-center">
                {language === "sr" ? "Informacije" : "Information"}
              </h3>

              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between py-3 border-b border-[#E8E4DC]">
                  <span className="text-[#5A6B70]">{language === "sr" ? "Objekti" : "Properties"}</span>
                  <span className="text-[#1B4B5A] font-medium">{destination.properties}</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-[#E8E4DC]">
                  <span className="text-[#5A6B70]">{language === "sr" ? "Najbolje vreme" : "Best Time"}</span>
                  <span className="text-[#1B4B5A] font-medium">{destination.bestTime?.[language as "en" | "sr"] || ""}</span>
                </div>
                <div className="flex items-center justify-between py-3">
                  <span className="text-[#5A6B70]">{language === "sr" ? "Prosečna temp." : "Avg. Temp"}</span>
                  <span className="text-[#1B4B5A] font-medium">{destination.avgTemp}</span>
                </div>
              </div>

              <Button asChild className="w-full bg-[#1B4B5A] hover:bg-[#0D3D4A] text-white rounded-full py-6 text-base">
                <Link href={getUrl("/contact")}>
                  {language === "sr" ? "Isplanirajte putovanje" : "Plan Your Trip"}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
