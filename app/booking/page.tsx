"use client"

import { useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/lib/language-context"

declare global {
  interface Window {
    Cal: any;
  }
}

export default function BookingPage() {
  const { language } = useLanguage()

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
        config: { "layout": "month_view", "theme": "light" },
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
    }
  }, [])

  return (
    <main className="min-h-screen bg-[#F7F4EE]">
      <Header />
      
      <section className="pt-36 md:pt-48 pb-16 px-5 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#C9A962] text-sm font-medium tracking-widest uppercase mb-4">
              {language === "sr" ? "Zakazivanje" : "Booking"}
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-[#1B4B5A] mb-6">
              {language === "sr" ? "Zakažite konsultacije" : "Book a Consultation"}
            </h1>
            <p className="text-[#5A6B70] text-lg max-w-2xl mx-auto">
              {language === "sr"
                ? "Odaberite termin koji vam najviše odgovara za kratke konsultacije sa našim timom."
                : "Choose a time that works best for you for a brief consultation with our team."}
            </p>
          </div>

          <div className="bg-white rounded-3xl p-4 md:p-8 shadow-sm overflow-hidden min-h-[600px]">
            <div 
              id="my-cal-inline-15min" 
              style={{ width: "100%", height: "100%", minHeight: "600px", overflow: "scroll" }}
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
