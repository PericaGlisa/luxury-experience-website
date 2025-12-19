"use client"

import Link from "next/link"
import Image from "next/image"
import { Instagram, Facebook, Linkedin, Phone, Mail, MapPin, Heart } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function Footer() {
  const { t } = useLanguage()

  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: "instant" })
  }

  const quickLinks = [
    { label: t("experiences"), href: "/experiences" },
    { label: t("destinations"), href: "/destinations" },
    { label: t("yachtCharters"), href: "/yachts" },
    { label: t("journal"), href: "/journal" },
    { label: t("booking"), href: "/booking" },
    { label: t("contact"), href: "/contact" },
  ]

  const supportLinks = [
    { label: t("faq"), href: "/faq" },
    { label: t("privacyPolicy"), href: "/privacy" },
    { label: t("termsOfService"), href: "/terms" },
    { label: t("cancellationPolicy"), href: "/cancellation" },
    { label: t("travelInsurance"), href: "/insurance" },
  ]

  return (
    <footer className="bg-[#0D3D4A] text-[#FFFEF9] py-16 px-5 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Link href="/" onClick={handleLinkClick}>
              <Image
                src="/logo.png"
                alt="Maestrale Luxury Experience"
                width={340}
                height={160}
                className="h-32 md:h-44 w-auto mb-4 brightness-0 invert cursor-pointer"
              />
            </Link>
            <p className="text-sm text-[#FFFEF9]/70 leading-relaxed mb-6">{t("footerDescription")}</p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-9 h-9 rounded-full border border-[#C9A962]/50 flex items-center justify-center hover:bg-[#C9A962] hover:border-[#C9A962] transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full border border-[#C9A962]/50 flex items-center justify-center hover:bg-[#C9A962] hover:border-[#C9A962] transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full border border-[#C9A962]/50 flex items-center justify-center hover:bg-[#C9A962] hover:border-[#C9A962] transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-medium text-[#C9A962] mb-4 text-sm tracking-wide uppercase">{t("quickLinks")}</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    onClick={handleLinkClick}
                    className="text-sm text-[#FFFEF9]/70 hover:text-[#C9A962] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-[#C9A962] mb-4 text-sm tracking-wide uppercase">{t("support")}</h4>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    onClick={handleLinkClick}
                    className="text-sm text-[#FFFEF9]/70 hover:text-[#C9A962] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-medium text-[#C9A962] mb-4 text-sm tracking-wide uppercase">{t("contact")}</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#C9A962] mt-0.5" />
                <span className="text-sm text-[#FFFEF9]/70">Belgrade, Serbia</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#C9A962]" />
                <a href="tel:+381653198728" className="text-sm text-[#FFFEF9]/70">
                  +381 65 319 87 28
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#C9A962]" />
                <a href="mailto:info@maestralelux.com" className="text-sm text-[#FFFEF9]/70">
                  info@maestralelux.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar - removed diagonal line by keeping only simple border */}
        <div className="mt-12 pt-8 border-t border-[#FFFEF9]/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[#FFFEF9]/50">© 2025 Maestrale Luxury Experience. {t("allRightsReserved")}</p>
          <p className="text-xs text-[#FFFEF9]/50 flex items-center gap-1">
            Crafted with <Heart className="w-3 h-3 fill-[#C9A962] text-[#C9A962]" /> passion in Europe
          </p>
        </div>
      </div>
    </footer>
  )
}
