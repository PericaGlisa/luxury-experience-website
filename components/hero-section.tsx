"use client"

import type React from "react"
import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, User, Mail, Phone, Calendar, MessageSquare, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel"

export function HeroSection() {
  const { t, language } = useLanguage()
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    destination: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Consultation request:", formData)
    // Handle form submission
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const destinations = [
    { value: "", label: language === "sr" ? "Izaberite opciju" : "Select an option" },
    { value: "experiences", label: language === "sr" ? "Iskustva" : "Experiences" },
    { value: "destinations", label: language === "sr" ? "Destinacije" : "Destinations" },
    { value: "yacht-charters", label: language === "sr" ? "Čarter jahte" : "Yacht Charters" },
  ]

  const heroSlides = [
    {
      src: "/luxury-sardinian-villa-with-pool-overlooking-medit.jpg",
      alt: "Luxury Sardinian villa with pool overlooking the Mediterranean",
    },
    {
      src: "/cala-di-volpe-bay-sardinia-luxury-resort.jpg",
      alt: "Cala di Volpe bay luxury resort in Sardinia",
    },
    {
      src: "/porto-cervo-luxury-marina-sardinia-yachts.jpg",
      alt: "Porto Cervo luxury marina in Sardinia",
    },
    {
      src: "/la-maddalena-islands-sardinia-turquoise-water.jpg",
      alt: "La Maddalena islands with turquoise water in Sardinia",
    },
  ]

  useEffect(() => {
    if (!carouselApi) return

    const onSelect = () => {
      setCurrentSlide(carouselApi.selectedScrollSnap())
    }

    onSelect()
    carouselApi.on("select", onSelect)

    return () => {
      carouselApi.off("select", onSelect)
    }
  }, [carouselApi])

  useEffect(() => {
    if (!carouselApi) return

    const interval = setInterval(() => {
      const totalSlides = carouselApi.scrollSnapList().length
      const nextIndex = (carouselApi.selectedScrollSnap() + 1) % totalSlides
      carouselApi.scrollTo(nextIndex)
    }, 5000)

    return () => clearInterval(interval)
  }, [carouselApi])

  return (
    <section className="relative pt-36 pb-12 md:pt-48 md:pb-16 px-5 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Content */}
          <div className="pt-8 lg:pt-16">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-[#1B4B5A] leading-tight tracking-tight text-balance">
              {t("heroTitle")} <span className="block">{t("heroTitleLine2")}</span>
            </h1>
            <p className="mt-6 text-[#5A6B70] text-base md:text-lg leading-relaxed max-w-xl">{t("heroDescription")}</p>
            <div className="flex items-center gap-3 mt-8">
              <Link href="/experiences">
                <Button className="bg-[#1B4B5A] hover:bg-[#0D3D4A] text-white rounded-full px-6 py-3 text-sm font-medium tracking-wide flex items-center gap-2">
                  {t("exploreMore")}
                </Button>
              </Link>
              <Link href="/destinations">
                <button className="w-11 h-11 rounded-full border-2 border-[#1B4B5A] flex items-center justify-center text-[#1B4B5A] hover:bg-[#1B4B5A] hover:text-white transition-colors">
                  <ArrowUpRight className="w-5 h-5" />
                </button>
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <Carousel className="rounded-3xl overflow-hidden shadow-2xl" setApi={setCarouselApi}>
              <CarouselContent>
                {heroSlides.map((slide, index) => (
                  <CarouselItem key={slide.src + index}>
                    <div className="relative w-full h-[350px] md:h-[450px] lg:h-[500px]">
                      <Image
                        src={slide.src}
                        alt={slide.alt}
                        fill
                        priority={index === 0}
                        sizes="(min-width: 1024px) 50vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              {heroSlides.length > 1 && (
                <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
                  {heroSlides.map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => carouselApi?.scrollTo(index)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        currentSlide === index ? "w-4 bg-white" : "w-2 bg-white/60"
                      }`}
                    />
                  ))}
                </div>
              )}
            </Carousel>
          </div>
        </div>

        <div className="mt-8 lg:mt-12 bg-white rounded-3xl shadow-xl p-6 md:p-8 lg:p-10">
          <div className="text-center mb-8">
            <h2 className="font-serif text-2xl md:text-3xl text-[#1B4B5A] mb-2">
              {language === "sr" ? "Zakažite konsultacije" : "Book a Consultation"}
            </h2>
            <p className="text-[#5A6B70]">
              {language === "sr"
                ? "Ispunite formu ispod da biste zakazali konsultacije o vašem savršenom putovanju"
                : "Fill out the form below to schedule a consultation about your perfect journey"}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Name */}
              <div className="flex items-center gap-3 px-4 py-4 border border-[#E8E0D0] rounded-xl bg-[#FFFEF9] focus-within:border-[#1B4B5A] transition-colors">
                <User className="w-5 h-5 text-[#5A6B70] shrink-0" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={language === "sr" ? "Vaše ime i prezime" : "Your full name"}
                  className="flex-1 bg-transparent text-sm text-[#1B4B5A] placeholder:text-[#8A9499] focus:outline-none"
                  required
                />
              </div>

              {/* Email */}
              <div className="flex items-center gap-3 px-4 py-4 border border-[#E8E0D0] rounded-xl bg-[#FFFEF9] focus-within:border-[#1B4B5A] transition-colors">
                <Mail className="w-5 h-5 text-[#5A6B70] shrink-0" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={language === "sr" ? "Email adresa" : "Email address"}
                  className="flex-1 bg-transparent text-sm text-[#1B4B5A] placeholder:text-[#8A9499] focus:outline-none"
                  required
                />
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3 px-4 py-4 border border-[#E8E0D0] rounded-xl bg-[#FFFEF9] focus-within:border-[#1B4B5A] transition-colors">
                <Phone className="w-5 h-5 text-[#5A6B70] shrink-0" />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder={language === "sr" ? "Broj telefona" : "Phone number"}
                  className="flex-1 bg-transparent text-sm text-[#1B4B5A] placeholder:text-[#8A9499] focus:outline-none"
                />
              </div>

              {/* Preferred Date */}
              <div className="flex items-center gap-3 px-4 py-4 border border-[#E8E0D0] rounded-xl bg-[#FFFEF9] focus-within:border-[#1B4B5A] transition-colors">
                <Calendar className="w-5 h-5 text-[#5A6B70] shrink-0" />
                <div className="relative flex-1">
                  {!formData.date && (
                    <span className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 text-sm text-[#8A9499] lg:hidden">
                      {language === "sr" ? "Preferirani datum" : "Preferred date"}
                    </span>
                  )}
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full bg-transparent text-sm text-[#1B4B5A] focus:outline-none"
                  />
                </div>
              </div>

              {/* Destination */}
              <div className="flex items-center gap-3 px-4 py-4 border border-[#E8E0D0] rounded-xl bg-[#FFFEF9] focus-within:border-[#1B4B5A] transition-colors lg:col-span-2">
                <MessageSquare className="w-5 h-5 text-[#5A6B70] shrink-0" />
                <select
                  name="destination"
                  value={formData.destination}
                  onChange={handleChange}
                  className="flex-1 bg-transparent text-sm text-[#1B4B5A] focus:outline-none appearance-none cursor-pointer"
                >
                  {destinations.map((dest) => (
                    <option key={dest.value} value={dest.value}>
                      {dest.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Message */}
            <div className="flex items-start gap-3 px-4 py-4 border border-[#E8E0D0] rounded-xl bg-[#FFFEF9] focus-within:border-[#1B4B5A] transition-colors">
              <MessageSquare className="w-5 h-5 text-[#5A6B70] shrink-0 mt-0.5" />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={
                  language === "sr"
                    ? "Recite nam više o vašem idealnom putovanju..."
                    : "Tell us more about your ideal journey..."
                }
                rows={3}
                className="flex-1 bg-transparent text-sm text-[#1B4B5A] placeholder:text-[#8A9499] focus:outline-none resize-none"
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <Button
                type="submit"
                className="bg-[#1B4B5A] hover:bg-[#0D3D4A] text-white rounded-full px-10 py-4 text-sm font-medium tracking-wide flex items-center gap-2"
              >
                {language === "sr" ? "Pošaljite upit" : "Send Inquiry"}
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
