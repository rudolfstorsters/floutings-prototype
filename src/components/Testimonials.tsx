"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const testimonials = [
  { name: "Ineta Ķirse",       role: "Jogas pasniedzēja",                   quote: "Tavs laimes stāvoklis palielinās par 25%! Tu vaicāsi, kas ir šīs brīnumzāles? Flouting ir atbilde uz daudziem modernās dzīves stresa jautājumiem.", rating: 5 },
  { name: "Pēteris Kļava",     role: "Bērnu ārsts",                         quote: "Iegremdējoties šajā laika mašīnā ir iespējams beidzot atpūsties pašam no sevis. Kā ārsts es to iesaku visiem, kas cīnās ar hronisku nogurumu.", rating: 5 },
  { name: "Valdis Melderis",   role: "Radio Skonto programmu direktors",     quote: "Esmu nodarbojos ar ūdens atletiku. Tomēr floutings sola pievienot arī meditācijas elementu, ko tur neatrast. Absolūti unikāla pieredze.", rating: 5 },
  { name: "Marika Ģederte",    role: "Uzņēmēja",                            quote: "'Pazudusi laikā' – tā varētu dēvēt manas pirmās izjūtas. Stunda pagāja kā piecas minūtes, bet izjūta bija kā pēc nedēļas atvaļinājuma.", rating: 5 },
  { name: "Anna Rozīte",       role: "Raidījumu vadītāja",                  quote: "Floutingu es varētu dēvēt par tādu kā 'restartu' enerģijas atjaunošanai. Pēc seanša jūtos kā jauna persona – gan fiziski, gan garīgi.", rating: 5 },
  { name: "Ivars Jēkabsons",   role: "Mācītājs",                            quote: "Fiziski tas ir kā lidojums bezsvara stāvoklī. Pusnomodas relaksācija, ko nevar aprakstīt – tā jāpieredz. Iesaku visiem saviem draugiem.", rating: 5 },
  { name: "Ivars Timermanis",  role: "Basketbolists",                        quote: "Jau labu laiku šādu atslodzi esmu atklājis apmeklējot Floutingu. Muskuļu atjaunošanās ir ievērojami ātrāka nekā ar jebkuru citu metodi.", rating: 5 },
  { name: "Kristaps Lapiņš",   role: "Interneta reklāmas speciālists",       quote: "Tā ir neatkārtojama, absolūti jauna pieredze apziņai. Radošums pēc flouting seanša ir kā rakete – idejas nāk pašas.", rating: 5 },
  { name: "Inese Apse-Apsīte", role: "Radošais aģents",                     quote: "Sapratīs tikai tas, kas reāli izbaudīs – ceļojums pie sevis. Grūti izskaidrot ar vārdiem, ko jūti, bet es zinu – es atgriezīšos.", rating: 5 },
  { name: "Sergejs Furdaks",   role: "Klients",                             quote: "Spontāna meditācija. Nekad neesmu meditējis, bet pēc flouting es sapratu, par ko visi runā. Tas darbojas.", rating: 5 },
];

export default function Testimonials() {
  const { t } = useLanguage();
  const [current, setCurrent] = useState(0);
  const perPage = 3;
  const pages = Math.ceil(testimonials.length / perPage);
  const visible = testimonials.slice(current * perPage, current * perPage + perPage);

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-[#f5f0e8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#4a7c7c] text-xs tracking-[0.5em] uppercase mb-4 font-light">
            {t("testimonials.eyebrow")}
          </p>
          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-light text-[#2c3e50] leading-tight"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            {t("testimonials.h2.1")}
            <br />
            <span className="text-[#4a7c7c]">{t("testimonials.h2.2")}</span>
          </h2>
          <p className="mt-4 text-[#6a6a6a] font-light">
            {t("testimonials.subtitle")}
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {visible.map((item) => (
            <div
              key={item.name}
              className="bg-white/80 border border-[#e8e0d0] rounded-sm p-8 flex flex-col hover:shadow-md transition-shadow duration-300"
            >
              <Quote size={20} className="text-[#4a7c7c]/30 mb-4 shrink-0" />
              <p className="text-[#4a4a4a] font-light leading-relaxed text-base flex-1 italic">
                "{item.quote}"
              </p>
              <div className="mt-6 pt-4 border-t border-[#e8e0d0]">
                <div className="flex mb-2">
                  {[...Array(item.rating)].map((_, i) => (
                    <span key={i} className="text-[#b8965a] text-sm">★</span>
                  ))}
                </div>
                <p className="font-light text-[#2c3e50]">{item.name}</p>
                <p className="text-xs text-[#8a8a8a] font-light">{item.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={() => setCurrent(Math.max(0, current - 1))}
            disabled={current === 0}
            className="p-2 border border-[#e8e0d0] rounded-full text-[#4a7c7c] hover:bg-[#4a7c7c] hover:text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Iepriekšējās atsauksmes"
          >
            <ChevronLeft size={18} />
          </button>
          <div className="flex gap-2">
            {[...Array(pages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === current ? "bg-[#4a7c7c] w-6" : "bg-[#c8d0d0]"
                }`}
                aria-label={`Lapa ${i + 1}`}
              />
            ))}
          </div>
          <button
            onClick={() => setCurrent(Math.min(pages - 1, current + 1))}
            disabled={current === pages - 1}
            className="p-2 border border-[#e8e0d0] rounded-full text-[#4a7c7c] hover:bg-[#4a7c7c] hover:text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Nākamās atsauksmes"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
