"use client";

import React from "react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { useRouter } from "next/navigation";
import StarCanvas from "./StarCanvas";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  const router = useRouter();

  return (
    <div className="bg-primary">
      <StarCanvas />
      <div className="custom-container sm:mt-20 mt-8 flex items-center justify-center h-screen w-full z-30 text-center">
        <div className="flex flex-col lg:flex-row items-center justify-center h-full w-full gap-6 text-center lg:text-start">
          <div className="flex flex-col gap-5 justify-center max-w-[600px] mx-auto text-white">
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
              We Transform
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                {" "}
                Your Imagination{" "}
              </span>
              into <br />
              <TypeAnimation
                sequence={[
                  "Reality",
                  1000,
                  "Innovation",
                  1000,
                  "Excellence",
                  1000,
                  "Solutions",
                  1000,
                ]}
                wrapper="span"
                speed={150}
                repeat={Infinity}
              />
            </h1>

            <p className="text-lg text-para mt-3">
              Transfer your ideas to great products and services. Jadeed Soft in
              offering full strategic project guidance throughout the entire
              software development life cycle, ensuring top-notch software
              solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 items-center justify-center lg:justify-start">
              <button
                onClick={() => router.push("/services")}
                className="btn-redish z-10 hover:scale-110"
              >
                Discover More
              </button>
              <button
                onClick={() => router.push("/contact")}
                className="py-2 px-5 border z-10 border-heading text-white rounded-full shadow-md duration-200 hover:scale-110"
              >
                Contact Us
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full basis-[40%] hidden lg:flex h-full justify-center items-center">
            <Image
              src="/herobg.svg"
              alt="work icons"
              height={500}
              width={500}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
