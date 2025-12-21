"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Clock, Users, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"

import { experiences } from "@/lib/data"

export function ExperiencesContent() {
  const { language, getUrl } = useLanguage()

  return (
    <section className="pt-36 md:pt-48 pb-16 px-5 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Hero */}
        <div className="text-center mb-16">
          <p className="text-[#C9A962] text-sm font-medium tracking-widest uppercase mb-4">
            {language === "sr" ? "Ekskluzivna iskustva" : "Exclusive Experiences"}
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-[#1B4B5A] mb-6">
            {language === "sr" ? "Iskustva koja grade vašu priču na Sardiniji" : "Experiences That Shape Your Story in Sardinia"}
          </h1>
          <p className="text-[#5A6B70] text-lg max-w-2xl mx-auto">
            {language === "sr"
              ? "Otkrijte pažljivo kreirana iskustva, od privatnih krstarenja do vinskih tura, koja vaš boravak na Sardiniji pretvaraju u ličnu priču."
              : "Discover carefully curated experiences, from private cruises to wine tours, that turn your stay in Sardinia into a personal story."}
          </p>
        </div>

        {/* Experiences Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((exp) => (
            <Link
              key={exp.id}
              href={getUrl(`/experiences/${exp.slug[language as "en" | "sr"]}`)}
              className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 block"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={exp.image || "/placeholder.svg"}
                  alt={exp.title[language as "en" | "sr"]}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-xs text-[#5A6B70] mb-3">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> {exp.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="w-3.5 h-3.5" /> {exp.guests}
                  </span>
                  <span className="flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 fill-[#C9A962] text-[#C9A962]" /> {exp.rating}
                  </span>
                </div>
                <h3 className="font-serif text-xl text-[#1B4B5A] mb-2 group-hover:text-[#C9A962] transition-colors">{exp.title[language as "en" | "sr"]}</h3>
                <p className="text-sm text-[#5A6B70] mb-4 line-clamp-2">{exp.description[language as "en" | "sr"]}</p>
                <div className="flex items-center justify-end">
                  <div className="bg-[#1B4B5A] text-white rounded-full px-4 py-2 text-sm flex items-center gap-1">
                    {language === "sr" ? "Detalji" : "Details"}
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
