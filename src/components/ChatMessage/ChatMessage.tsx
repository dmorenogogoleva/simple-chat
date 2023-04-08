import { Message } from "@/types";

interface ChatMessageProps {
  message?: Message;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  if (!message || !message.text) return null;

  return <p>{message?.text}</p>;
};
