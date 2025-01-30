import Blog from "@/Components/Blog";
import PageHero from "@/ui/PageHero";
import React from "react";

export const metadata = {
  title: "Blogs",
};

const About = () => {
  let routeName = "Blogs";

  return (
    <>
      <PageHero routeName={routeName} imgUrl={"/aboutPage.jpg"} />
      <Blog />
    </>
  );
};

export default About;
