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
  const [isZoomed, setIsZoomed] = useState(false)

  const openLightbox = (index: number) => {
    setSelectedImageIdx(index)
    setIsZoomed(false)
    document.body.style.overflow = "hidden"
  }

  const closeLightbox = () => {
    setSelectedImageIdx(null)
    setIsZoomed(false)
    document.body.style.overflow = "unset"
  }

  const nextImage = () => {
    if (selectedImageIdx !== null) {
      setSelectedImageIdx((selectedImageIdx + 1) % galleryImages.length)
      setIsZoomed(false)
    }
  }

  const prevImage = () => {
    if (selectedImageIdx !== null) {
      setSelectedImageIdx((selectedImageIdx - 1 + galleryImages.length) % galleryImages.length)
      setIsZoomed(false)
    }
  }

  return (
    <div className="relative min-h-screen bg-white pt-44 pb-20 overflow-hidden">
      {/* Texture Overlay - Subtler for IG style */}
      <div className="absolute inset-0 opacity-[0.01] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-1 md:px-10 lg:px-20">
        {/* Instagram Profile Style Header */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16 mb-16 px-4">
          <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full p-1 border-2 border-[#C9A962]">
            <div className="relative w-full h-full rounded-full overflow-hidden bg-white flex items-center justify-center">
              <Image
                src="/logo.png"
                alt="Logo"
                fill
                className="object-contain scale-[1.4] transform-gpu"
                priority
              />
            </div>
          </div>
          
          <div className="flex-1 space-y-6 text-center md:text-left">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <h1 className="font-serif text-3xl md:text-4xl text-[#1B4B5A]">
                {t("galleryTitle")}
              </h1>
              <div className="flex gap-2">
                <Button variant="outline" className="rounded-md border-gray-300 text-sm font-semibold h-9 px-4">
                  {t("follow")}
                </Button>
                <Button variant="outline" className="rounded-md border-gray-300 text-sm font-semibold h-9 px-4">
                  {t("message")}
                </Button>
              </div>
            </div>
            
            <div className="flex justify-center md:justify-start gap-8 text-sm md:text-base">
              <span><strong>38</strong> {t("posts")}</span>
              <span><strong>1.2k</strong> {t("followers")}</span>
              <span><strong>450</strong> {t("following")}</span>
            </div>
            
            <div className="space-y-1">
              <p className="font-bold text-[#1B4B5A]">Maestrale Luxury Experience</p>
              <p className="text-[#5A6B70] max-w-lg leading-relaxed">
                {t("galleryDescription")}
              </p>
            </div>
          </div>
        </div>

        {/* Tab Selection Style */}
        <div className="border-t border-gray-200 mb-8">
          <div className="flex justify-center gap-12">
            <div className="border-t-2 border-[#1B4B5A] -mt-[2px] pt-4 flex items-center gap-2 text-[#1B4B5A] font-semibold text-xs tracking-widest uppercase cursor-pointer">
              <Maximize2 className="w-3 h-3" />
              {language === "sr" ? "Objave" : "Posts"}
            </div>
          </div>
        </div>

        {/* Gallery Grid - 1:1 Aspect Ratio */}
        <div className="grid grid-cols-3 gap-1 md:gap-8">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className={cn(
                "group relative aspect-square overflow-hidden bg-gray-100 cursor-pointer rounded-2xl md:rounded-3xl",
                "animate-in fade-in duration-700 fill-mode-both"
              )}
              style={{ animationDelay: `${index * 30}ms` }}
              onClick={() => openLightbox(index)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 33vw, (max-width: 1200px) 33vw, 25vw"
                className="object-cover transition-all duration-500 group-hover:brightness-90"
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.src = "/placeholder.svg"
                }}
              />
              
              {/* IG Style Hover Overlay (Likes/Comments icons) */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6 text-white font-bold">
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                  <span>{Math.floor(Math.random() * 500) + 100}</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10z" />
                  </svg>
                  <span>{Math.floor(Math.random() * 50) + 10}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Instagram Style Lightbox */}
      {selectedImageIdx !== null && (
        <div 
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center animate-in fade-in duration-300 px-4 md:px-20"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeLightbox()
          }}
        >
          <button 
            onClick={closeLightbox}
            className="absolute top-4 right-4 p-2 text-white/70 hover:text-white z-[120]"
          >
            <X className="w-8 h-8" />
          </button>

          <div 
            className="relative flex flex-col md:flex-row bg-white w-full max-w-[95vw] h-full max-h-[95vh] overflow-hidden rounded-2xl md:rounded-3xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image Section */}
            <div className="relative flex-[3] bg-black flex items-center justify-center group/img overflow-hidden">
              <Image
                src={galleryImages[selectedImageIdx].src}
                alt={galleryImages[selectedImageIdx].alt}
                fill
                className={cn(
                  "object-contain transition-transform duration-300",
                  isZoomed ? "scale-150 cursor-zoom-out" : "scale-100 cursor-zoom-in"
                )}
                onClick={() => setIsZoomed(!isZoomed)}
                priority
              />
              
              {!isZoomed && (
                <>
                  <button 
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/20 hover:bg-white/40 rounded-full text-white transition-all opacity-0 group-hover/img:opacity-100"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button 
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/20 hover:bg-white/40 rounded-full text-white transition-all opacity-0 group-hover/img:opacity-100"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}
            </div>

            {/* Sidebar Section (Instagram Info Style) */}
            <div className="w-full md:w-80 bg-white flex flex-col border-l border-gray-100 shrink-0">
              {/* User Header */}
              <div className="p-4 flex items-center gap-3 border-b border-gray-50">
                <div className="w-10 h-10 rounded-full bg-white overflow-hidden relative border border-gray-100 flex items-center justify-center">
                  <Image src="/logo.png" alt="User" fill className="object-contain scale-[1.4] transform-gpu" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-[#1B4B5A]">maestrale_luxury</span>
                  <span className="text-xs text-[#5A6B70]">Sardinia, Italy</span>
                </div>
              </div>

              {/* Caption/Comments Area */}
              <div className="flex-1 p-4 overflow-y-auto">
                <div className="flex gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-white overflow-hidden flex-shrink-0 relative border border-gray-100 flex items-center justify-center">
                    <Image src="/logo.png" alt="User" fill className="object-contain scale-[1.4] transform-gpu" />
                  </div>
                  <div className="text-sm">
                    <span className="font-bold mr-2 text-[#1B4B5A]">maestrale_luxury</span>
                    <span className="text-[#5A6B70] leading-relaxed">
                      {galleryImages[selectedImageIdx].alt}. {language === "sr" ? "Uživajte u svakom trenutku luksuza." : "Enjoy every moment of luxury."}
                    </span>
                    <div className="mt-2 text-xs text-[#5A6B70]/60 uppercase tracking-tighter">
                      {Math.floor(Math.random() * 24)}h
                    </div>
                  </div>
                </div>
              </div>

              {/* Interactions Area */}
              <div className="p-4 border-t border-gray-50 space-y-3">
                <div className="flex gap-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 cursor-pointer hover:text-gray-500">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 cursor-pointer hover:text-gray-500">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.827-1.213L3 20l1.391-3.993A9.11 9.11 0 013 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 cursor-pointer hover:text-gray-500">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                </div>
                <div className="text-sm font-bold text-[#1B4B5A]">
                  {Math.floor(Math.random() * 500) + 100} {t("likes")}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
