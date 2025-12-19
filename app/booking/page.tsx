import { useEffect, useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/lib/language-context"
import { Calendar, Clock, ShieldCheck, Sparkles } from "lucide-react"

declare global {
  interface Window {
    Cal: any;
  }
}

export default function BookingPage() {
  const { language } = useLanguage()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    (function (C: any, A: string, L: string) {
      let p = function (a: any, ar: any) { a.q.push(ar); };
      let d = C.document;
      C.Cal = C.Cal || function () {
        let cal = C.Cal;
        let ar = arguments;
        if (!cal.loaded) {
          cal.ns = {};
          cal.q = cal.q || [];
          d.head.appendChild(d.createElement("script")).src = A;
          cal.loaded = true;
        }
        if (ar[0] === L) {
          const api: any = function () { p(api, arguments); };
          const namespace = ar[1];
          api.q = api.q || [];
          if (typeof namespace === "string") {
            cal.ns[namespace] = cal.ns[namespace] || api;
            p(cal.ns[namespace], ar);
            p(cal, ["initNamespace", namespace]);
          } else p(cal, ar);
          return;
        }
        p(cal, ar);
      };
    })(window, "https://app.cal.eu/embed/embed.js", "init");

    if (window.Cal) {
      window.Cal("init", "15min", { origin: "https://app.cal.eu" });

      window.Cal.ns["15min"]("inline", {
        elementOrSelector: "#my-cal-inline-15min",
        config: { 
          "layout": "month_view", 
          "theme": "light"
        },
        calLink: "maestralelux/15min",
      });

      window.Cal.ns["15min"]("ui", {
        "theme": "light",
        "cssVarsPerTheme": {
          "light": { "cal-brand": "#1B4B5A" },
          "dark": { "cal-brand": "#C9A962" }
        },
        "hideEventTypeDetails": false,
        "layout": "month_view"
      });

      // Hiding skeleton after some time (approximate load time)
      const timer = setTimeout(() => setIsLoading(false), 1500);
      return () => clearTimeout(timer);
    }
  }, [language])

  return (
    <main className="min-h-screen bg-[#F7F4EE] relative overflow-hidden">
      <Header />
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#C9A962]/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-[#1B4B5A]/5 blur-[100px] rounded-full translate-y-1/3 -translate-x-1/4 pointer-events-none" />
      
      <section className="relative pt-32 md:pt-44 pb-20 px-5 md:px-10 lg:px-20 z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header Section with Premium Accents */}
          <div className="text-center mb-16 relative">
            <div className="flex justify-center mb-6">
              <div className="bg-white/50 backdrop-blur-sm border border-[#C9A962]/20 rounded-full px-4 py-1.5 flex items-center gap-2 shadow-sm">
                <Sparkles className="w-4 h-4 text-[#C9A962]" />
                <span className="text-[#C9A962] text-[10px] md:text-xs font-medium tracking-[0.2em] uppercase">
                  {language === "sr" ? "Ekskluzivni Termini" : "Exclusive Availability"}
                </span>
              </div>
            </div>
            
            <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl font-light text-[#1B4B5A] mb-8 tracking-tight leading-[1.1]">
              {language === "sr" ? (
                <>Zakažite <span className="italic">Vaš</span> Trenutak</>
              ) : (
                <>Book <span className="italic">Your</span> Moment</>
              )}
            </h1>
            
            <p className="text-[#5A6B70] text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
              {language === "sr"
                ? "Personalizovane konsultacije kreirane prema vašim potrebama. Odaberite vreme za razgovor o vašem sledećem luksuznom iskustvu."
                : "Personalized consultations tailored to your needs. Select a time to discuss your next luxury experience."}
            </p>

            {/* Quick Benefits/Trust Badges */}
            <div className="flex flex-wrap justify-center gap-6 mt-10">
              <div className="flex items-center gap-2 text-[#8A9499]">
                <Clock className="w-4 h-4" />
                <span className="text-sm font-light italic">{language === "sr" ? "15-min razgovor" : "15-min session"}</span>
              </div>
              <div className="flex items-center gap-2 text-[#8A9499]">
                <ShieldCheck className="w-4 h-4" />
                <span className="text-sm font-light italic">{language === "sr" ? "Privatne konsultacije" : "Private consultation"}</span>
              </div>
            </div>
          </div>

          {/* Booking Container with Premium Styling */}
          <div className="relative group">
            {/* Outer Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#C9A962]/10 via-[#1B4B5A]/5 to-[#C9A962]/10 rounded-[2.5rem] blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 pointer-events-none" />
            
            <div className="relative bg-white/80 backdrop-blur-md border border-white/50 rounded-[2rem] p-3 md:p-6 shadow-2xl overflow-hidden min-h-[700px]">
              {/* Skeleton Loader */}
              {isLoading && (
                <div className="absolute inset-0 z-20 bg-[#FBFBFB] flex flex-col items-center justify-center p-8 space-y-6">
                  <div className="w-16 h-16 border-4 border-[#F7F4EE] border-t-[#C9A962] rounded-full animate-spin" />
                  <div className="space-y-4 w-full max-w-md">
                    <div className="h-4 bg-[#F7F4EE] rounded-full w-3/4 mx-auto animate-pulse" />
                    <div className="h-4 bg-[#F7F4EE] rounded-full w-1/2 mx-auto animate-pulse" />
                  </div>
                </div>
              )}

              {/* Cal.com Embed */}
              <div 
                id="my-cal-inline-15min" 
                className="w-full h-full min-h-[700px] md:min-h-[600px] transition-opacity duration-700"
                style={{ opacity: isLoading ? 0 : 1 }}
              />
            </div>
          </div>

          {/* Bottom Trust Section */}
          <div className="mt-16 grid md:grid-cols-3 gap-8 text-center max-w-5xl mx-auto">
            <div className="p-6">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm border border-[#F7F4EE]">
                <Calendar className="w-6 h-6 text-[#1B4B5A]" />
              </div>
              <h3 className="font-serif text-[#1B4B5A] text-lg mb-2">{language === "sr" ? "Fleksibilnost" : "Flexibility"}</h3>
              <p className="text-[#8A9499] text-sm font-light">{language === "sr" ? "Lako otkažite ili promenite termin" : "Easy cancellation or rescheduling"}</p>
            </div>
            <div className="p-6">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm border border-[#F7F4EE]">
                <ShieldCheck className="w-6 h-6 text-[#1B4B5A]" />
              </div>
              <h3 className="font-serif text-[#1B4B5A] text-lg mb-2">{language === "sr" ? "Sigurnost" : "Security"}</h3>
              <p className="text-[#8A9499] text-sm font-light">{language === "sr" ? "Vaši podaci su potpuno zaštićeni" : "Your data is fully protected"}</p>
            </div>
            <div className="p-6">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm border border-[#F7F4EE]">
                <Sparkles className="w-6 h-6 text-[#1B4B5A]" />
              </div>
              <h3 className="font-serif text-[#1B4B5A] text-lg mb-2">{language === "sr" ? "Premium Podrška" : "Premium Support"}</h3>
              <p className="text-[#8A9499] text-sm font-light">{language === "sr" ? "Direktan pristup našem timu" : "Direct access to our expert team"}</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
