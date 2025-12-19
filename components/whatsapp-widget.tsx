"use client"

import { useState } from "react"
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
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat Window */}
      <div
        className={cn(
          "mb-4 w-[320px] bg-white rounded-2xl shadow-2xl border border-[#C9A962]/20 overflow-hidden transition-all duration-300 transform origin-bottom-right",
          isOpen ? "scale-100 opacity-100 translate-y-0" : "scale-95 opacity-0 translate-y-10 pointer-events-none"
        )}
      >
        {/* Header */}
        <div className="bg-[#1B4B5A] p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
              <MessageCircle className="w-6 h-6 text-[#C9A962]" />
            </div>
            <div>
              <p className="text-white font-medium text-sm">Maestrale Support</p>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-white/60 text-xs">
                  {language === "sr" ? "Na mreži" : "Online"}
                </span>
              </div>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-white/60 hover:text-white transition-colors"
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
          
          <div className="relative">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={language === "sr" ? "Vaša poruka..." : "Your message..."}
              className="w-full bg-white border border-[#C9A962]/20 rounded-xl p-3 text-sm text-[#1B4B5A] placeholder:text-[#5A6B70]/50 focus:outline-none focus:ring-2 focus:ring-[#C9A962]/30 min-h-[100px] resize-none"
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
              className="absolute bottom-2 right-2 bg-[#1B4B5A] hover:bg-[#1B4B5A]/90 text-white w-8 h-8 rounded-lg p-0 flex items-center justify-center transition-all disabled:opacity-50"
            >
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
          "w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95 group relative",
          isOpen ? "bg-white text-[#1B4B5A] rotate-90" : "bg-[#1B4B5A] text-white"
        )}
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <>
            <MessageCircle className="w-7 h-7" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#C9A962] rounded-full border-2 border-[#1B4B5A]">
              <span className="absolute inset-0 rounded-full bg-[#C9A962] animate-ping opacity-75" />
            </span>
          </>
        )}
      </button>
    </div>
  )
}
