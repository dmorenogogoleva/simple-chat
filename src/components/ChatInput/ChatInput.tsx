import { Message } from "@/types";
import { getRandomString } from "@/utils";
import React, { useState } from "react";
import styles from "@/components/ChatInput/ChatInput.module.css";

interface ChatInputProps {
  onClick: (message: Message) => void;
}

export const ChatInput: React.FC<ChatInputProps> = ({ onClick }) => {
  const [value, setValue] = useState<string>("");

  const addMessage = () => {
    onClick({ id: getRandomString(2), text: value });
    setValue("");
  };

  const handleKeyDown = (event: any) => {
    if (event.code === "Enter") {
      event.preventDefault();
      addMessage();
    }
  };

  return (
    <div className={styles.container}>
      <textarea
        className={styles.input}
        onChange={(e) => setValue(e?.target.value as any)}
        value={value}
        onKeyDown={handleKeyDown}
      />
      <button
        disabled={!value.length}
        className={styles.button}
        onClick={addMessage}
        type="button"
      >
        send
      </button>
    </div>
  );
};
