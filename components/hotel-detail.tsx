"use client"

import type React from "react"

import Image from "next/image"
import Link from "next/link"
import {
  MapPin,
  Star,
  Wifi,
  Car,
  UtensilsCrossed,
  Waves,
  Dumbbell,
  Wine,
  ArrowLeft,
  Calendar,
  Users,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"
import { hotels, hotelAmenityNames } from "@/lib/data"
import { notFound } from "next/navigation"

const amenityIcons: Record<string, React.ReactNode> = {
  wifi: <Wifi className="w-5 h-5" />,
  parking: <Car className="w-5 h-5" />,
  restaurant: <UtensilsCrossed className="w-5 h-5" />,
  pool: <Waves className="w-5 h-5" />,
  gym: <Dumbbell className="w-5 h-5" />,
  bar: <Wine className="w-5 h-5" />,
}

export function HotelDetail({ id }: { id: string }) {
  const { language, getUrl } = useLanguage()
  const hotel = hotels.find((h) => h.id === id || h.slug.en === id || h.slug.sr === id)
  
  if (!hotel) {
    notFound()
  }

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

        {/* Image Gallery */}
        <div className="grid lg:grid-cols-2 gap-4 mb-10">
          <div className="relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden">
            <Image src={hotel.images[0] || "/placeholder.svg"} alt={hotel.name} fill className="object-cover" />
          </div>
          <div className="grid grid-rows-2 gap-4">
            <div className="relative h-[190px] lg:h-[240px] rounded-2xl overflow-hidden">
              <Image
                src={hotel.images[1] || "/placeholder.svg?height=300&width=500&query=luxury hotel suite ocean view"}
                alt={`${hotel.name} interior`}
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-[190px] lg:h-[240px] rounded-2xl overflow-hidden">
              <Image
                src={hotel.images[2] || "/placeholder.svg?height=300&width=500&query=luxury hotel restaurant terrace"}
                alt={`${hotel.name} dining`}
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
            <div className="flex items-center gap-2 mb-3">
              <MapPin className="w-4 h-4 text-[#C9A962]" />
              <span className="text-[#5A6B70]">{hotel.location}</span>
            </div>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#1B4B5A] mb-4">{hotel.name}</h1>

            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-1">
                <Star className="w-5 h-5 fill-[#C9A962] text-[#C9A962]" />
                <span className="font-medium text-[#1B4B5A]">{hotel.rating}</span>
              </div>
              <span className="text-[#5A6B70]">
                ({hotel.reviews.toLocaleString()} {language === "sr" ? "recenzija" : "reviews"})
              </span>
            </div>

            <p className="text-[#5A6B70] text-lg leading-relaxed mb-8">{hotel.description[language as "en" | "sr"]}</p>

            {/* Amenities */}
            <h3 className="font-serif text-xl text-[#1B4B5A] mb-4">{language === "sr" ? "Pogodnosti" : "Amenities"}</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              {hotel.amenities?.map((amenity) => (
                <div key={amenity} className="flex items-center gap-3 p-4 bg-[#F7F4EE] rounded-xl">
                  <div className="text-[#C9A962]">{amenityIcons[amenity]}</div>
                  <span className="text-[#1B4B5A] text-sm">
                    {hotelAmenityNames[amenity]?.[language as "en" | "sr"] || amenity}
                  </span>
                </div>
              ))}
            </div>

            {/* Details */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-[#F7F4EE] rounded-xl">
                <p className="text-xs text-[#5A6B70] mb-1">{language === "sr" ? "Sobe" : "Rooms"}</p>
                <p className="font-medium text-[#1B4B5A]">{hotel.rooms}</p>
              </div>
              <div className="text-center p-4 bg-[#F7F4EE] rounded-xl">
                <p className="text-xs text-[#5A6B70] mb-1">Check-in</p>
                <p className="font-medium text-[#1B4B5A]">{hotel.checkIn}</p>
              </div>
              <div className="text-center p-4 bg-[#F7F4EE] rounded-xl">
                <p className="text-xs text-[#5A6B70] mb-1">Check-out</p>
                <p className="font-medium text-[#1B4B5A]">{hotel.checkOut}</p>
              </div>
            </div>
          </div>

          {/* Booking Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 bg-white rounded-3xl p-6 shadow-lg border border-[#E8E4DC]">
              <div className="mb-6">
                <p className="text-sm text-[#5A6B70] text-center">
                  {language === "sr"
                    ? "Sve detalje o datumima, broju gostiju i posebnim zahtevima dogovaramo kroz kontakt formu, u okviru vašeg personalizovanog plana putovanja na Sardiniju."
                    : "We arrange all details such as dates, number of guests and special requests through the contact form, as part of your personalised trip plan to Sardinia."}
                </p>
              </div>

              <Button asChild className="w-full bg-[#1B4B5A] hover:bg-[#0D3D4A] text-white rounded-full py-6 text-base">
                <Link href={getUrl("/contact")}>
                  {language === "sr" ? "Rezervišite odmah" : "Book Now"}
                </Link>
              </Button>

              <p className="text-center text-xs text-[#5A6B70] mt-4">
                {language === "sr" ? "Besplatno otkazivanje do 24h pre" : "Free cancellation up to 24h before"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
