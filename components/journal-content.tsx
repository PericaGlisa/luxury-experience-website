"use client"

import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock } from "lucide-react"
import { useSearchParams } from "next/navigation"
import { useLanguage } from "@/lib/language-context"

export const journalArticles = [
  {
    id: "1",
    slug: { en: "hidden-beaches-la-maddalena", sr: "skrivene-plaze-la-maddalene" },
    title: {
      en: "Hidden Beaches of La Maddalena",
      sr: "Skrivene plaže La Maddalene",
    },
    excerpt: {
      en: "Discover secluded coves and pristine beaches only accessible by boat in the stunning archipelago.",
      sr: "Otkrijte skrivene uvale i netaknute plaže dostupne samo brodom u zadivljujućem arhipelagu.",
    },
    category: { en: "Travel Guide", sr: "Vodič" },
    date: "Dec 10, 2025",
    readTime: "5 min",
    image: "/la-maddalena-islands-sardinia-turquoise-water.jpg",
    featured: true,
  },
  {
    id: "2",
    slug: { en: "sardinian-wine-terroir-journey", sr: "sardinijsko-vino-putovanje-kroz-teruare" },
    title: {
      en: "Sardinian Wine: A Journey Through Terroir",
      sr: "Sardinijsko vino: Putovanje kroz teruare",
    },
    excerpt: {
      en: "From Cannonau to Vermentino, explore the rich wine heritage of this Mediterranean island.",
      sr: "Od Cannonau do Vermentino, istražite bogato vinsko nasleđe ovog mediteranskog ostrva.",
    },
    category: { en: "Culture", sr: "Kultura" },
    date: "Dec 5, 2025",
    readTime: "7 min",
    image: "/sardinian-vineyard-wine-tasting-luxury.jpg",
    featured: false,
  },
  {
    id: "3",
    slug: { en: "slow-travel-sardinia", sr: "umetnost-sporog-putovanja-na-sardiniji" },
    title: {
      en: "The Art of Slow Travel in Sardinia",
      sr: "Umetnost sporog putovanja na Sardiniji",
    },
    excerpt: {
      en: "Why taking your time unlocks the true essence of this beautiful island.",
      sr: "Zašto odvajanje vremena otkriva pravu suštinu ovog prekrasnog ostrva.",
    },
    category: { en: "Lifestyle", sr: "Životni stil" },
    date: "Nov 28, 2025",
    readTime: "4 min",
    image: "/san-pantaleo-sardinia-mountain-village-authentic.jpg",
    featured: false,
  },
  {
    id: "4",
    slug: { en: "best-restaurants-porto-cervo", sr: "najbolji-restorani-u-porto-cervu" },
    title: {
      en: "Best Restaurants in Porto Cervo",
      sr: "Najbolji restorani u Porto Cervu",
    },
    excerpt: {
      en: "Our curated list of exceptional dining experiences in Costa Smeralda's capital.",
      sr: "Naša selekcija izuzetnih gastronomskih iskustava u prestonici Costa Smeralde.",
    },
    category: { en: "Dining", sr: "Gastronomija" },
    date: "Nov 20, 2025",
    readTime: "6 min",
    image: "/porto-cervo-luxury-marina-sardinia-yachts.jpg",
    featured: false,
  },
  {
    id: "5",
    slug: { en: "yacht-etiquette-guide", sr: "jahting-etikecija-vodic-za-pocetnike" },
    title: {
      en: "Yacht Etiquette: A First-Timer's Guide",
      sr: "Jahting etikecija: Vodič za početnike",
    },
    excerpt: {
      en: "Everything you need to know before embarking on your first luxury yacht charter.",
      sr: "Sve što treba da znate pre nego što se ukrcate na vaš prvi luksuzni jahting čarter.",
    },
    category: { en: "Tips", sr: "Saveti" },
    date: "Nov 15, 2025",
    readTime: "8 min",
    image: "/luxury-yacht-sailing-mediterranean-costa-smeralda.jpg",
    featured: false,
  },
]

