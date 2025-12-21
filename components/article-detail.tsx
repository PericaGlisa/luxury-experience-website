"use client"

import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, ArrowLeft, User, Tag, ChevronRight } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { notFound } from "next/navigation"

import { journalArticles } from "@/lib/data"
import { JournalSidebar } from "@/components/journal-sidebar"

export function ArticleDetail({ id }: { id: string }) {
  const { language, getUrl } = useLanguage()
  const article = journalArticles.find((a) => a.id === id || a.slug.en === id || a.slug.sr === id)
  
  if (!article) {
    notFound()
  }

  return (
    <section className="pt-36 md:pt-48 pb-16 px-5 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <Link
          href={getUrl("/journal")}
          className="inline-flex items-center gap-2 text-[#5A6B70] hover:text-[#1B4B5A] mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{language === "sr" ? "Nazad na žurnal" : "Back to Journal"}</span>
        </Link>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Hero Image */}
            <div className="relative h-[300px] md:h-[450px] rounded-3xl overflow-hidden mb-8">
              <Image
                src={article.image || "/placeholder.svg?height=450&width=800&query=sardinia travel"}
                alt={article.title[language as "en" | "sr"]}
                fill
                className="object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="px-4 py-2 bg-[#C9A962] text-[#1B4B5A] text-sm font-medium rounded-full">
                  {article.category[language as "en" | "sr"]}
                </span>
              </div>
            </div>

            {/* Article Meta */}
            <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-[#5A6B70]">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>
                  {article.readTime} {language === "sr" ? "čitanja" : "read"}
                </span>
              </div>
            </div>

            {/* Title */}
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#1B4B5A] mb-8">
              {article.title[language as "en" | "sr"]}
            </h1>

            {/* Content */}
            <div
              className="prose prose-lg max-w-none text-[#5A6B70] 
                [&>p]:mb-6 [&>p]:leading-relaxed
                [&>h2]:font-serif [&>h2]:text-2xl [&>h2]:text-[#1B4B5A] [&>h2]:mt-10 [&>h2]:mb-4
                [&>ul]:list-disc [&>ul]:ml-6 [&>ul]:mb-6
                [&>ol]:list-decimal [&>ol]:ml-6 [&>ol]:mb-6"
              dangerouslySetInnerHTML={{ __html: article.content[language as "en" | "sr"] }}
            />

            {/* Tags */}
            <div className="flex items-center gap-3 mt-10 pt-8 border-t border-[#E8E4DC]">
              <Tag className="w-4 h-4 text-[#5A6B70]" />
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-[#F7F4EE] text-[#5A6B70] text-sm rounded-full">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 space-y-8">
              {/* About Author */}
              <div className="bg-[#F7F4EE] rounded-2xl p-6">
                <h4 className="font-serif text-lg text-[#1B4B5A] mb-4">
                  {language === "sr" ? "O autoru" : "About the Author"}
                </h4>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full bg-[#1B4B5A] flex items-center justify-center text-white font-serif text-xl">
                    {article.author
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <p className="font-medium text-[#1B4B5A]">{article.author}</p>
                    <p className="text-sm text-[#5A6B70]">{language === "sr" ? "Saradnik" : "Contributing Writer"}</p>
                  </div>
                </div>
                <p className="text-sm text-[#5A6B70]">
                  {language === "sr"
                    ? "Zaljubljenik u Sardiniju koji deli priče o kulturi, hrani i skrivenim draguljima ovog ostrva."
                    : "A Sardinia enthusiast sharing stories about the island's culture, food, and hidden gems."}
                </p>
              </div>

              <JournalSidebar />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
