import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { Pricing } from "@/components/pricing";
import { Testimonials } from "@/components/Testimonials";
import { WhyChooseUs } from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center bg-white font-sans selection:bg-taupe-700 selection:text-white">
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <WhyChooseUs></WhyChooseUs>
      <Testimonials />
      <Pricing />
      <Footer />
    </div>
  );
}
