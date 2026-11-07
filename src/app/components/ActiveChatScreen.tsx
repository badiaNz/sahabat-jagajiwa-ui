// app/components/ActiveChatScreen.tsx
import React from 'react';

// Tipe Message harus sama dengan yang di page.tsx
type Message = {
  sender: 'user' | 'ai';
  text: string;
};

interface ActiveChatScreenProps {
  messages: Message[];
  messagesEndRef: React.RefObject<HTMLDivElement>; // Menerima ref
}

const ActiveChatScreen = ({ messages, messagesEndRef }: ActiveChatScreenProps) => {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-8">AI Chat</h1>
      <div className="space-y-8">
        {messages.map((m, index) => (
          <div key={index} className="flex gap-4">
            {/* Avatar */}
            <div className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center font-bold text-white
              ${m.sender === 'ai' ? 'bg-purple-500' : 'bg-gray-400'}`}>
              {m.sender === 'ai' ? 'AI' : 'U'}
            </div>
            
            {/* Konten Pesan */}
            <div className="flex-1">
              <p className="text-gray-800" style={{ whiteSpace: 'pre-wrap' }}>
                {m.text}
              </p>
            </div>
          </div>
        ))}
        {/* Elemen kosong untuk target scroll */}
        <div ref={messagesEndRef} />
      </div>
    </div>
  );
};

export default ActiveChatScreen;