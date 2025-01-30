import AboutSection from "@/Components/AboutSection";
import AchievementsSection from "@/Components/AchievementsSection";
import ContactForm from "@/Components/ContactForm";
import FAQ from "@/Components/FAQ";
import GoogleMap from "@/Components/GoogleMap";
import HeroSection from "@/Components/HeroSection";
import OurTeam from "@/Components/OurTeam";
import OurWork from "@/Components/OurWork";
import Portfolio from "@/Components/Portfolio";
import ServicesSection from "@/Components/ServicesSection";
import Technologies from "@/Components/Technologies";
import TestimonialSection from "@/Components/TestimonialSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AchievementsSection />
      <AboutSection />
      <ServicesSection />
      <Portfolio />
      {/* <Technologies /> */}
      <TestimonialSection />
      <OurWork />
      <FAQ />
      {/* <OurTeam /> */}
      <ContactForm />
      <GoogleMap />
    </div>
  );
}