export function JournalContent() {
  const { language, getUrl } = useLanguage()
  const searchParams = useSearchParams()

  const query = searchParams.get("q")?.toLowerCase().trim() || ""
  const categorySlug = searchParams.get("category") || ""

  const getCategorySlug = (name: string) =>
    name
      .toLowerCase()
      .replace(/&/g, "and")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "")

  const filteredArticles = journalArticles.filter((article) => {
    const matchesCategory = categorySlug
      ? getCategorySlug(article.category.en) === categorySlug
      : true

    if (!query) {
      return matchesCategory
    }

    const haystack = [
      article.title.en,
      article.title.sr,
      article.excerpt.en,
      article.excerpt.sr,
      article.category.en,
      article.category.sr,
    ]
      .join(" ")
      .toLowerCase()

    const matchesQuery = haystack.includes(query)

    return matchesCategory && matchesQuery
  })

  const hasFilters = Boolean(query || categorySlug)

  const featuredArticle = hasFilters
    ? null
    : filteredArticles.find((a) => a.featured)

  const regularArticles = hasFilters
    ? filteredArticles
    : filteredArticles.filter((a) => !a.featured)

  const currentCategoryLabel =
    categorySlug &&
    journalArticles.find(
      (article) => getCategorySlug(article.category.en) === categorySlug,
    )?.category[language as "en" | "sr"]

  return (
    <section className="pt-36 md:pt-48 pb-16 px-5 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Hero */}
        <div className="text-center mb-16">
          <p className="text-[#C9A962] text-sm font-medium tracking-widest uppercase mb-4">
            {language === "sr" ? "Priče i inspiracija" : "Stories & Inspiration"}
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-[#1B4B5A] mb-6">
            {language === "sr" ? "Maestrale žurnal" : "Maestrale Journal"}
          </h1>
          <p className="text-[#5A6B70] text-lg max-w-2xl mx-auto">
            {language === "sr"
              ? "Uronite u priče, savete i inspiraciju za vaše sledeće luksuzno putovanje."
              : "Dive into stories, tips, and inspiration for your next luxury journey."}
          </p>
        </div>

        {hasFilters && (
          <div className="mb-10 text-center">
            {query && (
              <p className="text-sm text-[#5A6B70]">
                {language === "sr" ? "Rezultati pretrage za: " : "Search results for: "}
                <span className="font-semibold text-[#1B4B5A]">“{query}”</span>
              </p>
            )}
            {currentCategoryLabel && (
              <p className="text-sm text-[#5A6B70] mt-2">
                {language === "sr" ? "Kategorija: " : "Category: "}
                <span className="font-semibold text-[#1B4B5A]">
                  {currentCategoryLabel}
                </span>
              </p>
            )}
            {!filteredArticles.length && (
              <p className="text-sm text-[#5A6B70] mt-4">
                {language === "sr"
                  ? "Nema objava koje odgovaraju zadatim filterima."
                  : "There are no posts matching the selected filters."}
              </p>
            )}
          </div>
        )}

        {!hasFilters && featuredArticle && (
          <div className="mb-12">
            <Link href={getUrl(`/journal/${featuredArticle.slug[language as "en" | "sr"]}`)}>
              <div className="group relative h-[500px] rounded-3xl overflow-hidden cursor-pointer">
                <Image
                  src={featuredArticle.image || "/placeholder.svg"}
                  alt={featuredArticle.title[language as "en" | "sr"]}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1B4B5A] via-[#1B4B5A]/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white">
                  <span className="inline-block px-4 py-1 bg-[#C9A962] text-[#1B4B5A] text-xs font-medium rounded-full mb-4">
                    {featuredArticle.category[language as "en" | "sr"]}
                  </span>
                  <h2 className="font-serif text-3xl md:text-4xl mb-4 max-w-2xl">
                    {featuredArticle.title[language as "en" | "sr"]}
                  </h2>
                  <p className="text-white/80 mb-4 max-w-xl">{featuredArticle.excerpt[language as "en" | "sr"]}</p>
                  <div className="flex items-center gap-4 text-sm text-white/70">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" /> {featuredArticle.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" /> {featuredArticle.readTime} {language === "sr" ? "čitanja" : "read"}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* Articles Grid - Added Link wrappers */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularArticles.map((article) => (
            <Link
              key={article.id}
              href={getUrl(`/journal/${article.slug[language as "en" | "sr"]}`)}
              className="group flex flex-col h-full"
            >
                <div className="relative h-52 rounded-2xl overflow-hidden mb-4">
                  <Image
                    src={article.image || "/placeholder.svg"}
                    alt={article.title[language as "en" | "sr"]}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <span className="text-xs text-[#C9A962] font-medium uppercase tracking-wide">
                  {article.category[language as "en" | "sr"]}
                </span>
                <h3 className="font-serif text-lg text-[#1B4B5A] mt-1 mb-2 group-hover:text-[#40B5AD] transition-colors">
                  {article.title[language as "en" | "sr"]}
                </h3>
                <div className="flex items-center gap-3 text-xs text-[#5A6B70]">
                  <span>{article.date}</span>
                  <span>•</span>
                  <span>
                    {article.readTime} {language === "sr" ? "čitanja" : "read"}
                  </span>
                </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
