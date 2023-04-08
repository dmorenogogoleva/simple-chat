import { Message } from "@/types";
import { ChatMessage } from "../ChatMessage/ChatMessage";

interface ChatLayoutProps {
  messages?: Message[];
}

export const ChatLayout: React.FC<ChatLayoutProps> = ({ messages }) => {
  if (!messages || !messages.length) return <div>no messages</div>;

  return (
    <div>
      {messages.map((msg) => (
        <ChatMessage key={msg.id} message={msg} />
      ))}
    </div>
  );
};
