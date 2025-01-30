import Image from "next/image";
import React from "react";
import falcoqLogo from "../../public/falcoq-logo2.png";

const BotAvatar = () => {
  return (
    <div className="h-8 w-8 bg-para text-black rounded-full flex items-center justify-center mt-1 mr-1">
      <Image
        src={falcoqLogo}
        alt="Logo"
        width={50}
        height={50}
        className="text-4xl rounded-full font-bold"
      />
    </div>
  );
};

export default BotAvatar;
