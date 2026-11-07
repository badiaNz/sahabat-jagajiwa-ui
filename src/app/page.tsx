// app/page.tsx
"use client";

import { useState, useRef, useEffect, FormEvent } from 'react';
import Sidebar from '@/app/components/Sidebar';
import InitialScreen from '@/app/components/InitialScreen';
import ActiveChatScreen from '@/app/components/ActiveChatScreen';
import { SendHorizonal, MoreHorizontal } from 'lucide-react';

// Tipe Message sesuai dengan kode Anda
type Message = {
  sender: 'user' | 'ai';
  text: string;
};

export default function Home() {
  // State management dari kode Anda
  const [input, setInput] = useState<string>('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  
  // State untuk UI, apakah chat sudah aktif
  const [isChatActive, setIsChatActive] = useState(false);

  // Ref dan useEffect untuk auto-scroll dari kode Anda
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Fungsi handleSubmit dari kode Anda
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    // Menandakan chat sudah aktif saat pertama kali submit
    if (!isChatActive) {
      setIsChatActive(true);
    }

    const userMessage: Message = { sender: 'user', text: input };
    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);
    const currentInput = input;
    setInput('');

    try {
      const response = await fetch('http://localhost:8000/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: currentInput }),
      });

      if (!response.ok) {
        throw new Error('Gagal mendapatkan respons dari server AI.');
      }

      const data = await response.json();
      const aiMessage: Message = { sender: 'ai', text: data.reply || 'Maaf, terjadi kesalahan.' };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error(error);
      const errorMessage: Message = {
        sender: 'ai',
        text: 'Maaf, saya sedang mengalami gangguan. Coba lagi nanti.',
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex h-screen bg-white">
      <Sidebar />
      <main className="flex-1 flex flex-col relative bg-[#F9FAFB]">
        <div className="flex-1 overflow-y-auto p-8 pb-32"> {/* Tambahkan padding bottom */}
          {isChatActive ? (
            <ActiveChatScreen messages={messages} messagesEndRef={messagesEndRef} />
          ) : (
            <InitialScreen onPromptClick={() => setIsChatActive(true)} />
          )}
        </div>

        {/* Form input chat dipindahkan ke sini agar bisa mengontrol state */}
        <div className="absolute bottom-0 left-0 w-full px-8 pb-4 bg-gradient-to-t from-[#F9FAFB] via-[#F9FAFB] to-transparent">
          <div className="max-w-3xl mx-auto">
            <form onSubmit={handleSubmit} className="relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={isLoading ? "Menunggu respons AI..." : "Kirim pesan..."}
                disabled={isLoading}
                className="w-full p-4 pr-28 rounded-full bg-white shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-400 disabled:opacity-75"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <button type="button" className="p-2 text-gray-500 hover:text-gray-800">
                  <MoreHorizontal size={20} />
                </button>
                <button 
                  type="submit" 
                  disabled={isLoading || !input.trim()}
                  className="p-2 ml-1 rounded-full bg-purple-600 text-white hover:bg-purple-700 disabled:bg-purple-300"
                >
                  <SendHorizonal size={20} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}