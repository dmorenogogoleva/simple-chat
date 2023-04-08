import React, { useState } from "react";
import { ChatInput } from "../ChatInput/ChatInput";
import { ChatLayout } from "../ChatLayout/ChatLayout";
import { Message } from "@/types";
import styles from "@/components/ChatContainer/ChatContainer.module.css";

interface ChatContainerProps {
  id?: any;
}

export const ChatContainer: React.FC<ChatContainerProps> = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  console.log("messages:", messages);
  const addMessage = (message: Message) => {
    setMessages((prev) => [...prev, message]);
  };

  return (
    <div className={styles.container}>
      <ChatLayout messages={messages} />
      <ChatInput onClick={addMessage} />
    </div>
  );
};
