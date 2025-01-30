import AchievementsSection from "@/Components/AchievementsSection";
import Benefits from "@/Components/Benefits";
import OurWork from "@/Components/OurWork";
import TestimonialSection from "@/Components/TestimonialSection";
import PageHero from "@/ui/PageHero";
import React from "react";

export const metadata = {
  title: "Why Choose Us",
};

const WhyChooseUs = () => {
  let routeName = "Why Choose Us";
  return (
    <>
      <PageHero routeName={routeName} imgUrl={"/testimonialPage.jpg"} />
      <AchievementsSection />
      <TestimonialSection />
      <OurWork />
      <Benefits />
    </>
  );
};

export default WhyChooseUs;
