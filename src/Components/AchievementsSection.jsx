"use client";

import React from "react";
import dynamic from "next/dynamic";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faProjectDiagram,
  faUsers,
  faAward,
  faCalendarAlt,
} from "@fortawesome/free-solid-svg-icons";

const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), {
  ssr: false,
});

const achievementsList = [
  {
    metric: "Projects",
    value: 20,
    postfix: "+",
    icon: faProjectDiagram,
  },
  {
    metric: "Users",
    value: 15,
    postfix: "",
    icon: faUsers,
  },
  {
    metric: "Awards",
    value: 5,
    postfix: "",
    icon: faAward,
  },
  {
    metric: "Years",
    value: 5,
    postfix: "+",
    icon: faCalendarAlt,
  },
];

const AchievementsSection = () => {
  return (
    <div className="custom-container sm:my-14 my-6">
      <h1 className="main-heading">𝖠𝖼𝗁𝗂𝖾𝗏𝖾𝗆𝖾𝗇𝗍𝗌</h1>

      <p className="text-para text-center md:mb-12 mt-2 w-full sm:w-2/3 mx-auto mb-6">
        We believe in the power of technology to drive real results and make
        real business impact
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {achievementsList.map((achievement, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-secondary hover:bg-cyan-700 rounded-lg p-6 cursor-pointer shadow-lg shadow-cyan-500/10"
          >
            <FontAwesomeIcon
              icon={achievement.icon}
              className="text-4xl mb-4 text-buttonColor"
            />
            <h2 className="text-4xl font-bold flex flex-row items-center">
              <AnimatedNumbers
                includeComma
                animateToNumber={achievement.value}
                className="text-4xl font-bold text-white"
                transitions={(index) => ({
                  type: "spring",
                  duration: index + 0.3,
                })}
              />
              {achievement.postfix}
            </h2>
            <p className="text-lg font-serif text-para">{achievement.metric}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchievementsSection;
