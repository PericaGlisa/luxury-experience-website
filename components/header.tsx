"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Globe, Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"
import { cn } from "@/lib/utils"
import { useEffect } from "react"

const navItems = {
  en: [
    { label: "Home", href: "/" },
    { label: "Experiences", href: "/experiences" },
    { label: "Destinations", href: "/destinations" },
    { label: "Yachts", href: "/yachts" },
    { label: "Journal", href: "/journal" },
    { label: "Booking", href: "/booking" },
    { label: "Contact", href: "/contact" },
  ],
  sr: [
    { label: "Početna", href: "/" },
    { label: "Iskustva", href: "/experiences" },
    { label: "Destinacije", href: "/destinations" },
    { label: "Jahte", href: "/yachts" },
    { label: "Žurnal", href: "/journal" },
    { label: "Zakazivanje", href: "/booking" },
    { label: "Kontakt", href: "/contact" },
  ],
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [langMenuOpen, setLangMenuOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [mobileMenuOpen])

  const currentNavItems = navItems[language]

  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: "instant" })
  }

  return (
    <header className="absolute top-0 left-0 right-0 z-50 px-5 md:px-10 lg:px-20 py-5">
      <nav className="relative flex items-center justify-between">
        <Link href="/" className="flex items-center" onClick={handleLinkClick}>
          <Image
            src="/logo.png"
            alt="Maestrale Luxury Experience"
            width={320}
            height={160}
            className="h-28 md:h-40 w-auto"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {currentNavItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={handleLinkClick}
              className="text-sm font-medium tracking-wide text-[#5A6B70] hover:text-[#1B4B5A] transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          <div className="relative hidden md:block">
            <button
              onClick={() => setLangMenuOpen(!langMenuOpen)}
              className="flex items-center gap-2 text-sm text-[#5A6B70] hover:text-[#1B4B5A] transition-colors"
            >
              <Globe className="w-4 h-4" />
              <span>{language.toUpperCase()}</span>
              <ChevronDown className="w-3 h-3" />
            </button>
            {langMenuOpen && (
              <div className="absolute top-full right-0 mt-2 bg-white rounded-xl shadow-lg py-2 min-w-[100px]">
                <button
                  onClick={() => {
                    setLanguage("sr")
                    setLangMenuOpen(false)
                  }}
                  className={`w-full px-4 py-2 text-sm text-left hover:bg-[#F7F4EE] ${language === "sr" ? "text-[#1B4B5A] font-medium" : "text-[#5A6B70]"}`}
                >
                  Srpski
                </button>
                <button
                  onClick={() => {
                    setLanguage("en")
                    setLangMenuOpen(false)
                  }}
                  className={`w-full px-4 py-2 text-sm text-left hover:bg-[#F7F4EE] ${language === "en" ? "text-[#1B4B5A] font-medium" : "text-[#5A6B70]"}`}
                >
                  English
                </button>
              </div>
            )}
          </div>
          <Link href="/booking" onClick={handleLinkClick}>
            <Button className="hidden md:flex bg-[#1B4B5A] hover:bg-[#0D3D4A] text-white rounded-full px-6 py-2 text-sm font-medium tracking-wide">
              {t("bookNow")}
            </Button>
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 rounded-full bg-[#1B4B5A] text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-white/98 backdrop-blur-md z-50 lg:hidden transition-all duration-300 ease-in-out",
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between px-5 py-5 border-b border-[#F7F4EE]">
            <Link href="/" className="flex items-center" onClick={() => {
              setMobileMenuOpen(false)
              handleLinkClick()
            }}>
              <Image
                src="/logo.png"
                alt="Maestrale Logo"
                width={240}
                height={120}
                className="h-24 w-auto"
                priority
              />
            </Link>
            <button
              className="p-2 rounded-full bg-[#1B4B5A] text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile Menu Items - Scrollable area */}
          <div className="flex-1 overflow-y-auto px-6 py-8">
            <div className="flex flex-col gap-6">
              {currentNavItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-2xl font-medium text-[#1B4B5A] border-b border-[#F7F4EE] pb-4"
                  onClick={() => {
                    setMobileMenuOpen(false)
                    handleLinkClick()
                  }}
                >
                  {item.label}
                </Link>
              ))}
              
              <div className="pt-4 flex flex-col gap-6">
                <div className="flex flex-col gap-3">
                  <p className="text-sm font-medium text-[#5A6B70] uppercase tracking-widest">
                    {language === "sr" ? "Jezik" : "Language"}
                  </p>
                  <div className="flex gap-3">
                    <button
                      onClick={() => setLanguage("sr")}
                      className={cn(
                        "flex-1 py-3 rounded-xl text-sm font-medium transition-all",
                        language === "sr" ? "bg-[#1B4B5A] text-white shadow-lg shadow-[#1B4B5A]/20" : "bg-[#F7F4EE] text-[#5A6B70]"
                      )}
                    >
                      SRPSKI
                    </button>
                    <button
                      onClick={() => setLanguage("en")}
                      className={cn(
                        "flex-1 py-3 rounded-xl text-sm font-medium transition-all",
                        language === "en" ? "bg-[#1B4B5A] text-white shadow-lg shadow-[#1B4B5A]/20" : "bg-[#F7F4EE] text-[#5A6B70]"
                      )}
                    >
                      ENGLISH
                    </button>
                  </div>
                </div>

                <Link
                  href="/booking"
                  onClick={() => {
                    setMobileMenuOpen(false)
                    handleLinkClick()
                  }}
                >
                  <Button className="w-full bg-[#1B4B5A] hover:bg-[#0D3D4A] text-white rounded-xl py-6 text-lg font-medium shadow-xl shadow-[#1B4B5A]/20">
                    {t("bookNow")}
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Mobile Menu Footer */}
          <div className="p-8 border-t border-[#F7F4EE] text-center">
            <p className="text-[#5A6B70] text-xs uppercase tracking-[0.2em]">
              Maestrale Luxury Experience
            </p>
          </div>
        </div>
      </div>
    </header>
  )
}
