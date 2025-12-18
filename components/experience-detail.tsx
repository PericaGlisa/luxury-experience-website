"use client"

import Image from "next/image"
import Link from "next/link"
import { Clock, Users, Star, ArrowLeft, Check, Calendar, MapPin, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"

const experiences = [
  {
    id: 1,
    title: "Private Yacht Charter",
    location: "Costa Smeralda",
    description: {
      en: "Sail the emerald waters of Costa Smeralda aboard a luxury yacht with personal crew. This exclusive experience allows you to discover hidden coves, swim in crystal-clear waters, and enjoy a gourmet lunch prepared on board. Whether you want to relax on the sun deck or explore the coastline, our captain will tailor the itinerary to your preferences.",
      sr: "Plovite smaragdnim vodama Costa Smeralde na luksuznoj jahti sa ličnom posadom. Ovo ekskluzivno iskustvo vam omogućava da otkrijete skrivene uvale, plivate u kristalno čistim vodama i uživate u gurmanskom ručku pripremljenom na brodu. Bilo da želite da se opustite na palubi za sunčanje ili istražite obalu, naš kapetan će prilagoditi plan puta vašim željama.",
    },
    duration: "Full Day",
    guests: "Up to 12",
    rating: 4.9,
    reviews: 128,
    price: 2500,
    image: "/luxury-yacht-sailing-mediterranean-costa-smeralda.jpg",
    gallery: [
      "/luxury-yacht-sailing-mediterranean-costa-smeralda.jpg",
      "/luxury-motor-yacht-mediterranean-blue-water.jpg",
      "/luxury-mega-yacht-aerial-view-mediterranean-sea.jpg"
    ],
    includes: ["professional_crew", "fuel", "lunch", "drinks", "snorkeling_gear"],
    itinerary: [
      { time: "10:00", en: "Departure from Porto Cervo Marina", sr: "Polazak iz marine Porto Cervo" },
      { time: "11:30", en: "Swim stop at Cala di Volpe", sr: "Pauza za kupanje u Cala di Volpe" },
      { time: "13:00", en: "Gourmet lunch on board", sr: "Gurmanski ručak na brodu" },
      { time: "15:00", en: "Visit to La Maddalena Archipelago", sr: "Poseta arhipelagu La Maddalena" },
      { time: "18:00", en: "Return to port", sr: "Povratak u luku" }
    ]
  },
  {
    id: 2,
    title: "Wine Tasting Tour",
    location: "Gallura Region",
    description: {
      en: "Explore Sardinian vineyards and taste exclusive Cannonau and Vermentino wines. You will visit two historic wineries in the Gallura region, guided by an expert sommelier. Learn about the unique terroir of Sardinia, walk through the vines, and enjoy a wine pairing session with local cheeses and cured meats.",
      sr: "Istražite sardinijske vinograde i probajte ekskluzivna Cannonau i Vermentino vina. Posetićete dve istorijske vinarije u regionu Gallura, vođeni stručnim somelijerom. Naučite o jedinstvenom teroaru Sardinije, prošetajte kroz lozu i uživajte u sesiji uparivanja vina sa lokalnim sirevima i suhomesnatim proizvodima.",
    },
    duration: "Half Day",
    guests: "Up to 8",
    rating: 4.8,
    reviews: 95,
    price: 350,
    image: "/sardinian-vineyard-wine-tasting-luxury.jpg",
    gallery: [
      "/sardinian-vineyard-wine-tasting-luxury.jpg",
      "/luxury-private-dining-sunset-mediterranean.jpg",
      "/luxury-mediterranean-villa-private-beach-sardinia.jpg"
    ],
    includes: ["transport", "sommelier", "wine_tasting", "snacks"],
    itinerary: [
      { time: "09:00", en: "Pick-up from hotel", sr: "Polazak iz hotela" },
      { time: "10:00", en: "First winery visit & tour", sr: "Poseta prvoj vinariji i obilazak" },
      { time: "11:30", en: "Tasting session", sr: "Sesija degustacije" },
      { time: "13:00", en: "Light lunch with wine pairing", sr: "Lagani ručak sa uparivanjem vina" },
      { time: "14:30", en: "Return transfer", sr: "Povratni transfer" }
    ]
  },
  {
    id: 3,
    title: "Helicopter Island Tour",
    location: "La Maddalena Archipelago",
    description: {
      en: "Experience breathtaking aerial views of La Maddalena archipelago and hidden beaches. This private helicopter tour offers a unique perspective of Sardinia's turquoise waters and rugged coastline. Your pilot will point out landmarks and secluded spots that are only visible from the sky.",
      sr: "Doživite zadivljujuće poglede iz vazduha na arhipelag La Maddalena i skrivene plaže. Ova privatna tura helikopterom nudi jedinstvenu perspektivu tirkiznih voda Sardinije i razuđene obale. Vaš pilot će pokazati znamenitosti i skrivena mesta koja su vidljiva samo sa neba.",
    },
    duration: "2 Hours",
    guests: "Up to 4",
    rating: 5.0,
    reviews: 42,
    price: 1800,
    image: "/helicopter-tour-sardinia-island-aerial-view.jpg",
    gallery: [
      "/helicopter-tour-sardinia-island-aerial-view.jpg",
      "/la-maddalena-islands-sardinia-turquoise-water.jpg",
      "/porto-cervo-luxury-marina-sardinia-yachts.jpg"
    ],
    includes: ["hotel_transfer", "flight", "champagne", "guide"],
    itinerary: [
      { time: "10:00", en: "Transfer to heliport", sr: "Transfer do heliodroma" },
      { time: "10:30", en: "Take-off and coastal flight", sr: "Poletanje i let obalom" },
      { time: "11:15", en: "Landing on private island", sr: "Sletanje na privatno ostrvo" },
      { time: "12:00", en: "Return flight", sr: "Povratni let" }
    ]
  },
  {
    id: 4,
    title: "Gourmet Dining Experience",
    location: "Secret Sunset Location",
    description: {
      en: "Indulge in a private chef experience with fresh Mediterranean cuisine at exclusive sunset locations. Whether it's a secluded beach, a cliffside terrace, or a private yacht, our chef will prepare a bespoke menu using the finest local ingredients. Perfect for romantic dinners or special celebrations.",
      sr: "Prepustite se iskustvu privatnog kuvara sa svežom mediteranskom kuhinjom na ekskluzivnim lokacijama uz zalazak sunca. Bilo da je to skrivena plaža, terasa na litici ili privatna jahta, naš kuvar će pripremiti meni po meri koristeći najbolje lokalne sastojke. Savršeno za romantične večere ili posebne proslave.",
    },
    duration: "Evening",
    guests: "Up to 10",
    rating: 4.9,
    reviews: 76,
    price: 800,
    image: "/luxury-private-dining-sunset-mediterranean.jpg",
    gallery: [
      "/luxury-private-dining-sunset-mediterranean.jpg",
      "/luxury-resort-costa-smeralda-sardinia-infinity-pool.jpg",
      "/boutique-hotel-turquoise-bay-sardinia-coastline.jpg"
    ],
    includes: ["private_chef", "custom_menu", "wine_pairing", "setup"],
    itinerary: [
      { time: "18:00", en: "Welcome aperitif", sr: "Aperitiv dobrodošlice" },
      { time: "19:00", en: "Four-course dinner", sr: "Večera od četiri sleda" },
      { time: "21:00", en: "Dessert and digestif", sr: "Dezert i digestiv" },
      { time: "22:00", en: "Conclusion", sr: "Završetak" }
    ]
  },
  {
    id: 5,
    title: "Scuba Diving Adventure",
    location: "Marine Protected Area",
    description: {
      en: "Discover underwater caves and marine life with expert diving instructors. Sardinia offers some of the best diving in the Mediterranean, with crystal-clear visibility and rich biodiversity. Explore ancient Roman shipwrecks, colorful reefs, and dramatic rock formations suitable for all experience levels.",
      sr: "Otkrijte podvodne pećine i morski život sa stručnim instruktorima ronjenja. Sardinija nudi jedno od najboljih ronjenja na Mediteranu, sa kristalno čistom vidljivošću i bogatim biodiverzitetom. Istražite drevne rimske olupine, šarene grebene i dramatične stene pogodne za sve nivoe iskustva.",
    },
    duration: "Half Day",
    guests: "Up to 6",
    rating: 4.7,
    reviews: 58,
    price: 280,
    image: "/scuba-diving-sardinia-clear-water-marine-life.jpg",
    gallery: [
      "/scuba-diving-sardinia-clear-water-marine-life.jpg",
      "/la-maddalena-islands-sardinia-turquoise-water.jpg",
      "/luxury-catamaran-turquoise-water-mediterranean.jpg"
    ],
    includes: ["equipment", "instructor", "boat_transfer", "refreshments"],
    itinerary: [
      { time: "09:00", en: "Meet at diving center", sr: "Sastanak u ronilačkom centru" },
      { time: "09:30", en: "Boat transfer to dive site", sr: "Transfer brodom do mesta ronjenja" },
      { time: "10:30", en: "First dive", sr: "Prvi zaron" },
      { time: "12:00", en: "Surface interval & snack", sr: "Pauza na površini i užina" },
      { time: "13:00", en: "Second dive (optional)", sr: "Drugi zaron (opciono)" }
    ]
  },
  {
    id: 6,
    title: "Golf & Spa Retreat",
    location: "Pevero Golf Club",
    description: {
      en: "Enjoy championship golf followed by exclusive spa treatments with sea views. Play 18 holes at the legendary Pevero Golf Club, designed by Robert Trent Jones, then relax at a world-class spa. This package combines sport and relaxation for the ultimate wellness day.",
      sr: "Uživajte u šampionskom golfu praćenom ekskluzivnim spa tretmanima sa pogledom na more. Igrajte 18 rupa u legendarnom Pevero Golf Clubu, koji je dizajnirao Robert Trent Jones, a zatim se opustite u svetskom spa centru. Ovaj paket kombinuje sport i relaksaciju za vrhunski wellness dan.",
    },
    duration: "Full Day",
    guests: "Up to 4",
    rating: 4.8,
    reviews: 64,
    price: 650,
    image: "/luxury-golf-course-sardinia-mediterranean-spa.jpg",
    gallery: [
      "/luxury-golf-course-sardinia-mediterranean-spa.jpg",
      "/porto-rotondo-sardinia-village-marina-sunset.jpg",
      "/san-pantaleo-sardinia-mountain-village-authentic.jpg"
    ],
    includes: ["green_fees", "buggy", "spa_treatment", "lunch"],
    itinerary: [
      { time: "09:00", en: "Tee time at Pevero Golf", sr: "Vreme za igru u Pevero Golfu" },
      { time: "13:30", en: "Lunch at clubhouse", sr: "Ručak u klubu" },
      { time: "15:00", en: "Spa arrival & welcome", sr: "Dolazak u spa i dobrodošlica" },
      { time: "15:30", en: "90-min signature massage", sr: "90-minutna masaža s potpisom" },
      { time: "17:30", en: "Relaxation time", sr: "Vreme za opuštanje" }
    ]
  },
]

const includesNames: Record<string, { en: string; sr: string }> = {
  professional_crew: { en: "Professional Crew", sr: "Profesionalna posada" },
  fuel: { en: "Fuel", sr: "Gorivo" },
  lunch: { en: "Gourmet Lunch", sr: "Gurmanski ručak" },
  drinks: { en: "Drinks & Champagne", sr: "Piće i šampanjac" },
  snorkeling_gear: { en: "Snorkeling Gear", sr: "Oprema za snorkeling" },
  transport: { en: "Luxury Transport", sr: "Luksuzni prevoz" },
  sommelier: { en: "Expert Sommelier", sr: "Stručni somelijer" },
  wine_tasting: { en: "Wine Tasting", sr: "Degustacija vina" },
  snacks: { en: "Local Snacks", sr: "Lokalne grickalice" },
  hotel_transfer: { en: "Hotel Transfer", sr: "Transfer od hotela" },
  flight: { en: "Helicopter Flight", sr: "Let helikopterom" },
  champagne: { en: "Champagne Toast", sr: "Zdravica šampanjcem" },
  guide: { en: "Local Guide", sr: "Lokalni vodič" },
  private_chef: { en: "Private Chef", sr: "Privatni kuvar" },
  custom_menu: { en: "Custom Menu", sr: "Meni po meri" },
  wine_pairing: { en: "Wine Pairing", sr: "Uparivanje vina" },
  setup: { en: "Luxury Setup", sr: "Luksuzna postavka" },
  equipment: { en: "Diving Equipment", sr: "Oprema za ronjenje" },
  instructor: { en: "Certified Instructor", sr: "Sertifikovani instruktor" },
  boat_transfer: { en: "Boat Transfer", sr: "Transfer brodom" },
  refreshments: { en: "Refreshments", sr: "Osveženje" },
  green_fees: { en: "Green Fees", sr: "Naknade za teren" },
  buggy: { en: "Golf Buggy", sr: "Golf vozilo" },
  spa_treatment: { en: "Spa Treatment", sr: "Spa tretman" },
}

export function ExperienceDetail({ id }: { id: string }) {
  const { language } = useLanguage()
  const experienceId = Number(id)
  const experience = experiences.find((e) => e.id === experienceId)

  if (!experience) {
    return null
  }

  return (
    <section className="pt-36 md:pt-48 pb-16 px-5 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <Link
          href="/experiences"
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
              alt={experience.title} 
              fill 
              className="object-cover" 
            />
          </div>
          <div className="flex flex-col justify-center">
             <div className="flex items-center gap-2 mb-3">
              <MapPin className="w-4 h-4 text-[#C9A962]" />
              <span className="text-[#5A6B70]">{experience.location}</span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl text-[#1B4B5A] mb-4">{experience.title}</h1>
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
              {experience.description[language as "en" | "sr"]}
            </p>
            <div className="flex items-center">
              <Link href="#experience-booking">
                <Button className="bg-[#1B4B5A] hover:bg-[#0D3D4A] text-white rounded-full px-8 py-6 h-auto text-lg">
                  {language === "sr" ? "Zatražite rezervaciju" : "Request Booking"}
                </Button>
              </Link>
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
                {experience.includes.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#C9A962]/20 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 text-[#C9A962]" />
                    </div>
                    <span className="text-[#5A6B70]">{includesNames[item] ? includesNames[item][language as "en" | "sr"] : item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Itinerary */}
            <div>
              <h3 className="font-serif text-2xl text-[#1B4B5A] mb-6">{language === "sr" ? "Plan puta" : "Itinerary"}</h3>
              <div className="space-y-6">
                {experience.itinerary.map((item, index) => (
                  <div key={index} className="flex gap-4 relative">
                    <div className="flex flex-col items-center">
                      <div className="w-3 h-3 rounded-full bg-[#1B4B5A]" />
                      {index !== experience.itinerary.length - 1 && (
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
              <Link href="/contact">
                <Button className="w-full bg-[#1B4B5A] hover:bg-[#0D3D4A] text-white font-medium py-6 text-base rounded-full">
                  {language === "sr" ? "Otvorite kontakt formu" : "Open Contact Form"}
                </Button>
              </Link>
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
