import { Message } from "@/types";
import styles from "./ChatMessage.module.css";

interface ChatMessageProps {
  message?: Message;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  if (!message || !message.text) return null;

  return <p className={styles.message}>{message?.text}</p>;
};
