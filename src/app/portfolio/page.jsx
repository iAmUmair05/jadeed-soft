import OurClients from "@/Components/OurClients";
import PortfolioPage from "@/Components/PortfolioPage";
import PageHero from "@/ui/PageHero";
import React from "react";

export const metadata = {
  title: "Portfolio",
};

const Portfolio = () => {
  let routeName = "Portfolio";
  return (
    <>
      <PageHero routeName={routeName} imgUrl={"/portfolioPage.jpg"} />
      <PortfolioPage />
      <OurClients />
    </>
  );
};

export default Portfolio;
