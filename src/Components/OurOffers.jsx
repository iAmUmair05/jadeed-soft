"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const offers = [
  {
    id: "01",
    title: "Dedicated Development Team",
    description:
      "Collaborate with our exceptional engineers and seamlessly integrate them into your workflows.",
    icon: "fas fa-users-cog",
  },
  {
    id: "02",
    title: "Custom Software Development",
    description:
      "Transform your ideas into ready-to-deploy software solutions tailored to your needs.",
    icon: "fas fa-laptop-code",
  },
  {
    id: "03",
    title: "Frontend Development",
    description:
      "Develop advanced frontend interfaces leveraging React and Angular frameworks.",
    icon: "fas fa-code",
  },
  {
    id: "04",
    title: "Backend Development",
    description:
      "Build robust backend systems utilizing ASP.NET and Node.js technologies.",
    icon: "fas fa-server",
  },
  {
    id: "05",
    title: "Mobile Development",
    description:
      "Design cross-platform mobile applications with Xamarin, Flutter, and React Native.",
    icon: "fas fa-mobile-alt",
  },
  {
    id: "06",
    title: "Software Quality Assurance",
    description:
      "Boost your testing efficiency, improve quality, and expedite time-to-market.",
    icon: "fas fa-clipboard-check",
  },
];

const OurOffers = () => {
  
  const animationRef = useRef(null);
  const isInView = useInView(animationRef, { once: true });

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };
  return (
    <section className="py-16">
      <div className="container mx-auto px-6 lg:px-20">
        <motion.div
          initial={{ y: 70, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="main-heading">Our Offerings</h2>
        </motion.div>
        <div
          ref={animationRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {offers.map((offer, index) => (
            <motion.div
              variants={cardVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{ duration: 0.3, delay: index * 0.4 }}
              key={index}
              className="bg-[#131827] shadow-lg rounded-lg p-6 "
            >
              <div className="flex items-center space-x-4">
                <i
                  className={`${offer.icon} text-[#faa32f]`}
                  style={{ fontSize: "2rem" }}
                ></i>
                <h3 className="text-xl font-semibold text-[#1e293b]">
                  {offer.title}
                </h3>
              </div>

              <p className="mt-4 text-para">{offer.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurOffers;
