"use client";

import { LanguageProvider } from "@/context/LanguageContext";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import FloatingInfo from "@/components/FloatingInfo";
import Benefits from "@/components/Benefits";
import Services from "@/components/Services";
import Romantic from "@/components/Romantic";
import Individual from "@/components/Individual";
import Products from "@/components/Products";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import GiftCard from "@/components/GiftCard";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import BookingForm from "@/components/BookingForm";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";

export default function Home() {
  return (
    <LanguageProvider>
      <Navbar />
      <main>
        <Hero />
        <About />
        <FloatingInfo />
        <Benefits />
        <Services />
        <Romantic />
        <Individual />
        <Products />
        <Gallery />
        <Testimonials />
        <GiftCard />
        <FAQ />
        <Contact />
        <BookingForm />
      </main>
      <Footer />
      <MobileCTA />
    </LanguageProvider>
  );
}
