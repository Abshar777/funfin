
import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User } from 'lucide-react';
import { chatWithMentor } from '../services/geminiService';
import { Message } from '../types';

const AIChatMentor: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: "Welcome to FUNFIN. I'm your AI mentor. Ask me anything about our courses, mentorship sessions, or how to level up your learning journey." }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const response = await chatWithMentor(messages, input);
    setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    setIsLoading(false);
  };

  return (
    <div className="flex flex-col h-full bg-white/[0.02] rounded-3xl border border-white/5 overflow-hidden backdrop-blur-lg">
      <div className="p-4 border-b border-white/5 flex items-center justify-between bg-white/5">
        <div className="flex items-center gap-2">
          <Bot className="w-5 h-5 text-funfin-yellow" />
          <span className="font-bold text-white">FUNFIN AI Mentor</span>
        </div>
        <div className="text-[10px] uppercase tracking-widest text-funfin-blue font-black px-2 py-1 border border-funfin-blue/20 rounded bg-funfin-blue/10">
          Gemini-Powered
        </div>
      </div>

      <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] p-4 rounded-2xl text-sm font-medium ${
              msg.role === 'user' 
                ? 'bg-funfin-blue text-white rounded-br-none' 
                : 'bg-white/5 text-slate-200 border border-white/5 rounded-bl-none'
            }`}>
              {msg.content}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-white/5 p-4 rounded-2xl rounded-bl-none border border-white/5 flex gap-1 items-center">
              <div className="w-1.5 h-1.5 bg-funfin-yellow rounded-full animate-bounce" />
              <div className="w-1.5 h-1.5 bg-funfin-yellow rounded-full animate-bounce [animation-delay:0.2s]" />
              <div className="w-1.5 h-1.5 bg-funfin-yellow rounded-full animate-bounce [animation-delay:0.4s]" />
            </div>
          </div>
        )}
      </div>

      <div className="p-4 bg-white/5 border-t border-white/5">
        <form onSubmit={(e) => { e.preventDefault(); handleSend(); }} className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about courses or mentorship..."
            className="flex-1 bg-funfin-dark border border-white/10 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-funfin-yellow text-slate-200"
          />
          <button 
            type="submit"
            disabled={isLoading}
            className="bg-funfin-yellow hover:bg-white p-2 rounded-xl transition-all disabled:opacity-50 shadow-lg shadow-funfin-yellow/10"
          >
            <Send className="w-4 h-4 text-funfin-dark" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default AIChatMentor;
