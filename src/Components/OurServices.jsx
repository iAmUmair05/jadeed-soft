"use client";
import React, { useRef } from "react";
import {
  FaLaptopCode,
  FaChartLine,
  FaBullhorn,
  FaSearch,
  FaHashtag,
  FaGoogle,
  FaGoogleDrive,
  FaPaintBrush,
} from "react-icons/fa";
import { MdCampaign } from "react-icons/md";
import { motion, useInView } from "framer-motion";

const services = [
  {
    title: "Web Development",
    description:
      "Build a responsive and optimized website with our development services",
    icon: <FaLaptopCode />,
  },
  {
    title: "Google Analytics",
    description:
      "Get deep insights into your audience and traffic with Google Analytics",
    icon: <FaChartLine />,
  },
  {
    title: "Digital Marketing",
    description:
      "Maximize your brand's reach with our digital marketing strategies.",
    icon: <FaBullhorn />,
  },
  {
    title: "SEO (Search Engine Optimization)",
    description:
      "Improve your website’s ranking on search engines with our expert SEO service.",
    icon: <FaSearch />,
  },
  {
    title: "Social Media Marketing",
    description:
      "Engage your audience across social platforms with our marketing solutions.",
    icon: <FaHashtag />,
  },
  {
    title: "PPC Campaign",
    description:
      "Our PPC Campaign service helps you drive targeted traffic to your website.",
    icon: <MdCampaign />,
  },
  {
    title: "Google Search Console",
    description:
      "Utilize Google Search Console for improved search engine visibility.",
    icon: <FaGoogleDrive />,
  },
  {
    title: "Google Ads",
    description:
      "Enhance your local presence with Google My Business Optimization.",
    icon: <FaGoogle />,
  },
  {
    title: "Graphic Designing",
    description:
      "Enhance your brand's design with our expert graphic designing service.",
    icon: <FaPaintBrush />,
  },
];

const OurServices = () => {
  const animationRef = useRef(null);
  const isInView = useInView(animationRef, { once: true });

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div
          ref={animationRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              variants={cardVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{ duration: 0.3, delay: index * 0.4 }}
              key={index}
              className="bg-secondary shadow-lg rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 "
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-heading">
                  {service.title}
                </h3>
                <div className="text-3xl text-buttonColor">{service.icon}</div>
              </div>

              <p className="text-para mb-3">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurServices;
