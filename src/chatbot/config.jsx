import { createChatBotMessage } from "react-chatbot-kit";
import BotAvatar from "./BotAvatar";

const botName = "Jadeed Soft";

const config = {
  botName: botName,
  initialMessages: [
    createChatBotMessage(`Welcome to ${botName}! How can we assist you today?`),
  ],
  customComponents: {
    botAvatar: (props) => <BotAvatar {...props} />,
  },
  widgets: [],
};

export default config;
