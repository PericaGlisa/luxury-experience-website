"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "en" | "sr"

const translations = {
  en: {
    // Header
    bookNow: "Plan Your Sardinia Journey",
    // Hero
    heroTitle: "Your Sardinia journey",
    heroTitleLine2: "personally crafted",
    heroDescription:
      "We curate bespoke trips to Sardinia, from private villas and yachts to hidden beaches and wine estates, tailored to your rhythm and desires.",
    exploreMore: "Explore Sardinia experiences",
    // Booking Form
    yachts: "Yachts",
    flights: "Flights",
    car: "Car",
    tour: "Tour",
    oneWay: "One Way",
    roundWay: "Round Way",
    multiCity: "Multi City",
    from: "From",
    to: "To",
    dates: "Dates",
    travelersClass: "Travelers & Class",
    travelers: "Travelers",
    // Hotels
    topRatedHotels: "Top rated stays",
    topRatedHotelsTitle: "Top rated stays for your Sardinia trip",
    night: "night",
    ratings: "Ratings",
    reviews: "reviews",
    // Newsletter
    newsletterTitle: "Stay Close to Sardinia",
    newsletterDescription:
      "Receive handpicked Sardinia itineraries, seasonal offers, and insider tips from Costa Smeralda straight to your inbox.",
    emailPlaceholder: "Enter your email to receive Sardinia inspiration",
    subscribe: "Get Sardinia inspiration",
    // Footer
    footerDescription:
      "We are your discreet partner for crafting tailor made journeys on Sardinia, from first idea to last sunset on the Tyrrhenian Sea.",
    quickLinks: "Quick Links",
    support: "Support",
    contact: "Contact",
    experiences: "Experiences",
    destinations: "Destinations",
    yachtCharters: "Yacht Charters",
    privateTours: "Private Tours",
    journal: "Journal",
    faq: "FAQ",
    privacyPolicy: "Privacy Policy",
    termsOfService: "Terms of Service",
    cancellationPolicy: "Cancellation Policy",
    travelInsurance: "Travel Insurance",
    allRightsReserved: "All rights reserved.",
    craftedWith: "Crafted with passion for Sardinia",
  },
  sr: {
    // Header
    bookNow: "Isplanirajte put na Sardiniju",
    // Hero
    heroTitle: "Vaše putovanje na Sardiniju",
    heroTitleLine2: "iskrojeno samo za vas",
    heroDescription:
      "Mi za vas osmišljavamo putovanja na Sardiniju, privatne vile, jahte, skrivene plaže i vinske rute, skrojene prema vašem tempu i željama.",
    exploreMore: "Istražite iskustva na Sardiniji",
    // Booking Form
    yachts: "Jahte",
    flights: "Letovi",
    car: "Automobil",
    tour: "Tura",
    oneWay: "Jedan smer",
    roundWay: "Povratna",
    multiCity: "Više gradova",
    from: "Od",
    to: "Do",
    dates: "Datumi",
    travelersClass: "Putnici i klasa",
    travelers: "Putnika",
    // Hotels
    topRatedHotels: "Najbolje ocenjeni smeštaj",
    topRatedHotelsTitle: "Najbolje ocenjeni smeštaj za vaše putovanje na Sardiniju",
    night: "noć",
    ratings: "Ocene",
    reviews: "recenzija",
    // Newsletter
    newsletterTitle: "Ostanite povezani sa Sardinijom",
    newsletterDescription:
      "Prijavite se za pažljivo odabrane itinerere, sezonske ponude i insajderske savete sa Sardinije direktno u vaše sanduče.",
    emailPlaceholder: "Unesite email za inspiraciju sa Sardinije",
    subscribe: "Primaj inspiraciju sa Sardinije",
    // Footer
    footerDescription:
      "Vaš smo diskretan partner za organizaciju putovanja na Sardiniju, od prve ideje do poslednjeg zalaska sunca nad Tirenskim morem.",
    quickLinks: "Brzi linkovi",
    support: "Podrška",
    contact: "Kontakt",
    experiences: "Iskustva",
    destinations: "Destinacije",
    yachtCharters: "Čarter jahti",
    privateTours: "Privatne ture",
    journal: "Žurnal",
    faq: "Česta pitanja",
    privacyPolicy: "Politika privatnosti",
    termsOfService: "Uslovi korišćenja",
    cancellationPolicy: "Politika otkazivanja",
    travelInsurance: "Putno osiguranje",
    allRightsReserved: "Sva prava zadržana.",
    craftedWith: "Napravljeno sa strašću za Sardiniju",
  },
}

type TranslationKey = keyof (typeof translations)["en"]

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: TranslationKey) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("sr")

  const t = (key: TranslationKey): string => {
    return translations[language][key] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
