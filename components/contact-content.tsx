"use client"

import type React from "react"

import { useState } from "react"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"

export function ContactContent() {
  const { language } = useLanguage()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: language === "sr" ? "Adresa" : "Address",
      content: "Belgrade, Serbia",
    },
    {
      icon: Phone,
      title: language === "sr" ? "Telefon" : "Phone",
      content: "+381 65 319 87 28",
    },
    {
      icon: Mail,
      title: "Email",
      content: "hello@maestrale.com",
    },
    {
      icon: Clock,
      title: language === "sr" ? "Radno vreme" : "Working Hours",
      content: language === "sr" ? "Pon - Pet: 9:00 - 18:00" : "Mon - Fri: 9:00 AM - 6:00 PM",
    },
  ]

  return (
    <section className="pt-36 md:pt-48 pb-16 px-5 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Hero */}
        <div className="text-center mb-16">
          <p className="text-[#C9A962] text-sm font-medium tracking-widest uppercase mb-4">
            {language === "sr" ? "Isplanirajmo Sardiniju" : "Plan Your Sardinia Escape"}
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-[#1B4B5A] mb-6">
            {language === "sr" ? "Kontakt za organizaciju putovanja" : "Contact for Trip Planning"}
          </h1>
          <p className="text-[#5A6B70] text-lg max-w-2xl mx-auto">
            {language === "sr"
              ? "Naš tim za luksuzna putovanja na Sardiniju pažljivo osmišljava itinerere prema vašem stilu, vremenu i budžetu."
              : "Our Sardinia travel specialists design bespoke itineraries around your style, timing, and budget."}
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            {contactInfo.map((info) => {
              const Icon = info.icon
              return (
                <div key={info.title} className="flex items-start gap-4 p-5 bg-white rounded-2xl">
                  <div className="w-12 h-12 rounded-xl bg-[#1B4B5A] flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium text-[#1B4B5A] mb-1">{info.title}</h4>
                    <p className="text-sm text-[#5A6B70]">{info.content}</p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3 bg-white rounded-3xl p-8">
            <h3 className="font-serif text-2xl text-[#1B4B5A] mb-6">
              {language === "sr" ? "Pošaljite nam poruku" : "Send us a message"}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm text-[#5A6B70] mb-2">
                    {language === "sr" ? "Ime i prezime" : "Full Name"}
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-[#E8E0D0] bg-[#FFFEF9] focus:outline-none focus:border-[#1B4B5A] transition-colors"
                    placeholder={language === "sr" ? "Vaše ime" : "Your name"}
                  />
                </div>
                <div>
                  <label className="block text-sm text-[#5A6B70] mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-[#E8E0D0] bg-[#FFFEF9] focus:outline-none focus:border-[#1B4B5A] transition-colors"
                    placeholder={language === "sr" ? "vaš@email.com" : "your@email.com"}
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm text-[#5A6B70] mb-2">{language === "sr" ? "Telefon" : "Phone"}</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-[#E8E0D0] bg-[#FFFEF9] focus:outline-none focus:border-[#1B4B5A] transition-colors"
                    placeholder="+39 123 456 7890"
                  />
                </div>
                <div>
                  <label className="block text-sm text-[#5A6B70] mb-2">{language === "sr" ? "Tema" : "Subject"}</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-[#E8E0D0] bg-[#FFFEF9] focus:outline-none focus:border-[#1B4B5A] transition-colors"
                  >
                    <option value="">{language === "sr" ? "Izaberite temu" : "Select a subject"}</option>
                    <option value="experiences">{language === "sr" ? "Iskustva" : "Experiences"}</option>
                    <option value="destinations">{language === "sr" ? "Destinacije" : "Destinations"}</option>
                    <option value="yacht-charters">{language === "sr" ? "Čarter jahte" : "Yacht Charters"}</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm text-[#5A6B70] mb-2">{language === "sr" ? "Poruka" : "Message"}</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-[#E8E0D0] bg-[#FFFEF9] focus:outline-none focus:border-[#1B4B5A] transition-colors resize-none"
                  placeholder={language === "sr" ? "Kako vam možemo pomoći?" : "How can we help you?"}
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-[#1B4B5A] hover:bg-[#0D3D4A] text-white rounded-full py-4 font-medium flex items-center justify-center gap-2"
              >
                {language === "sr" ? "Pošalji poruku" : "Send Message"}
                <Send className="w-4 h-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
