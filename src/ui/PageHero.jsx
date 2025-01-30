import React from "react";

const PageHero = ({ routeName, imgUrl }) => {
  return (
    <section className="relative bg-cover bg-center py-12 w-full h-[60vh] sm:h-[70vh] overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-primary bg-opacity-60"></div>

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center w-full h-full mix-blend-overlay"
        style={{ backgroundImage: `url(${imgUrl})` }}
      ></div>

      {/* Centered Route Name */}
      <div className="flex flex-col justify-center items-center mt-5 h-[55vh] sm:h-[65vh] container mx-auto p-2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
        <h1 className="text-4xl font-bold text-white">{routeName}</h1>
      </div>
    </section>
  );
};

export default PageHero;
