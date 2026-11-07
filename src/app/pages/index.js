import ChatSidebar from "@/components/ChatSidebar";
import ChatWindow from "@/components/ChatWindow";
import MessageInput from "@/components/MessageInput";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-gray-100 relative">
      <ChatSidebar />
      <div className="flex flex-col flex-1">
        <ChatWindow />
        <MessageInput />
      </div>
    </div>
  );
}
