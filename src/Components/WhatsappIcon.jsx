"use client";

import React from "react";
import Image from "next/image";
import whatsapp from "../../public/whatsapp.png";

const WhatsAppIcon = () => {
  const handleClick = () => {
    const url = `https://wa.me/923038896297`;
    window.open(url, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="fixed z-20 bottom-20 sm:right-6 right-4"
    >
      <Image
        src={whatsapp}
        width={100}
        height={100}
        alt="whatsapp"
        className="w-[60px] hover:scale-110 duration-200"
      />
    </button>
  );
};

export default WhatsAppIcon;
