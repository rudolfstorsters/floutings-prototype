"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle, Send } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const times = ["9:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00"];
const SVC_COUNT = 10;

export default function BookingForm() {
  const { t } = useLanguage();
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", date: "", time: "", service: "", notes: "" });

  const set = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const subject = encodeURIComponent(`Flouting rezervācija – ${form.service}`);
    const body = encodeURIComponent(
      `Sveiki,\n\nVēlos rezervēt flouting seansu.\n\n` +
      `Vārds: ${form.name}\nE-pasts: ${form.email}\nTālrunis: ${form.phone}\n` +
      `Pakalpojums: ${form.service}\nVēlamais datums: ${form.date}\nVēlamais laiks: ${form.time}\n` +
      `Piezīmes: ${form.notes || "Nav"}\n\nPateicos!`
    );
    window.location.href = `mailto:floutings1@gmail.com?subject=${subject}&body=${body}`;
    setTimeout(() => { setLoading(false); setSent(true); }, 800);
  };

  const today = new Date().toISOString().split("T")[0];
  const services = Array.from({ length: SVC_COUNT }, (_, i) => t(`booking.svc.${i}`));

  return (
    <section id="booking" className="py-24 md:py-32 bg-[#2c3e50]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[#9bbfbf] text-xs tracking-[0.5em] uppercase mb-4 font-light">
            {t("booking.eyebrow")}
          </p>
          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-light text-white leading-tight"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            {t("booking.h2.1")}
            <br />
            <span className="text-[#9bbfbf]">{t("booking.h2.2")}</span>
          </h2>
          <p className="mt-4 text-[#c8d8d8] font-light">{t("booking.subtitle")}</p>
        </div>

        {sent ? (
          <div className="text-center py-16">
            <CheckCircle size={48} className="text-[#4a7c7c] mx-auto mb-6" />
            <h3
              className="text-3xl font-light text-white mb-4"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              {t("booking.success.title")}
            </h3>
            <p className="text-[#c8d8d8] font-light mb-8 max-w-md mx-auto">
              {t("booking.success.text")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setSent(false)}
                className="px-8 py-3 border border-white/20 text-white text-sm tracking-[0.2em] uppercase hover:bg-white/10 transition-colors rounded-sm"
              >
                {t("booking.success.new")}
              </button>
              <a
                href="tel:+37120233733"
                className="px-8 py-3 bg-[#4a7c7c] text-white text-sm tracking-[0.2em] uppercase hover:bg-[#5a8c8c] transition-colors rounded-sm text-center"
              >
                {t("booking.success.call")}
              </a>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Row 1: Name + Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs tracking-[0.2em] uppercase text-[#9bbfbf] font-light mb-2">
                  {t("booking.field.name")}
                </label>
                <input type="text" value={form.name} onChange={set("name")} required
                  placeholder="Jānis Bērziņš"
                  className="w-full bg-[#1a2e2e] border border-[#4a7c7c]/30 text-white placeholder-[#6a8a8a] px-4 py-3 rounded-sm focus:outline-none focus:border-[#4a7c7c] transition-colors font-light" />
              </div>
              <div>
                <label className="block text-xs tracking-[0.2em] uppercase text-[#9bbfbf] font-light mb-2">
                  {t("booking.field.email")}
                </label>
                <input type="email" value={form.email} onChange={set("email")} required
                  placeholder="janis@piemers.lv"
                  className="w-full bg-[#1a2e2e] border border-[#4a7c7c]/30 text-white placeholder-[#6a8a8a] px-4 py-3 rounded-sm focus:outline-none focus:border-[#4a7c7c] transition-colors font-light" />
              </div>
            </div>

            {/* Row 2: Phone + Service */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs tracking-[0.2em] uppercase text-[#9bbfbf] font-light mb-2">
                  {t("booking.field.phone")}
                </label>
                <input type="tel" value={form.phone} onChange={set("phone")} required
                  placeholder="+371 2X XXX XXX"
                  className="w-full bg-[#1a2e2e] border border-[#4a7c7c]/30 text-white placeholder-[#6a8a8a] px-4 py-3 rounded-sm focus:outline-none focus:border-[#4a7c7c] transition-colors font-light" />
              </div>
              <div>
                <label className="block text-xs tracking-[0.2em] uppercase text-[#9bbfbf] font-light mb-2">
                  {t("booking.field.service")}
                </label>
                <select value={form.service} onChange={set("service")} required
                  className="w-full bg-[#1a2e2e] border border-[#4a7c7c]/30 text-white px-4 py-3 rounded-sm focus:outline-none focus:border-[#4a7c7c] transition-colors font-light appearance-none cursor-pointer">
                  <option value="" disabled>{t("booking.service.placeholder")}</option>
                  {services.map((s) => (
                    <option key={s} value={s} className="bg-[#1a2e2e]">{s}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Row 3: Date + Time */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs tracking-[0.2em] uppercase text-[#9bbfbf] font-light mb-2">
                  {t("booking.field.date")}
                </label>
                <input type="date" value={form.date} onChange={set("date")} required min={today}
                  className="w-full bg-[#1a2e2e] border border-[#4a7c7c]/30 text-white px-4 py-3 rounded-sm focus:outline-none focus:border-[#4a7c7c] transition-colors font-light" />
              </div>
              <div>
                <label className="block text-xs tracking-[0.2em] uppercase text-[#9bbfbf] font-light mb-2">
                  {t("booking.field.time")}
                </label>
                <select value={form.time} onChange={set("time")} required
                  className="w-full bg-[#1a2e2e] border border-[#4a7c7c]/30 text-white px-4 py-3 rounded-sm focus:outline-none focus:border-[#4a7c7c] transition-colors font-light appearance-none cursor-pointer">
                  <option value="" disabled>{t("booking.time.placeholder")}</option>
                  {times.map((t2) => (
                    <option key={t2} value={t2} className="bg-[#1a2e2e]">{t2}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Notes */}
            <div>
              <label className="block text-xs tracking-[0.2em] uppercase text-[#9bbfbf] font-light mb-2">
                {t("booking.field.notes")}
              </label>
              <textarea value={form.notes} onChange={set("notes")}
                placeholder={t("booking.notes.placeholder")}
                rows={4}
                className="w-full bg-[#1a2e2e] border border-[#4a7c7c]/30 text-white placeholder-[#6a8a8a] px-4 py-3 rounded-sm focus:outline-none focus:border-[#4a7c7c] transition-colors font-light resize-none" />
            </div>

            {/* GDPR note */}
            <p className="text-xs text-[#6a8a8a] font-light">
              {t("booking.gdpr")}
            </p>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-5 bg-[#4a7c7c] text-white text-sm tracking-[0.3em] uppercase hover:bg-[#5a8c8c] transition-all duration-300 rounded-sm flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
            >
              {loading ? (
                <span>{t("booking.submitting")}</span>
              ) : (
                <>
                  <Send size={16} />
                  <span>{t("booking.submit")}</span>
                </>
              )}
            </button>

            {/* Alternative */}
            <div className="text-center pt-2">
              <p className="text-[#6a8a8a] text-xs font-light">
                {t("booking.or")}{" "}
                <a href="tel:+37120233733" className="text-[#9bbfbf] hover:text-white transition-colors">
                  +371 20 233 733
                </a>
              </p>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
