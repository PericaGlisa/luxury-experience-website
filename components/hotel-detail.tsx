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

export const hotels = [
  {
    id: "1",
    name: "Costa Smeralda Resort",
    location: "Porto Cervo, Sardinia",
    rating: 4.9,
    reviews: 3420,
    price: 450,
    description: {
      en: "Experience the pinnacle of Mediterranean luxury at Costa Smeralda Resort. Nestled along the pristine coastline of Porto Cervo, this five-star sanctuary offers breathtaking views of the Tyrrhenian Sea, world-class amenities, and unparalleled service. Each suite is meticulously designed to blend contemporary elegance with traditional Sardinian charm.",
      sr: "Doživite vrhunac mediteranskog luksuza u Costa Smeralda Resortu. Smešten duž netaknute obale Porto Cerva, ovo petzvezdično utočište nudi prelepe poglede na Tirensko more, svetske pogodnosti i nenadmašnu uslugu. Svaki apartman je pažljivo dizajniran da spoji savremenu eleganciju sa tradicionalnim sardinijskim šarmom.",
    },
    images: [
      "/luxury-resort-costa-smeralda-sardinia-infinity-pool.jpg",
      "/luxury-mediterranean-villa-private-beach-sardinia.jpg",
      "/luxury-sardinian-villa-with-pool-overlooking-medit.jpg",
    ],
    amenities: ["wifi", "parking", "restaurant", "pool", "gym", "bar"],
    rooms: 120,
    checkIn: "15:00",
    checkOut: "11:00",
  },
  {
    id: "2",
    name: "Skyview Retreat",
    location: "La Maddalena, Sardinia",
    rating: 4.8,
    reviews: 2345,
    price: 320,
    description: {
      en: "Escape to Skyview Retreat, where overwater bungalows meet the crystal-clear waters of La Maddalena archipelago. This exclusive retreat offers a unique blend of Polynesian-inspired architecture and Mediterranean hospitality. Wake up to panoramic ocean views and fall asleep to the gentle sound of waves.",
      sr: "Pobeznite u Skyview Retreat, gde se bungalovi nad vodom susreću sa kristalno čistim vodama arhipelaga La Maddalena. Ovo ekskluzivno utočište nudi jedinstvenu mešavinu polinezijski inspirisane arhitekture i mediteranskog gostoprimstva. Probudite se uz panoramske poglede na okean i zaspite uz nežni zvuk talasa.",
    },
    images: [
      "/overwater-bungalows-tropical-resort-sunset-mediter.jpg",
      "/luxury-resort-costa-smeralda-sardinia-infinity-pool.jpg",
      "/luxury-mediterranean-villa-private-beach-sardinia.jpg",
    ],
    amenities: ["wifi", "restaurant", "pool", "bar"],
    rooms: 45,
    checkIn: "14:00",
    checkOut: "12:00",
  },
  {
    id: "3",
    name: "Villa Mediterranea",
    location: "Cala di Volpe, Sardinia",
    rating: 4.7,
    reviews: 1890,
    price: 580,
    description: {
      en: "Villa Mediterranea represents the essence of private luxury living on the Costa Smeralda. This exclusive villa hotel offers just 24 suites, each with private terraces overlooking the legendary Cala di Volpe bay. Enjoy personalized butler service, a private beach club, and gourmet dining under the stars.",
      sr: "Villa Mediterranea predstavlja suštinu privatnog luksuznog života na Costa Smeraldi. Ovaj ekskluzivni hotel sa vilama nudi samo 24 apartmana, svaki sa privatnim terasama sa pogledom na legendarni zaliv Cala di Volpe. Uživajte u personalizovanoj batler usluzi, privatnom plažnom klubu i gurmanskom obroku pod zvezdama.",
    },
    images: [
      "/luxury-mediterranean-villa-private-beach-sardinia.jpg",
      "/luxury-sardinian-villa-with-pool-overlooking-medit.jpg",
      "/boutique-hotel-turquoise-bay-sardinia-coastline.jpg",
    ],
    amenities: ["wifi", "parking", "restaurant", "pool", "gym", "bar"],
    rooms: 24,
    checkIn: "15:00",
    checkOut: "11:00",
  },
  {
    id: "4",
    name: "Emerald Bay Hotel",
    location: "Porto Rotondo, Sardinia",
    rating: 4.8,
    reviews: 2156,
    price: 395,
    description: {
      en: "Emerald Bay Hotel is a boutique gem tucked away in the charming village of Porto Rotondo. With its distinctive architecture inspired by local traditions and stunning views of the emerald bay, this hotel offers an intimate atmosphere for discerning travelers seeking authentic Sardinian luxury.",
      sr: "Emerald Bay Hotel je butik dragulj skriven u šarmantnom selu Porto Rotondo. Sa svojom prepoznatljivom arhitekturom inspirisanom lokalnim tradicijama i zadivljujućim pogledom na smaragdni zaliv, ovaj hotel nudi intimnu atmosferu za zahtevne putnike koji traže autentičan sardinijski luksuz.",
    },
    images: [
      "/boutique-hotel-turquoise-bay-sardinia-coastline.jpg",
      "/porto-rotondo-sardinia-village-marina-sunset.jpg",
      "/luxury-golf-course-sardinia-mediterranean-spa.jpg",
    ],
    amenities: ["wifi", "parking", "restaurant", "pool", "gym", "bar"],
    rooms: 68,
    checkIn: "14:00",
    checkOut: "11:00",
  },
]

