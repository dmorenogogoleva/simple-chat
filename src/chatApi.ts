import { Message } from "./types";
import { getRandomString } from "./utils";

const mockMessages = [
  { id: "1", text: "Hello" },
  { id: "2", text: "Hello! How is it going?" },
  { id: "3", text: "Fine, thanks" },
  { id: "4", text: "Nothing to say" },
];

export function getMessages(num = 50): Promise<Message[]> {
  const messages: Message[] = [];

  for (let i = 0; i <= num; i++) {
    messages.push({ id: getRandomString(2), text: getRandomString() });
  }

  return Promise.resolve(messages);
}

export function getMessage(): Promise<Message> {
  return Promise.resolve({
    id: `${Math.floor(Math.random())}`,
    text: getRandomString(),
  });
}
