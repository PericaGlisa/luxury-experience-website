"use client"

import Image from "next/image"
import Link from "next/link"
import { Clock, Users, Star, ArrowLeft, Check, Calendar, MapPin, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"
import { notFound } from "next/navigation"
import { experiences, experienceIncludesNames } from "@/lib/data"

export function ExperienceDetail({ id }: { id: string }) {
  const { language, getUrl } = useLanguage()
  const experience = experiences.find((e) => e.id.toString() === id || e.slug.en === id || e.slug.sr === id)
  
  if (!experience) {
    notFound()
  }

  const title = typeof experience.title === 'string' ? experience.title : experience.title[language as 'en' | 'sr']
  const description = typeof experience.description === 'string' ? experience.description : experience.description[language as 'en' | 'sr']

  return (
    <section className="pt-36 md:pt-48 pb-16 px-5 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <Link
          href={getUrl("/experiences")}
          className="inline-flex items-center gap-2 text-[#5A6B70] hover:text-[#1B4B5A] mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{language === "sr" ? "Nazad na iskustva" : "Back to experiences"}</span>
        </Link>

        {/* Header Content */}
        <div className="grid lg:grid-cols-2 gap-10 mb-12">
          <div className="relative h-[400px] rounded-3xl overflow-hidden">
            <Image 
              src={experience.image || "/placeholder.svg"} 
              alt={title} 
              fill 
              className="object-cover" 
            />
          </div>
          <div className="flex flex-col justify-center">
             <div className="flex items-center gap-2 mb-3">
              <MapPin className="w-4 h-4 text-[#C9A962]" />
              <span className="text-[#5A6B70]">{experience.location}</span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl text-[#1B4B5A] mb-4">{title}</h1>
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-1">
                <Star className="w-5 h-5 fill-[#C9A962] text-[#C9A962]" />
                <span className="font-medium text-[#1B4B5A]">{experience.rating}</span>
              </div>
              <span className="text-[#5A6B70]">
                ({experience.reviews} {language === "sr" ? "recenzija" : "reviews"})
              </span>
            </div>
            <p className="text-[#5A6B70] text-lg leading-relaxed mb-8">
              {description}
            </p>
            <div className="flex items-center">
              <Button asChild className="bg-[#1B4B5A] hover:bg-[#0D3D4A] text-white rounded-full px-8 py-6 h-auto text-lg">
                <Link href="#experience-booking">
                  {language === "sr" ? "Zatražite rezervaciju" : "Request Booking"}
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Details Grid */}
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Main Info */}
          <div className="lg:col-span-2 space-y-10">
            {/* Key Features */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#F7F4EE] p-6 rounded-2xl">
                <Clock className="w-6 h-6 text-[#C9A962] mb-3" />
                <h3 className="font-medium text-[#1B4B5A] mb-1">{language === "sr" ? "Trajanje" : "Duration"}</h3>
                <p className="text-[#5A6B70]">{experience.duration}</p>
              </div>
              <div className="bg-[#F7F4EE] p-6 rounded-2xl">
                <Users className="w-6 h-6 text-[#C9A962] mb-3" />
                <h3 className="font-medium text-[#1B4B5A] mb-1">{language === "sr" ? "Veličina grupe" : "Group Size"}</h3>
                <p className="text-[#5A6B70]">{experience.guests}</p>
              </div>
            </div>

            {/* What's Included */}
            <div>
              <h3 className="font-serif text-2xl text-[#1B4B5A] mb-6">{language === "sr" ? "Šta je uključeno" : "What's Included"}</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {experience.includes?.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#C9A962]/20 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 text-[#C9A962]" />
                    </div>
                    <span className="text-[#5A6B70]">{experienceIncludesNames[item] ? experienceIncludesNames[item][language as "en" | "sr"] : item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Itinerary */}
            <div>
              <h3 className="font-serif text-2xl text-[#1B4B5A] mb-6">{language === "sr" ? "Plan puta" : "Itinerary"}</h3>
              <div className="space-y-6">
                {experience.itinerary?.map((item: any, index: number) => (
                  <div key={index} className="flex gap-4 relative">
                    <div className="flex flex-col items-center">
                      <div className="w-3 h-3 rounded-full bg-[#1B4B5A]" />
                      {index !== (experience.itinerary?.length || 0) - 1 && (
                        <div className="w-px h-full bg-[#E8E0D0] my-2" />
                      )}
                    </div>
                    <div className="pb-2">
                      <span className="text-[#C9A962] font-medium text-sm block mb-1">{item.time}</span>
                      <p className="text-[#1B4B5A]">{item[language as "en" | "sr"]}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div
              id="experience-booking"
              className="bg-white border border-[#E8E0D0] rounded-3xl p-6 shadow-lg sticky top-28"
            >
              <h3 className="font-serif text-xl text-[#1B4B5A] mb-3">
                {language === "sr" ? "Konsultacije i rezervacija" : "Consultation & Booking"}
              </h3>
              <p className="text-sm text-[#5A6B70] mb-4">
                {language === "sr"
                  ? "Sve detalje o datumu, broju gostiju i vašim željama dogovaramo kroz kontakt formu, kao deo vašeg ukupnog plana putovanja na Sardiniju. Pošaljite nam upit i naš tim će vam pripremiti personalizovanu ponudu za ovo iskustvo."
                  : "We arrange all details like date, number of guests and your preferences through the contact form, as part of your overall trip plan to Sardinia. Send us an inquiry and our team will prepare a tailored offer for this experience."}
              </p>
              <Button asChild className="w-full bg-[#1B4B5A] hover:bg-[#0D3D4A] text-white font-medium py-6 text-base rounded-full">
                <Link href={getUrl("/contact")}>
                  {language === "sr" ? "Kontaktirajte nas" : "Contact Us"}
                </Link>
              </Button>
            </div>
            <div className="bg-[#F7F4EE] rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-5 h-5 text-[#1B4B5A]" />
                <h4 className="font-medium text-[#1B4B5A]">{language === "sr" ? "Garancija kvaliteta" : "Quality Guarantee"}</h4>
              </div>
              <p className="text-sm text-[#5A6B70] leading-relaxed">
                {language === "sr" 
                  ? "Sva naša iskustva su lično proverena i verifikovana od strane našeg tima za luksuzna putovanja." 
                  : "All our experiences are personally vetted and verified by our luxury travel team."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
