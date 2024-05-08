import HeroSection from "@/components/sections/HeroSection";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import PortfolioSection from "@/components/sections/PortfolioSection";

export default function Home() {
  return (
    <>
      <Header></Header>
      <main className="flex min-h-screen flex-col items-center justify-between">
        <HeroSection></HeroSection>
        <PortfolioSection></PortfolioSection>
      </main>
      <Footer></Footer>
    </>
  );
}
