import HeroSection from "@/components/sections/HeroSection";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import PortfolioSection from "@/components/sections/PortfolioSection";
import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";
import MouseBlob from "@/components/MouseBlob";

export default function Home() {
  return (
    <>
      <Header></Header>
      <MouseBlob></MouseBlob>
      <main className="relative flex min-h-screen flex-col items-center justify-between overflow-hidden">
        <HeroSection></HeroSection>
        <AboutSection></AboutSection>
        <PortfolioSection></PortfolioSection>
        <ContactSection></ContactSection>
      </main>
      <Footer></Footer>
    </>
  );
}
