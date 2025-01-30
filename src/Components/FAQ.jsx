"use client";
import React, { useState } from "react";
import { IoAddCircleOutline, IoRemoveCircleOutline } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeTab, setActiveTab] = useState("Custom Software");

  const faqData = {
    "Custom Software": [
      {
        question: "Custom software system vs off-the-shelf",
        answer:
          "Custom software solutions are designed to meet the specific needs of your business, offering flexibility, scalability, and complete ownership of the system. These solutions are ideal for businesses with unique processes or long-term growth objectives, as they allow for seamless adjustments over time.\n\nOff-the-shelf software, on the other hand, provides a quick and cost-effective way to meet general requirements. However, it often lacks the ability to adapt to specialized business workflows and may come with limited customization options. The choice depends on your business complexity, budget, and future scalability needs.",
      },
      {
        question: "Is a custom software system right for my business?",
        answer:
          "If your business requires unique functionalities, integration with existing systems, or scalability for future growth, custom software is the right choice. It ensures a solution that is fully aligned with your objectives and offers long-term value. However, for simpler, short-term needs, off-the-shelf software might suffice.",
      },
      {
        question: "What to expect when building a custom software system",
        answer:
          "When building a custom software system, expect a structured process that starts with understanding your requirements, followed by design, development, testing, and deployment. Regular updates and collaboration ensure the final product meets your expectations. The process includes detailed timelines, ongoing support, and the flexibility to adapt to changing needs.",
      },
    ],
    Management: [
      {
        question: "How to outsource software development?",
        answer:
          "Outsourcing software development involves selecting a reliable partner with expertise in your required technology stack and a proven track record. Start by defining your project scope, budget, and timelines. Evaluate vendors based on their portfolio, client reviews, and technical expertise. Establish clear communication channels and use project management tools to ensure smooth collaboration and timely delivery.",
      },
      {
        question: "Can I scale my development team if needed?",
        answer:
          "Yes, scalability is a key advantage of outsourcing. You can easily adjust the team size based on your project requirements. Whether you need to ramp up resources for a critical phase or downscale after completion, we offer flexible engagement models to ensure you only pay for what you need.",
      },
      {
        question: "How can I vet your developers' expertise?",
        answer:
          "We ensure transparency by providing detailed profiles of our developers, including their skills, certifications, and project experience. You can request technical interviews, coding assessments, or review past projects to verify their expertise and suitability for your specific requirements.",
      },
    ],
    Support: [
      {
        question:
          "Will you provide any support after the completion of the project?",
        answer:
          "Yes, we offer comprehensive post-launch support to address any issues, ensure smooth functionality, and make necessary adjustments. Our support packages include regular maintenance, bug fixes, and performance monitoring to keep your system running optimally.",
      },
      {
        question: "Do your prices include ongoing support and maintenance?",
        answer:
          "Our pricing models include flexible options for ongoing support and maintenance. You can choose a package that best fits your needs, whether it's regular updates, troubleshooting, or full-scale system management.",
      },
      {
        question: "What if I need to update my software in the future?",
        answer:
          "We provide long-term support for all our solutions. Whether you need to add new features, integrate additional tools, or make updates to meet evolving business needs, our team is equipped to assist you with seamless upgrades and modifications.",
      },
    ],
  };

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
    setActiveIndex(null);
  };

  return (
    <div className="relative py-6 px-2 sm:my-20 my-8">
      <div className="relative max-w-5xl mx-auto border rounded-lg mt-8 overflow-hidden bg-black/50">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        >
          <source
            src="https://www.syberry.com/videos/faq-background.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="relative sm:p-12 p-4 bg-transparent">
          <h2 className="sm:text-5xl text-3xl font-bold text-[#fff] mb-6 mt-5">
            FAQ&apos;s
          </h2>
          <div className="w-full bg-white h-[2px] mb-8"></div>
          <div className="flex gap-1 justify-start sm:justify-start mb-10 flex-wrap">
            {Object.keys(faqData).map((tab) => (
              <button
                key={tab}
                onClick={() => handleTabClick(tab)}
                className={`px-2 py-2 sm:px-3 sm:py-2 rounded-full shadow transition ${
                  activeTab === tab
                    ? "bg-heading text-black border border-primary"
                    : "bg-transparent text-white border border-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="space-y-4 mb-11">
            {faqData[activeTab]?.length > 0 ? (
              faqData[activeTab].map((faq, index) => (
                <div
                  key={index}
                  className="bg-transparent rounded-lg shadow-md p-4 w-full border border-white transition-all duration-300"
                >
                  <div
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() => toggleFAQ(index)}
                    tabIndex={0}
                    role="button"
                    aria-expanded={activeIndex === index}
                  >
                    <h3 className="text-lg font-bold text-white">
                      {faq.question}
                    </h3>
                    <span className="flex items-center justify-center">
                      {activeIndex === index ? (
                        <IoRemoveCircleOutline size={28} color="white" />
                      ) : (
                        <IoAddCircleOutline size={28} color="white" />
                      )}
                    </span>
                  </div>
                  <AnimatePresence>
                    {activeIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="mt-2 text-para">{faq.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))
            ) : (
              <p className="text-white">No FAQs available at the moment.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
