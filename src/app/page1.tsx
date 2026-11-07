
'use client';

import { useState, useRef, useEffect, FormEvent } from 'react';

type Message = {
  sender: 'user' | 'ai';
  text: string;
};

export default function HomePage() {
  const [input, setInput] = useState<string>('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { sender: 'user', text: input };
    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);
    setInput('');

    try {
      const response = await fetch('http://localhost:8000/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: input }),
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
    <div className="flex flex-col h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white font-sans">
      {/* Header */}
      <header className="p-6 border-b border-gray-700 shadow-md text-center bg-gray-900">
        <h1 className="text-3xl font-bold text-cyan-400">Sahabat JagaJiwa</h1>
        <p className="text-sm text-gray-400 mt-1 italic">
          PENTING: Saya adalah AI pendamping, bukan pengganti profesional medis.
        </p>
      </header>

      {/* Chat Area */}
      <main className="flex-1 overflow-y-auto p-6 space-y-4 scrollbar-thin scrollbar-thumb-gray-600">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-lg px-5 py-3 rounded-2xl shadow transition-all duration-300 ${
                msg.sender === 'user'
                  ? 'bg-cyan-600 text-white rounded-br-sm'
                  : 'bg-gray-700 text-gray-100 rounded-bl-sm'
              }`}
            >
              <p className="text-sm whitespace-pre-wrap">{msg.text}</p>
            </div>
          </div>
        ))}

        {isLoading && (
          <div className="flex justify-start">
            <div className="px-5 py-3 bg-gray-700 rounded-2xl shadow flex gap-1">
              <span className="h-2 w-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]" />
              <span className="h-2 w-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]" />
              <span className="h-2 w-2 bg-gray-400 rounded-full animate-bounce" />
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </main>

      {/* Input */}
      <footer className="p-4 border-t border-gray-700 bg-gray-900">
        <form onSubmit={handleSubmit} className="flex items-center gap-3 max-w-4xl mx-auto">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSubmit(e);
              }
            }}
            placeholder="Tuliskan apa yang Anda rasakan..."
            className="flex-1 p-3 bg-gray-800 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 resize-none overflow-hidden"
            rows={1}
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="px-5 py-3 bg-cyan-600 rounded-xl font-semibold hover:bg-cyan-700 transition disabled:bg-gray-600 disabled:cursor-not-allowed"
          >
            Kirim
          </button>
        </form>
      </footer>
    </div>
  );
}
