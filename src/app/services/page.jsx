import ServicesSection from "@/Components/ServicesSection";
import Technologies from "@/Components/Technologies";
import PageHero from "@/ui/PageHero";
import React from "react";

export const metadata = {
  title: "Services",
};

const Services = () => {
  let routeName = "𝖲𝖾𝗋𝗏𝗂𝖼𝖾𝗌";

  return (
    <>
      <PageHero routeName={routeName} imgUrl={"/laptop.jpg"} />
      {/* <OurServices /> */}
      <ServicesSection />
      {/* <OurOffers /> */}
      <div className="sm:mb-24 mb-10">
        <Technologies />
      </div>
    </>
  );
};

export default Services;
