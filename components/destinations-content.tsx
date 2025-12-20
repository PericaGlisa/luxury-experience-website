"use client"

import Image from "next/image"
import Link from "next/link"
import { MapPin, ArrowUpRight } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

const destinations = [
  {
    id: "1",
    slug: { en: "porto-cervo", sr: "porto-cervo" },
    name: "Porto Cervo",
    description: {
      en: "The glamorous heart of Costa Smeralda, known for luxury boutiques and celebrity sightings.",
      sr: "Glamurozno srce Costa Smeralde, poznato po luksuznim buticima i poznatim ličnostima.",
    },
    properties: 45,
    image: "/porto-cervo-luxury-marina-sardinia-yachts.jpg",
  },
  {
    id: "2",
    slug: { en: "la-maddalena", sr: "la-madalena" },
    name: "La Maddalena",
    description: {
      en: "An archipelago of pristine islands with crystal-clear waters and untouched beaches.",
      sr: "Arhipelag netaknutih ostrva sa kristalno čistim vodama i netaknutim plažama.",
    },
    properties: 28,
    image: "/la-maddalena-islands-sardinia-turquoise-water.jpg",
  },
  {
    id: "3",
    slug: { en: "cala-di-volpe", sr: "kala-di-volpe" },
    name: "Cala di Volpe",
    description: {
      en: "Home to the iconic Hotel Cala di Volpe and some of the most exclusive resorts.",
      sr: "Dom legendarnog hotela Cala di Volpe i nekih od najekskluzivnijih rizorta.",
    },
    properties: 32,
    image: "/cala-di-volpe-bay-sardinia-luxury-resort.jpg",
  },
  {
    id: "4",
    slug: { en: "porto-rotondo", sr: "porto-rotondo" },
    name: "Porto Rotondo",
    description: {
      en: "A charming village with traditional architecture and world-class golf courses.",
      sr: "Šarmantno selo sa tradicionalnom arhitekturom i golf terenima svetske klase.",
    },
    properties: 38,
    image: "/porto-rotondo-sardinia-village-marina-sunset.jpg",
  },
  {
    id: "5",
    slug: { en: "poltu-quatu", sr: "poltu-kvatu" },
    name: "Poltu Quatu",
    description: {
      en: "A hidden fjord transformed into an exclusive marina village.",
      sr: "Skriveni fjord pretvoren u ekskluzivno marinsko selo.",
    },
    properties: 22,
    image: "/poltu-quatu-sardinia-hidden-marina-luxury.jpg",
  },
  {
    id: "6",
    slug: { en: "san-pantaleo", sr: "san-pantaleo" },
    name: "San Pantaleo",
    description: {
      en: "A bohemian village nestled in the mountains with artisan markets and local charm.",
      sr: "Boemsko selo u planinama sa zanatskim pijacama i lokalnim šarmom.",
    },
    properties: 18,
    image: "/san-pantaleo-sardinia-mountain-village-authentic.jpg",
  },
]

export function DestinationsContent() {
  const { language, getUrl } = useLanguage()

  return (
    <section className="pt-36 md:pt-48 pb-16 px-5 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Hero */}
        <div className="text-center mb-16">
          <p className="text-[#C9A962] text-sm font-medium tracking-widest uppercase mb-4">
            {language === "sr" ? "Ekskluzivne destinacije" : "Exclusive Destinations"}
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-[#1B4B5A] mb-6">
            {language === "sr" ? "Otkrijte najlepše krajeve Sardinije" : "Discover Sardinia's Most Beautiful Places"}
          </h1>
          <p className="text-[#5A6B70] text-lg max-w-2xl mx-auto">
            {language === "sr"
              ? "Od glamuroznih marina Costa Smeralde do netaknutih arhipelaga, svaka destinacija nudi jedinstvenu priču i nezaboravno iskustvo."
              : "From glamorous marinas of Costa Smeralda to untouched archipelagos, each destination offers a unique story and unforgettable experience."}
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((dest) => (
            <Link key={dest.id} href={getUrl(`/destinations/${dest.slug[language as "en" | "sr"]}`)}>
              <div className="group relative h-[400px] rounded-3xl overflow-hidden cursor-pointer">
                <Image
                  src={dest.image || "/placeholder.svg"}
                  alt={dest.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1B4B5A] via-[#1B4B5A]/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-4 h-4 text-[#C9A962]" />
                    <span className="text-sm text-[#C9A962] font-medium">
                      {dest.properties} {language === "sr" ? "objekata" : "properties"}
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl mb-2 group-hover:text-[#C9A962] transition-colors">{dest.name}</h3>
                  <p className="text-sm text-white/80 mb-4 line-clamp-2">{dest.description[language as "en" | "sr"]}</p>
                  <div className="flex items-center gap-2 text-[#C9A962] text-sm font-medium group-hover:gap-3 transition-all">
                    <span>{language === "sr" ? "Istraži" : "Explore"}</span>
                    <ArrowUpRight className="w-4 h-4" />
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