const amenityIcons: Record<string, React.ReactNode> = {
  wifi: <Wifi className="w-5 h-5" />,
  parking: <Car className="w-5 h-5" />,
  restaurant: <UtensilsCrossed className="w-5 h-5" />,
  pool: <Waves className="w-5 h-5" />,
  gym: <Dumbbell className="w-5 h-5" />,
  bar: <Wine className="w-5 h-5" />,
}

const amenityNames: Record<string, { en: string; sr: string }> = {
  wifi: { en: "Free WiFi", sr: "Besplatan WiFi" },
  parking: { en: "Parking", sr: "Parking" },
  restaurant: { en: "Restaurant", sr: "Restoran" },
  pool: { en: "Pool", sr: "Bazen" },
  gym: { en: "Fitness Center", sr: "Fitnes centar" },
  bar: { en: "Bar & Lounge", sr: "Bar i salon" },
}

export function HotelDetail({ id }: { id: string }) {
  const { language } = useLanguage()
  const hotel = hotels.find((h) => h.id === id)

  if (!hotel) {
    return null
  }

  return (
    <section className="pt-36 md:pt-48 pb-16 px-5 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <Link
          href="/destinations"
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
              {hotel.amenities.map((amenity) => (
                <div key={amenity} className="flex items-center gap-3 p-4 bg-[#F7F4EE] rounded-xl">
                  <div className="text-[#C9A962]">{amenityIcons[amenity]}</div>
                  <span className="text-[#1B4B5A] text-sm">{amenityNames[amenity][language as "en" | "sr"]}</span>
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
              <div className="text-center mb-6">
                <p className="text-sm text-[#5A6B70] mb-1">{language === "sr" ? "Od" : "From"}</p>
                <p className="font-serif text-3xl text-[#1B4B5A]">
                  <span className="text-[#C9A962]">${hotel.price}</span>
                  <span className="text-base font-normal text-[#5A6B70]">/{language === "sr" ? "noć" : "night"}</span>
                </p>
              </div>

              <div className="mb-6">
                <p className="text-sm text-[#5A6B70] text-center">
                  {language === "sr"
                    ? "Sve detalje o datumima, broju gostiju i posebnim zahtevima dogovaramo kroz kontakt formu, u okviru vašeg personalizovanog plana putovanja na Sardiniju."
                    : "We arrange all details such as dates, number of guests and special requests through the contact form, as part of your personalised trip plan to Sardinia."}
                </p>
              </div>

              <Link href="/contact" className="block">
                <Button className="w-full bg-[#1B4B5A] hover:bg-[#0D3D4A] text-white rounded-full py-6 text-base">
                  {language === "sr" ? "Planirajte putovanje" : "Plan Your Trip"}
                </Button>
              </Link>

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
