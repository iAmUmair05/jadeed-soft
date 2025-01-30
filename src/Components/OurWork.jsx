"use client";

import React from "react";
import {
  FaRegClipboard,
  FaRegLightbulb,
  FaCog,
  FaCheckCircle,
} from "react-icons/fa";

const OurWork = () => {
  const steps = [
    {
      title: "Briefing",
      description: "Gathering requirements to understand your needs.",
      icon: <FaRegClipboard className="w-10 h-10 text-[#FF6F61]" />,
    },
    {
      title: "Idea Generating",
      description: "Brainstorming innovative strategies for your project.",
      icon: <FaRegLightbulb className="w-10 h-10 text-[#FFD700]" />,
    },
    {
      title: "Processing",
      description: "Implementing solutions with precision and care.",
      icon: <FaCog className="w-10 h-10 text-[#4CAF50]" />,
    },
    {
      title: "Finishing",
      description: "Final review and delivery of the project.",
      icon: <FaCheckCircle className="w-10 h-10 text-[#9C27B0]" />,
    },
  ];

  return (
    <div className="custom-container sm:my-20 my-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="main-heading">Our Work Process</h2>
        <p className="mt-4 text-para">
          Discover a spectrum of cutting-edge digital marketing services
          tailored to elevate your online presence and drive engagement.
        </p>
        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-secondary hover:bg-cyan-700 cursor-pointer rounded-lg shadow-lg shadow-cyan-500/10 p-6 flex flex-col items-center text-center "
            >
              <div className="mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold dark-heading">
                {step.title}
              </h3>
              <p className="mt-2 text-para">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurWork;
