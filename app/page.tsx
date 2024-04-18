import HeroSection from "@/components/sections/HeroSection";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Header></Header>
      <main className="flex min-h-screen flex-col items-center justify-between">
        <HeroSection></HeroSection>
      </main>
      <Footer></Footer>
    </>
  );
}
