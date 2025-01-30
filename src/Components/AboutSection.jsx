"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { useInView, motion } from "framer-motion";
import { useRouter } from "next/navigation";
import CustomButton from "@/ui/CustomButton";

const AboutSection = () => {
  const router = useRouter();

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const contentVariants = {
    hidden: { x: "-50vw", opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1 } },
  };

  const imageVariants = {
    hidden: { x: "50vw", opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1 } },
  };

  return (
    <section className="custom-container sm:my-24 my-10">
      <div
        ref={ref}
        className="justify-center overflow-hidden items-center flex-col-reverse lg:flex-row flex gap-4"
      >
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={contentVariants}
          className="w-full lg:w-1/2"
        >
          {/* <h1 className="dark-heading text-left mb-2">Who We Are</h1> */}

          <h1 className="text-heading text-4xl font-bold text-left">
            Jadeed Soft Technologies - Leading Software Development Firm
          </h1>
          <p className="text-para mt-6 sx:text-sm">
            Jadeed Soft is a leading provider of IT solutions with a focus on
            custom software development, web design, web development, mobile
            applications, animation, and social media marketing. Over the years,
            we have served thousands of clients worldwide, leveraging our
            expertise and experience in delivering top-notch services tailored
            to meet our clients' diverse needs. At Jadeed Soft, we are committed
            to innovation, quality, and client satisfaction, striving to exceed
            expectations and drive success in the ever-evolving digital
            landscape.
          </p>
          {/* <button
            onClick={() => router.push("/about")}
            className="btn-redish mt-6"
          >
            About Us
          </button> */}

          <CustomButton
            onClick={() => router.push("/whyChooseUs")}
            className="py-2.5 px-6 mt-4 bg-heading"
            text={"About Us"}
          />
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={imageVariants}
          className="w-full lg:w-1/2"
        >
          <Image
            src="/about.jpg"
            alt="about img"
            width={500}
            height={500}
            className="w-full rounded object-center"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
