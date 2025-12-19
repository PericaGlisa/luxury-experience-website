"use client"

import { useState } from "react"
import Image from "next/image"
import { MessageCircle, X, Send } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function WhatsAppWidget() {
  const { language } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState("")

  const phoneNumber = "381653198728"
  
  const handleSend = () => {
    if (!message.trim()) return
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank")
    setMessage("")
    setIsOpen(false)
  }

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 flex flex-col items-end pointer-events-none">
      {/* Chat Window */}
      <div
        className={cn(
          "mb-4 w-[calc(100vw-2rem)] sm:w-[320px] bg-white rounded-2xl shadow-2xl border border-[#C9A962]/30 overflow-hidden transition-all duration-300 transform origin-bottom-right pointer-events-auto",
          isOpen ? "scale-100 opacity-100 translate-y-0" : "scale-95 opacity-0 translate-y-10 pointer-events-none"
        )}
      >
        {/* Header */}
        <div className="bg-[#C9A962] p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 rounded-full bg-white border border-white/20 overflow-hidden shadow-sm relative flex items-center justify-center">
              <div className="relative w-[115%] h-[115%] flex items-center justify-center">
                <Image
                  src="/logo.png"
                  alt="Maestrale Logo"
                  fill
                  className="object-contain scale-150 translate-y-[3px]"
                  priority
                />
              </div>
            </div>
            <div>
              <p className="text-white font-medium text-sm">
                {language === "sr" ? "Maestrale podrška" : "Maestrale Support"}
              </p>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 bg-[#1B4B5A] rounded-full animate-pulse" />
                <span className="text-white/90 text-[11px] font-medium uppercase tracking-wider">
                  {language === "sr" ? "Na mreži" : "Online"}
                </span>
              </div>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-white/80 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-4 bg-[#F7F4EE]/30">
          <div className="bg-white rounded-xl p-3 shadow-sm border border-[#C9A962]/10 mb-4">
            <p className="text-[#5A6B70] text-sm leading-relaxed">
              {language === "sr" 
                ? "Zdravo! Kako vam možemo pomoći u planiranju vašeg luksuznog odmora na Sardiniji?" 
                : "Hello! How can we help you plan your luxury Sardinia getaway?"}
            </p>
          </div>
          
          <div className="space-y-3">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={language === "sr" ? "Vaša poruka..." : "Your message..."}
              className="w-full bg-white border border-[#C9A962]/20 rounded-xl p-4 text-sm text-[#1B4B5A] placeholder:text-[#5A6B70]/50 focus:outline-none focus:ring-2 focus:ring-[#C9A962]/30 min-h-[120px] resize-none shadow-inner transition-all"
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault()
                  handleSend()
                }
              }}
            />
            <Button
              onClick={handleSend}
              disabled={!message.trim()}
              className="w-full bg-[#C9A962] hover:bg-[#C9A962]/90 text-white h-12 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-[#C9A962]/20 transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:scale-100 font-medium"
            >
              <span>{language === "sr" ? "Pošaljite poruku" : "Send Message"}</span>
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Footer */}
        <div className="p-3 bg-white border-t border-[#F7F4EE] text-center">
          <p className="text-[10px] text-[#5A6B70]/60 uppercase tracking-widest">
            {language === "sr" ? "Obično odgovaramo odmah" : "We typically reply instantly"}
          </p>
        </div>
      </div>

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95 group relative pointer-events-auto",
          isOpen ? "bg-white text-[#C9A962] rotate-90" : "bg-[#C9A962] text-white"
        )}
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <>
            <MessageCircle className="w-7 h-7" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#1B4B5A] rounded-full border-2 border-white">
              <span className="absolute inset-0 rounded-full bg-[#1B4B5A] animate-ping opacity-75" />
            </span>
          </>
        )}
      </button>
    </div>
  )
}
