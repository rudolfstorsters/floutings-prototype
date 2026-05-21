"use client";

import Image from "next/image";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const images = [
  { src: "http://floutings.lv/wp-content/uploads/2022/04/2.jpg",                                            alt: "Floutings lielā divvietīgā kabīne",  caption: "Lielā divvietīgā kabīne" },
  { src: "http://floutings.lv/wp-content/uploads/2022/09/750x485-300x194.jpeg",                             alt: "Floutings seanss",                   caption: "Floutinga seanss" },
  { src: "http://floutings.lv/wp-content/uploads/2023/11/float-tank-dallas-isolation-1-300x201.jpg",        alt: "Floutinga kabīne",                   caption: "Sensorās izolācijas kabīne" },
  { src: "http://floutings.lv/wp-content/uploads/2021/09/IMG_20201110_195613_918-1-240x300.jpg",            alt: "Floutings telpa",                    caption: "Privātā telpa" },
  { src: "http://floutings.lv/wp-content/uploads/2020/11/20201110_191740-1-146x300.jpg",                   alt: "Floutings interjers",                caption: "Interjers" },
  { src: "http://floutings.lv/wp-content/uploads/2020/11/20201110_192046-146x300.jpg",                     alt: "Floutings atpūtas zona",             caption: "Atpūtas zona" },
  { src: "http://floutings.lv/wp-content/uploads/2013/11/9-205x300.jpg",                                   alt: "Floutings kabīne no iekšas",         caption: "Kabīne no iekšas" },
  { src: "http://floutings.lv/wp-content/uploads/2013/11/6-300x225.jpg",                                   alt: "Floutings — bezsvara pieredze",      caption: "Bezsvara pieredze" },
  { src: "http://floutings.lv/wp-content/uploads/2022/04/2-300x300.jpg",                                   alt: "Floutings kabīnes skats",            caption: "Kabīnes skats" },
  { src: "http://floutings.lv/wp-content/uploads/2022/04/5f6adccd0c72e-5-300x153.jpg",                     alt: "Floutings sāls ūdens",               caption: "Epsom sāls ūdens" },
  { src: "http://floutings.lv/wp-content/uploads/2021/09/20210911_125619-1-216x300.jpg",                   alt: "Floutings seanss",                   caption: "Seanss" },
  { src: "http://floutings.lv/wp-content/uploads/2022/09/20201110_190421-1-146x300.jpg",                   alt: "Floutings ieeja",                    caption: "Ieeja" },
  { src: "http://floutings.lv/wp-content/uploads/2022/09/Pregnant-Woman-Float-Room-2-300x300.jpg",         alt: "Floutings — grūtniecēm",             caption: "Drošs grūtniecēm" },
  { src: "http://floutings.lv/wp-content/uploads/2022/04/j-300x167.jpg",                                   alt: "Floutings interjers",                caption: "Telpu interjers" },
  { src: "http://floutings.lv/wp-content/uploads/2013/11/11-300x168.jpg",                                  alt: "Floutings — relaksācija",            caption: "Relaksācija" },
  { src: "http://floutings.lv/wp-content/uploads/2023/01/rija-vef-1920-1080-300x169.jpg",                  alt: "Hotel Rija VEF — Floutings atrašanās vieta", caption: "Hotel Rija VEF" },
];

export default function Gallery() {
  const { t } = useLanguage();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const prev = () =>
    setLightboxIndex((i) => (i !== null ? (i - 1 + images.length) % images.length : null));
  const next = () =>
    setLightboxIndex((i) => (i !== null ? (i + 1) % images.length : null));

  return (
    <section id="gallery" className="py-24 md:py-32 bg-deep">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#9bbfbf] text-xs tracking-[0.5em] uppercase mb-4 font-light">
            {t("gallery.eyebrow")}
          </p>
          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-light text-white leading-tight"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            {t("gallery.h2.1")}
            <br />
            <span className="text-[#9bbfbf]">{t("gallery.h2.2")}</span>
          </h2>
        </div>

        {/* Masonry-style grid */}
        <div className="columns-2 sm:columns-3 lg:columns-4 gap-3 space-y-3">
          {images.map((img, i) => (
            <button
              key={img.src}
              onClick={() => setLightboxIndex(i)}
              className="break-inside-avoid block w-full relative overflow-hidden rounded-sm group bg-dark-teal"
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={400}
                height={300}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                unoptimized
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <p className="absolute bottom-2 left-3 right-3 text-white text-xs font-light opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-left">
                {img.caption}
              </p>
            </button>
          ))}
        </div>

        {/* Video */}
        <div className="mt-14 text-center">
          <p className="text-[#9bbfbf] text-sm font-light mb-6 tracking-wide">
            {t("gallery.video.label")}
          </p>
          <div className="max-w-3xl mx-auto rounded-sm overflow-hidden shadow-2xl aspect-video">
            <iframe
              src="https://www.youtube.com/embed/cYWuD6f5Up8"
              title="Floutings video"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={() => setLightboxIndex(null)}
        >
          <button
            className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors z-10"
            onClick={() => setLightboxIndex(null)}
            aria-label="Aizvērt"
          >
            <X size={26} />
          </button>

          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors z-10 p-2"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Iepriekšējā"
          >
            <ChevronLeft size={32} />
          </button>

          <div
            className="relative max-w-4xl max-h-[85vh] w-full mx-16"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[lightboxIndex].src}
              alt={images[lightboxIndex].alt}
              width={1200}
              height={800}
              className="w-full h-auto max-h-[80vh] object-contain rounded-sm"
              unoptimized
            />
            <p className="text-center text-white/60 text-sm font-light mt-3">
              {images[lightboxIndex].caption}
              <span className="text-white/30 ml-3">
                {lightboxIndex + 1} / {images.length}
              </span>
            </p>
          </div>

          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors z-10 p-2"
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Nākamā"
          >
            <ChevronRight size={32} />
          </button>
        </div>
      )}
    </section>
  );
}
