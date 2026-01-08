"use client"

import { useState } from "react"
import Image from "next/image"
import { X, Maximize2, Download, ChevronLeft, ChevronRight } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

// Helper to generate image list
const galleryImages = Array.from({ length: 38 }, (_, i) => ({
  id: i + 1,
  src: `/images/gallery/sardinia-${i + 1}.jpg`,
  alt: `Sardinia Experience ${i + 1}`,
}))

export function GalleryContent() {
  const { t, language } = useLanguage()
  const [selectedImageIdx, setSelectedImageIdx] = useState<number | null>(null)

  const openLightbox = (index: number) => {
    setSelectedImageIdx(index)
    document.body.style.overflow = "hidden"
  }

  const closeLightbox = () => {
    setSelectedImageIdx(null)
    document.body.style.overflow = "unset"
  }

  const nextImage = () => {
    if (selectedImageIdx !== null) {
      setSelectedImageIdx((selectedImageIdx + 1) % galleryImages.length)
    }
  }

  const prevImage = () => {
    if (selectedImageIdx !== null) {
      setSelectedImageIdx((selectedImageIdx - 1 + galleryImages.length) % galleryImages.length)
    }
  }

  return (
    <div className="relative min-h-screen bg-[#F7F4EE] pt-44 pb-20 overflow-hidden">
      {/* Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-10 lg:px-20">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#1B4B5A]">
            {t("galleryTitle")}
          </h1>
          <p className="text-[#5A6B70] text-lg max-w-2xl mx-auto leading-relaxed">
            {t("galleryDescription")}
          </p>
          <div className="w-24 h-1 bg-[#C9A962] mx-auto mt-6" />
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className={cn(
                "group relative aspect-[4/5] overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-[0_20px_50px_rgba(27,75,90,0.2)] transition-all duration-700 cursor-pointer",
                "animate-in fade-in slide-in-from-bottom-8 fill-mode-both"
              )}
              style={{ animationDelay: `${index * 50}ms` }}
              onClick={() => openLightbox(index)}
            >
              {/* Image with Beauty Filters & Parallax */}
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className={cn(
                    "object-cover transition-all duration-1000 scale-105",
                    "brightness-[0.98] contrast-[1.05] saturate-[0.95]",
                    "group-hover:scale-115 group-hover:brightness-[1.05] group-hover:contrast-[1.15] group-hover:saturate-[1.1]",
                    "group-hover:translate-y-[-2%] group-hover:translate-x-[-1%]" // Simple Parallax
                  )}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.src = "/placeholder.svg"
                  }}
                />
              </div>
              
              {/* Subtle Inner Frame */}
              <div className="absolute inset-4 border border-white/20 rounded-xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              {/* Sophisticated Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1B4B5A]/80 via-[#1B4B5A]/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 flex flex-col items-center justify-end pb-10">
                <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-700 flex flex-col items-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-xl border border-white/30 flex items-center justify-center">
                    <Maximize2 className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-white font-serif text-lg tracking-wider">
                    {language === "sr" ? "Uvećaj" : "View Details"}
                  </span>
                </div>
              </div>

              {/* Image Index Indicator */}
              <div className="absolute top-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <span className="text-white/40 font-mono text-sm tracking-tighter">
                  #{String(image.id).padStart(2, '0')}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Info */}
        <div className="mt-20 text-center">
          <p className="text-[#5A6B70] italic">
            {language === "sr" 
              ? "Svaka fotografija priča priču o autentičnom luksuzu." 
              : "Every photograph tells a story of authentic luxury."}
          </p>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImageIdx !== null && (
        <div className="fixed inset-0 z-[100] bg-black/98 backdrop-blur-md flex items-center justify-center transition-all duration-500 animate-in fade-in">
          {/* Controls */}
          <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center z-[110]">
            <div className="text-white/40 font-mono text-xs tracking-[0.3em] uppercase">
              Maestrale Gallery / {String(selectedImageIdx + 1).padStart(2, '0')}
            </div>
            <button 
              onClick={closeLightbox}
              className="group p-3 text-white/70 hover:text-white transition-all duration-300"
            >
              <X className="w-8 h-8 transform group-hover:rotate-90 transition-transform duration-500" />
            </button>
          </div>

          <button 
            onClick={prevImage}
            className="absolute left-0 md:left-4 lg:left-10 top-1/2 -translate-y-1/2 p-6 md:p-4 text-white/30 hover:text-white transition-all duration-300 group z-[110]"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-10 h-10 md:w-12 md:h-12 transform group-hover:-translate-x-2 transition-transform duration-300" />
          </button>

          <button 
            onClick={nextImage}
            className="absolute right-0 md:right-4 lg:right-10 top-1/2 -translate-y-1/2 p-6 md:p-4 text-white/30 hover:text-white transition-all duration-300 group z-[110]"
            aria-label="Next image"
          >
            <ChevronRight className="w-10 h-10 md:w-12 md:h-12 transform group-hover:translate-x-2 transition-transform duration-300" />
          </button>

          {/* Image Container */}
          <div className="relative w-full h-full max-w-5xl max-h-[70vh] md:max-h-[80vh] mx-auto px-4 md:px-6 flex items-center justify-center">
            <div className="relative w-full h-full animate-in zoom-in-95 duration-500">
              <Image
                src={galleryImages[selectedImageIdx].src}
                alt={galleryImages[selectedImageIdx].alt}
                fill
                className="object-contain drop-shadow-[0_0_50px_rgba(0,0,0,0.5)]"
                priority
                quality={100}
              />
            </div>
          </div>

          {/* Bottom Info & Progress */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 flex flex-col items-center space-y-4 md:space-y-6">
            <div className="w-48 md:w-64 h-[1px] bg-white/10 relative">
              <div 
                className="absolute inset-y-0 left-0 bg-[#C9A962] transition-all duration-500" 
                style={{ width: `${((selectedImageIdx + 1) / galleryImages.length) * 100}%` }}
              />
            </div>
            <div className="text-white/60 font-serif italic text-base md:text-lg tracking-wide text-center px-4">
              {galleryImages[selectedImageIdx].alt}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
