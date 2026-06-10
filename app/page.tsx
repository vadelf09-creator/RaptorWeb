import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BrandsMarquee from "@/components/BrandsMarquee";
import Features from "@/components/Features";
import Services from "@/components/Services";
import HomeService from "@/components/HomeService";
import Reviews from "@/components/Reviews";
import FAQ from "@/components/FAQ";
import Business from "@/components/Business";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <BrandsMarquee />
        <Features />
        <Services />
        <HomeService />
        <Reviews />
        <FAQ />
        <Business />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
