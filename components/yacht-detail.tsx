"use client"

import Image from "next/image"
import Link from "next/link"
import { Anchor, Users, Ruler, Star, ArrowLeft, Compass, Shield, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"

const yachts = [
  {
    id: "1",
    name: "Azzurra",
    type: "Motor Yacht",
    length: "32m",
    guests: 10,
    crew: 5,
    rating: 4.9,
    pricePerDay: 8500,
    speed: "22 knots",
    range: "2000nm",
    built: 2021,
    builder: "Benetti",
    description: {
      en: "Azzurra is a masterpiece of Italian craftsmanship, offering the perfect blend of performance and luxury. With her sleek lines and spacious decks, she's ideal for exploring the hidden coves of Sardinia. The interior features five luxuriously appointed cabins, a gourmet galley, and expansive entertaining spaces.",
      sr: "Azzurra je remek-delo italijanske zanatske veštine, nudeći savršenu mešavinu performansi i luksuza. Sa svojim elegantnim linijama i prostranim palubama, idealna je za istraživanje skrivenih uvala Sardinije. Enterijer sadrži pet luksuzno opremljenih kabina, gurmansku kuhinju i prostrane prostore za zabavu.",
    },
    images: [
      "/luxury-motor-yacht-mediterranean-blue-water.jpg",
      "/luxury-yacht-sailing-mediterranean-costa-smeralda.jpg",
      "/luxury-mega-yacht-aerial-view-mediterranean-sea.jpg",
    ],
    features: ["jacuzzi", "jetski", "diving", "tender"],
  },
  {
    id: "2",
    name: "Vento di Mare",
    type: "Sailing Yacht",
    length: "24m",
    guests: 8,
    crew: 3,
    rating: 4.8,
    pricePerDay: 4200,
    speed: "12 knots",
    range: "Unlimited",
    built: 2019,
    builder: "Oyster",
    description: {
      en: "Vento di Mare embodies the romance of traditional sailing with modern luxury. Her classic lines and teak decks evoke the golden age of yachting, while state-of-the-art navigation and comfort systems ensure a seamless voyage. Perfect for those who appreciate the art of sailing.",
      sr: "Vento di Mare oličava romantiku tradicionalnog jedrenja sa modernim luksuzom. Njene klasične linije i tikove palube prizivaju zlatno doba jahting, dok najsavremeniji navigacioni i sistemi udobnosti osiguravaju besprekorno putovanje. Savršena za one koji cene umetnost jedrenja.",
    },
    images: [
      "/luxury-sailing-yacht-sardinia-sunset-sails.jpg",
      "/luxury-motor-yacht-mediterranean-blue-water.jpg",
      "/luxury-yacht-sailing-mediterranean-costa-smeralda.jpg",
    ],
    features: ["tender", "snorkeling", "kayaks"],
  },
  {
    id: "3",
    name: "Costa Bella",
    type: "Catamaran",
    length: "18m",
    guests: 12,
    crew: 3,
    rating: 4.7,
    pricePerDay: 3800,
    speed: "10 knots",
    range: "1500nm",
    built: 2022,
    builder: "Lagoon",
    description: {
      en: "Costa Bella offers exceptional stability and space, making her the ideal choice for family adventures or group getaways. Her twin hulls provide smooth sailing and generous living areas, while the expansive flybridge is perfect for sunset cocktails overlooking the Costa Smeralda.",
      sr: "Costa Bella nudi izuzetnu stabilnost i prostor, što je čini idealnim izborom za porodične avanture ili grupna putovanja. Njeni dvostruki trupovi pružaju glatko plovidbu i prostrane dnevne prostore, dok je prošireni flybridge savršen za koktele uz zalazak sunca sa pogledom na Costa Smeraldu.",
    },
    images: [
      "/luxury-catamaran-turquoise-water-mediterranean.jpg",
      "/luxury-sailing-yacht-sardinia-sunset-sails.jpg",
      "/luxury-mega-yacht-aerial-view-mediterranean-sea.jpg",
    ],
    features: ["jacuzzi", "paddleboards", "snorkeling", "kayaks"],
  },
  {
    id: "4",
    name: "Mare Nostrum",
    type: "Mega Yacht",
    length: "52m",
    guests: 14,
    crew: 12,
    rating: 5.0,
    pricePerDay: 25000,
    speed: "18 knots",
    range: "4000nm",
    built: 2023,
    builder: "Lürssen",
    description: {
      en: "Mare Nostrum represents the ultimate in seafaring luxury. This magnificent superyacht features seven stunning suites, a spa with massage room, cinema, and a beach club that transforms into a private marina. With a crew of 12 dedicated to your every need, prepare for an unparalleled Mediterranean experience.",
      sr: "Mare Nostrum predstavlja krajnji luksuz na moru. Ova veličanstvena superjahta ima sedam prekrasnih apartmana, spa sa prostorijom za masažu, bioskop i plažni klub koji se transformiše u privatnu marinu. Sa posadom od 12 članova posvećenih svakoj vašoj potrebi, pripremite se za nenadmašno mediteransko iskustvo.",
    },
    images: [
      "/luxury-mega-yacht-aerial-view-mediterranean-sea.jpg",
      "/luxury-sailing-yacht-sardinia-sunset-sails.jpg",
      "/luxury-catamaran-turquoise-water-mediterranean.jpg",
    ],
    features: ["jacuzzi", "jetski", "diving", "tender", "spa", "cinema", "gym"],
  },
]

const featureNames: Record<string, { en: string; sr: string }> = {
  jacuzzi: { en: "Jacuzzi on deck", sr: "Džakuzi na palubi" },
  jetski: { en: "Jet Skis", sr: "Jet ski" },
  diving: { en: "Diving equipment", sr: "Oprema za ronjenje" },
  tender: { en: "Tender boat", sr: "Pomoćni čamac" },
  snorkeling: { en: "Snorkeling gear", sr: "Oprema za snorkeling" },
  kayaks: { en: "Kayaks", sr: "Kajaci" },
  paddleboards: { en: "Paddleboards", sr: "SUP daske" },
  spa: { en: "Spa & Wellness", sr: "Spa i velnes" },
  cinema: { en: "Private Cinema", sr: "Privatni bioskop" },
  gym: { en: "Fitness Center", sr: "Fitnes centar" },
}

export function YachtDetail({ id }: { id: string }) {
  const { language } = useLanguage()
  const yacht = yachts.find((y) => y.id === id)

  if (!yacht) {
    return null
  }

  return (
    <section className="pt-36 md:pt-48 pb-16 px-5 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <Link
          href="/yachts"
          className="inline-flex items-center gap-2 text-[#5A6B70] hover:text-[#1B4B5A] mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{language === "sr" ? "Nazad na flotu" : "Back to fleet"}</span>
        </Link>

        {/* Image Gallery */}
        <div className="grid lg:grid-cols-2 gap-4 mb-10">
          <div className="relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden">
            <Image src={yacht.images[0] || "/placeholder.svg"} alt={yacht.name} fill className="object-cover" />
            <div className="absolute top-4 left-4 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full">
              <span className="text-sm font-medium text-[#1B4B5A]">{yacht.type}</span>
            </div>
          </div>
          <div className="grid grid-rows-2 gap-4">
            <div className="relative h-[190px] lg:h-[240px] rounded-2xl overflow-hidden">
              <Image
                src={yacht.images[1] || "/placeholder.svg?height=300&width=500&query=yacht interior luxury salon"}
                alt={`${yacht.name} interior`}
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-[190px] lg:h-[240px] rounded-2xl overflow-hidden">
              <Image
                src={yacht.images[2] || "/placeholder.svg?height=300&width=500&query=yacht deck sunset cruise"}
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

            <p className="text-[#5A6B70] text-lg leading-relaxed mb-8">{yacht.description[language as "en" | "sr"]}</p>

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
              {yacht.features.map((feature) => (
                <span key={feature} className="px-4 py-2 bg-[#1B4B5A] text-white text-sm rounded-full">
                  {featureNames[feature]?.[language as "en" | "sr"] || feature}
                </span>
              ))}
            </div>
          </div>

          {/* Booking Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 bg-white rounded-3xl p-6 shadow-lg border border-[#E8E4DC]">
              <div className="text-center mb-6">
                <p className="text-sm text-[#5A6B70] mb-1">{language === "sr" ? "Od" : "From"}</p>
                <p className="font-serif text-3xl text-[#1B4B5A]">
                  <span className="text-[#C9A962]">${yacht.pricePerDay.toLocaleString()}</span>
                  <span className="text-base font-normal text-[#5A6B70]">/{language === "sr" ? "dan" : "day"}</span>
                </p>
              </div>

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

              <Link href="/contact" className="block">
                <Button className="w-full bg-[#1B4B5A] hover:bg-[#0D3D4A] text-white rounded-full py-6 text-base">
                  {language === "sr" ? "Zatražite ponudu" : "Request Quote"}
                </Button>
              </Link>

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
