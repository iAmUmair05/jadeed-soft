"use client";

import React, { useState } from "react";
import { BsChatDots } from "react-icons/bs";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import config from "./config";
import MessageParser from "./MessageParser";
import ActionProvider from "./ActionProvider";
import "./Chatbot.css";

const ChatbotComponent = () => {
  const [showChatbot, setShowChatbot] = useState(false);

  const handleToggleChatbot = () => {
    setShowChatbot(!showChatbot);
  };

  return (
    <div className="fixed sm:bottom-4 bottom-2 sm:right-5 right-3 z-[9999]">
      <button
        onClick={handleToggleChatbot}
        className="bg-[#376B7E] border-none rounded-full w-14 h-14 flex items-center justify-center cursor-pointer shadow-lg transition-all hover:scale-110 duration-200"
      >
        <BsChatDots className="text-white" size={28} />
      </button>

      {showChatbot && (
        <div className="fixed bottom-20 right-6 shadow-lg rounded-lg overflow-hidden transition-all z-[9999]">
          <Chatbot
            config={config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
          />
        </div>
      )}
    </div>
  );
};

export default ChatbotComponent;
