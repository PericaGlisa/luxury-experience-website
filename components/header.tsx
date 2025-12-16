"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Globe, Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"

const navItems = {
  en: [
    { label: "Home", href: "/" },
    { label: "Experiences", href: "/experiences" },
    { label: "Destinations", href: "/destinations" },
    { label: "Yachts", href: "/yachts" },
    { label: "Journal", href: "/journal" },
    { label: "Contact", href: "/contact" },
  ],
  sr: [
    { label: "Početna", href: "/" },
    { label: "Iskustva", href: "/experiences" },
    { label: "Destinacije", href: "/destinations" },
    { label: "Jahte", href: "/yachts" },
    { label: "Žurnal", href: "/journal" },
    { label: "Kontakt", href: "/contact" },
  ],
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [langMenuOpen, setLangMenuOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

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
            width={240}
            height={120}
            className="h-24 md:h-32 w-auto"
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
          <Link href="/contact" onClick={handleLinkClick}>
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

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-4 p-6 bg-white/95 backdrop-blur-sm rounded-3xl shadow-lg">
          <div className="flex flex-col gap-4">
            {currentNavItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-base font-medium text-[#1B4B5A] py-2"
                onClick={() => {
                  setMobileMenuOpen(false)
                  handleLinkClick()
                }}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex gap-2 py-2">
              <button
                onClick={() => setLanguage("sr")}
                className={`px-4 py-2 rounded-full text-sm ${language === "sr" ? "bg-[#1B4B5A] text-white" : "bg-[#F0EDE5] text-[#5A6B70]"}`}
              >
                SR
              </button>
              <button
                onClick={() => setLanguage("en")}
                className={`px-4 py-2 rounded-full text-sm ${language === "en" ? "bg-[#1B4B5A] text-white" : "bg-[#F0EDE5] text-[#5A6B70]"}`}
              >
                EN
              </button>
            </div>
            <Link
              href="/contact"
              onClick={() => {
                setMobileMenuOpen(false)
                handleLinkClick()
              }}
            >
              <Button className="mt-4 w-full bg-[#1B4B5A] hover:bg-[#0D3D4A] text-white rounded-full py-3">
                {t("bookNow")}
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
