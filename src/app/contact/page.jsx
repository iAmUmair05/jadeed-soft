import ContactForm from "@/Components/ContactForm";
import GoogleMap from "@/Components/GoogleMap";
import PageHero from "@/ui/PageHero";
import React from "react";

export const metadata = {
  title: "Contact Us",
};

const page = () => {
  let routeName = "Get in Touch";
  return (
    <>
      <PageHero routeName={routeName} imgUrl={"/contactPage.jpg"} />

      <div className="mt-10 sm:mt-24">
        <ContactForm />
      </div>

      <GoogleMap />
    </>
  );
};

export default page;
