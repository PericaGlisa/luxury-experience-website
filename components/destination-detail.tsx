"use client"

import type React from "react"

import Image from "next/image"
import Link from "next/link"
import { MapPin, ArrowLeft, Sun, Umbrella, Utensils, ShoppingBag, Camera, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"
import { hotels } from "@/components/hotel-detail"

const destinations = [
  {
    id: "1",
    name: "Porto Cervo",
    tagline: { en: "The Heart of Costa Smeralda", sr: "Srce Costa Smeralde" },
    description: {
      en: "Porto Cervo is the glamorous capital of Costa Smeralda, founded by Prince Aga Khan in the 1960s. This exclusive resort village is renowned for its pristine marina filled with superyachts, designer boutiques lining the piazzetta, and world-class restaurants. The architecture seamlessly blends with the natural landscape, featuring traditional Sardinian stone buildings painted in warm Mediterranean hues.",
      sr: "Porto Cervo je glamurozna prestonica Costa Smeralde, koju je 1960-ih osnovao princ Aga Kan. Ovo ekskluzivno letovalište poznato je po svojoj netaknutoj marini punoj superjahti, dizajnerskim buticima duž piazzette i svetski poznatim restoranima. Arhitektura se savršeno uklapa u prirodni pejzaž, sa tradicionalnim sardinijskim kamenim zgradama ofarbanim u toplim mediteranskim tonovima.",
    },
    image: "/porto-cervo-luxury-marina-sardinia-yachts.jpg",
    gallery: [
      "/porto-cervo-luxury-marina-sardinia-yachts.jpg",
      "/luxury-yacht-sailing-mediterranean-costa-smeralda.jpg",
      "/luxury-motor-yacht-mediterranean-blue-water.jpg",
    ],
    properties: 45,
    highlights: ["marina", "shopping", "dining", "beaches"],
    bestTime: { en: "May to September", sr: "Od maja do septembra" },
    avgTemp: "28°C",
  },
  {
    id: "2",
    name: "La Maddalena",
    tagline: { en: "Archipelago Paradise", sr: "Raj arhipelaga" },
    description: {
      en: "The Maddalena Archipelago is a national park comprising seven main islands and over 60 smaller islets. The crystal-clear waters range from turquoise to deep sapphire, revealing vibrant marine life and ancient shipwrecks. Spiaggia Rosa on Budelli island features rare pink sand, while the main island offers charming streets, local restaurants, and a glimpse into authentic island life.",
      sr: "Arhipelag La Maddalena je nacionalni park koji se sastoji od sedam glavnih ostrva i preko 60 manjih ostrva. Kristalno čiste vode se kreću od tirkizne do duboko safirne, otkrivajući živahni morski život i drevne olupine brodova. Spiaggia Rosa na ostrvu Budelli ima retki ružičasti pesak, dok glavno ostrvo nudi šarmantne ulice, lokalne restorane i uvid u autentičan ostrvski život.",
    },
    image: "/la-maddalena-islands-sardinia-turquoise-water.jpg",
    gallery: [
      "/la-maddalena-islands-sardinia-turquoise-water.jpg",
      "/scuba-diving-sardinia-clear-water-marine-life.jpg",
      "/helicopter-tour-sardinia-island-aerial-view.jpg",
    ],
    properties: 28,
    highlights: ["beaches", "snorkeling", "nature", "boating"],
    bestTime: { en: "June to September", sr: "Od juna do septembra" },
    avgTemp: "27°C",
  },
  {
    id: "3",
    name: "Cala di Volpe",
    tagline: { en: "Legendary Bay", sr: "Legendarna uvala" },
    description: {
      en: "Cala di Volpe bay is home to the legendary Hotel Cala di Volpe, a masterpiece of Mediterranean architecture that has hosted royalty and celebrities for decades. The sheltered bay offers calm, crystal-clear waters perfect for swimming and water sports. The surrounding area features exclusive villas, private beaches, and some of the most photographed sunsets in Sardinia.",
      sr: "Zaliv Cala di Volpe je dom legendarnog hotela Cala di Volpe, remek-dela mediteranske arhitekture koje je decenijama ugošćavalo kraljevske porodice i poznate ličnosti. Zaštićeni zaliv nudi mirne, kristalno čiste vode savršene za plivanje i vodene sportove. Okolno područje sadrži ekskluzivne vile, privatne plaže i neke od najfotografisanijih zalazaka sunca na Sardiniji.",
    },
    image: "/cala-di-volpe-bay-sardinia-luxury-resort.jpg",
    gallery: [
      "/cala-di-volpe-bay-sardinia-luxury-resort.jpg",
      "/luxury-mediterranean-villa-private-beach-sardinia.jpg",
      "/luxury-resort-costa-smeralda-sardinia-infinity-pool.jpg",
    ],
    properties: 32,
    highlights: ["luxury", "beaches", "dining", "sunsets"],
    bestTime: { en: "May to October", sr: "Od maja do oktobra" },
    avgTemp: "26°C",
  },
  {
    id: "4",
    name: "Porto Rotondo",
    tagline: { en: "Authentic Elegance", sr: "Autentična elegancija" },
    description: {
      en: "Porto Rotondo offers a more intimate alternative to its famous neighbor Porto Cervo. This charming village features distinctive architecture with painted piazzas, artisan galleries, and a picturesque marina. The area is known for its excellent golf courses at Pevero Golf Club and beautiful beaches like Spiaggia Ira, where turquoise waters meet golden sand.",
      sr: "Porto Rotondo nudi intimniju alternativu svom poznatom susedi Porto Cervu. Ovo šarmantno selo ima prepoznatljivu arhitekturu sa oslikanim trgovima, zanatskim galerijama i slikovitom marinom. Područje je poznato po odličnim golf terenima u Pevero Golf Clubu i prelepim plažama poput Spiaggia Ira, gde se tirkizne vode susreću sa zlatnim peskom.",
    },
    image: "/porto-rotondo-sardinia-village-marina-sunset.jpg",
    gallery: [
      "/porto-rotondo-sardinia-village-marina-sunset.jpg",
      "/luxury-golf-course-sardinia-mediterranean-spa.jpg",
      "/boutique-hotel-turquoise-bay-sardinia-coastline.jpg",
    ],
    properties: 38,
    highlights: ["golf", "beaches", "art", "marina"],
    bestTime: { en: "April to October", sr: "Od aprila do oktobra" },
    avgTemp: "25°C",
  },
  {
    id: "5",
    name: "Poltu Quatu",
    tagline: { en: "The Hidden Fjord", sr: "Skriveni fjord" },
    description: {
      en: "Poltu Quatu, meaning 'hidden port' in the local dialect, is a stunning natural inlet that has been transformed into an exclusive marina village. Steep granite cliffs embrace a narrow fjord where luxury yachts moor against a backdrop of Mediterranean vegetation. The village offers upscale boutiques, waterfront dining, and a unique atmosphere unlike anywhere else in Sardinia.",
      sr: "Poltu Quatu, što na lokalnom dijalektu znači 'skrivena luka', je zadivljujući prirodni zaliv koji je pretvoren u ekskluzivno marinsko selo. Strme granitne litice obuhvataju uski fjord gde luksuzne jahte pristaju uz pozadinu mediteranske vegetacije. Selo nudi ekskluzivne butike, obroke uz vodu i jedinstvenu atmosferu kakva ne postoji nigde drugde na Sardiniji.",
    },
    image: "/poltu-quatu-sardinia-hidden-marina-luxury.jpg",
    gallery: [
      "/poltu-quatu-sardinia-hidden-marina-luxury.jpg",
      "/luxury-mega-yacht-aerial-view-mediterranean-sea.jpg",
      "/luxury-catamaran-turquoise-water-mediterranean.jpg",
    ],
    properties: 22,
    highlights: ["marina", "dining", "nature", "exclusive"],
    bestTime: { en: "May to September", sr: "Od maja do septembra" },
    avgTemp: "27°C",
  },
  {
    id: "6",
    name: "San Pantaleo",
    tagline: { en: "Bohemian Mountain Village", sr: "Boemsko planinsko selo" },
    description: {
      en: "Nestled in the dramatic granite mountains just 15 minutes from the coast, San Pantaleo offers a refreshing contrast to the seaside glamour. This bohemian village is famous for its Thursday morning market where artisans sell handcrafted jewelry, ceramics, and local delicacies. Winding streets lead to hidden squares, rustic trattorias, and galleries showcasing contemporary Sardinian art.",
      sr: "Smešteno u dramatičnim granitnim planinama samo 15 minuta od obale, San Pantaleo nudi osvežavajući kontrast primorskom glamuru. Ovo boemsko selo poznato je po četvrtačkoj jutarnjoj pijaci gde zanatlije prodaju ručno izrađen nakit, keramiku i lokalne specijalitete. Vijugave ulice vode do skrivenih trgova, rustičnih tratoria i galerija koje izlažu savremenu sardinijsku umetnost.",
    },
    image: "/san-pantaleo-sardinia-mountain-village-authentic.jpg",
    gallery: [
      "/san-pantaleo-sardinia-mountain-village-authentic.jpg",
      "/luxury-sardinian-villa-with-pool-overlooking-medit.jpg",
      "/luxury-mediterranean-villa-private-beach-sardinia.jpg",
    ],
    properties: 18,
    highlights: ["market", "art", "dining", "nature"],
    bestTime: { en: "April to October", sr: "Od aprila do oktobra" },
    avgTemp: "24°C",
  },
]

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

const highlightNames: Record<string, { en: string; sr: string }> = {
  marina: { en: "Luxury Marina", sr: "Luksuzna marina" },
  shopping: { en: "Designer Boutiques", sr: "Dizajnerski butici" },
  dining: { en: "Fine Dining", sr: "Vrhunska kuhinja" },
  beaches: { en: "Pristine Beaches", sr: "Netaknute plaže" },
  nature: { en: "Natural Beauty", sr: "Prirodne lepote" },
  snorkeling: { en: "Snorkeling", sr: "Snorkeling" },
  boating: { en: "Boat Tours", sr: "Ture brodom" },
  luxury: { en: "Luxury Hotels", sr: "Luksuzni hoteli" },
  sunsets: { en: "Stunning Sunsets", sr: "Prekrasni zalasci" },
  golf: { en: "Golf Courses", sr: "Golf tereni" },
  art: { en: "Art & Culture", sr: "Umetnost i kultura" },
  exclusive: { en: "Exclusive Access", sr: "Ekskluzivan pristup" },
  market: { en: "Artisan Market", sr: "Zanatska pijaca" },
}

export function DestinationDetail({ id }: { id: string }) {
  const { language } = useLanguage()
  const destination = destinations.find((d) => d.id === id)

  if (!destination) {
    return null
  }

  const destinationHotels = hotels.filter((hotel) => hotel.location.includes(destination.name))

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
            <p className="text-xl text-white/90">{destination.tagline[language as "en" | "sr"]}</p>
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
              {destination.gallery.map((img, idx) => (
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
              {destination.highlights.map((highlight) => (
                <div key={highlight} className="flex flex-col items-center text-center p-4 bg-[#F7F4EE] rounded-xl">
                  <div className="text-[#C9A962] mb-2">{highlightIcons[highlight]}</div>
                  <span className="text-sm text-[#1B4B5A]">
                    {highlightNames[highlight]?.[language as "en" | "sr"] || highlight}
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
                    <Link key={hotel.id} href={`/hotels/${hotel.id}`}>
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
                            <div className="flex items-center justify-between text-xs">
                              <div className="flex items-center gap-1">
                                <MapPin className="w-3 h-3 text-[#C9A962]" />
                                <span className="opacity-90">{hotel.location}</span>
                              </div>
                              <div className="text-right">
                                <span className="text-sm font-semibold text-[#C9A962]">${hotel.price}</span>
                                <span className="text-[10px] opacity-75">
                                  /{language === "sr" ? "noć" : "night"}
                                </span>
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
                  <span className="text-[#1B4B5A] font-medium">{destination.bestTime[language as "en" | "sr"]}</span>
                </div>
                <div className="flex items-center justify-between py-3">
                  <span className="text-[#5A6B70]">{language === "sr" ? "Prosečna temp." : "Avg. Temp"}</span>
                  <span className="text-[#1B4B5A] font-medium">{destination.avgTemp}</span>
                </div>
              </div>

              <Link href="/contact" className="block">
                <Button className="w-full bg-[#1B4B5A] hover:bg-[#0D3D4A] text-white rounded-full py-6 text-base">
                  {language === "sr" ? "Planirajte putovanje" : "Plan Your Trip"}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
