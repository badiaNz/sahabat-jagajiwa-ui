// app/components/ChatInput.tsx
import { Mic, SendHorizonal, MoreHorizontal } from 'lucide-react';

const ChatInput = () => {
  return (
    <div className="w-full px-8 pb-4">
      <div className="max-w-3xl mx-auto">
        <div className="relative">
          <input
            type="text"
            placeholder="How to I..."
            className="w-full p-4 pr-28 rounded-full bg-white shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-4">
            <button className="p-2 text-gray-500 hover:text-gray-800">
              <MoreHorizontal size={20} />
            </button>
            <button className="p-2 text-gray-500 hover:text-gray-800">
              <Mic size={20} />
            </button>
            <button className="p-2 ml-2 rounded-full bg-purple-600 text-white hover:bg-purple-700">
              <SendHorizonal size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatInput;