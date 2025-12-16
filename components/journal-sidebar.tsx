"use client"

import Link from "next/link"
import Image from "next/image"
import { Search, ChevronRight } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { journalArticles } from "@/components/journal-content"

export function JournalSidebar() {
  const { language, t } = useLanguage()

  const getCategorySlug = (name: string) =>
    name
      .toLowerCase()
      .replace(/&/g, "and")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "")

  const categoryMap = new Map<
    string,
    { slug: string; labelEn: string; labelSr: string; count: number }
  >()

  for (const article of journalArticles) {
    const key = article.category.en
    const existing = categoryMap.get(key)
    if (existing) {
      existing.count += 1
    } else {
      categoryMap.set(key, {
        slug: getCategorySlug(article.category.en),
        labelEn: article.category.en,
        labelSr: article.category.sr,
        count: 1,
      })
    }
  }

  const categories = Array.from(categoryMap.values()).map((cat) => ({
    label: language === "sr" ? cat.labelSr : cat.labelEn,
    count: cat.count,
    href: `/journal?category=${encodeURIComponent(cat.slug)}`,
  }))

  const recentPosts = [
    {
      title: language === "sr" ? "Najbolji restorani u Porto Cervu" : "Best Restaurants in Porto Cervo",
      date: "Nov 20, 2025",
      image: "/luxury-private-dining-sunset-mediterranean.jpg",
      href: "/journal/4",
    },
    {
      title: language === "sr" ? "Jahting etikecija: Vodič" : "Yacht Etiquette: A Guide",
      date: "Nov 15, 2025",
      image: "/luxury-yacht-sailing-mediterranean-costa-smeralda.jpg",
      href: "/journal/5",
    },
    {
      title: language === "sr" ? "Jesen na Sardiniji" : "Autumn in Sardinia",
      date: "Oct 28, 2025",
      image: "/san-pantaleo-sardinia-mountain-village-authentic.jpg",
      href: "/journal/3",
    },
  ]

  return (
    <aside className="space-y-10">
      <form action="/journal" method="GET" className="relative">
        <input
          type="text"
          name="q"
          placeholder={language === "sr" ? "Pretraga..." : "Search..."}
          className="w-full pl-4 pr-12 py-3 bg-white border border-[#E8E0D0] rounded-xl focus:outline-none focus:border-[#1B4B5A] focus:ring-1 focus:ring-[#1B4B5A] transition-all"
        />
        <button
          type="submit"
          className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-[#5A6B70]"
        >
          <Search className="w-5 h-5" />
        </button>
      </form>

      {/* Categories */}
      <div>
        <h3 className="font-serif text-xl text-[#1B4B5A] mb-6 border-b border-[#E8E0D0] pb-2">
          {language === "sr" ? "Kategorije" : "Categories"}
        </h3>
        <ul className="space-y-3">
          {categories.map((cat) => (
            <li key={cat.label}>
              <Link
                href={cat.href}
                className="flex items-center justify-between group text-[#5A6B70] hover:text-[#C9A962] transition-colors"
              >
                <span className="flex items-center gap-2">
                  <ChevronRight className="w-4 h-4 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                  {cat.label}
                </span>
                <span className="text-xs bg-[#F0EDE5] px-2 py-1 rounded-full text-[#1B4B5A]">{cat.count}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Recent Posts */}
      <div>
        <h3 className="font-serif text-xl text-[#1B4B5A] mb-6 border-b border-[#E8E0D0] pb-2">
          {language === "sr" ? "Nedavne objave" : "Recent Posts"}
        </h3>
        <div className="space-y-6">
          {recentPosts.map((post) => (
            <Link key={post.title} href={post.href} className="flex gap-4 group">
              <div className="relative w-20 h-20 shrink-0 rounded-lg overflow-hidden">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div>
                <h4 className="font-medium text-[#1B4B5A] leading-tight mb-1 group-hover:text-[#C9A962] transition-colors line-clamp-2">
                  {post.title}
                </h4>
                <p className="text-xs text-[#5A6B70]">{post.date}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="bg-[#1B4B5A] p-6 rounded-2xl text-white text-center">
        <h3 className="font-serif text-xl mb-2">
          {language === "sr" ? "Planirate putovanje na Sardiniju?" : "Planning a trip to Sardinia?"}
        </h3>
        <p className="text-sm text-white/80 mb-4">
          {language === "sr"
            ? "Pišite našem timu i dobićete personalizovane predloge ruta, hotela i iskustava širom Sardinije."
            : "Reach out to our team for tailored routes, hotels, and experiences across Sardinia."}
        </p>
        <Link href="/contact">
          <button className="w-full bg-[#C9A962] hover:bg-[#b09351] text-[#1B4B5A] font-medium py-2 rounded-lg text-sm transition-colors">
            {language === "sr" ? "Otvorite kontakt formu" : "Open contact form"}
          </button>
        </Link>
      </div>
    </aside>
  )
}
