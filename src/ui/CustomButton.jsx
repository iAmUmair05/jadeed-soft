import React from "react";

const CustomButton = ({ onClick, text, className }) => {
  return (
    <div>
      <button
        onClick={onClick}
        className={`${className} before:ease relative overflow-hidden rounded-lg shadow-2xl before:absolute before:left-0 before:-ml-2 before:h-96 before:w-96 before:origin-top-right before:-translate-x-full before:translate-y-12 before:-rotate-90 before:bg-cyan-700 before:transition-all before:duration-300 text-white hover:before:-rotate-180`}
      >
        <span class="relative z-10">{text}</span>
      </button>
    </div>
  );
};

export default CustomButton;
