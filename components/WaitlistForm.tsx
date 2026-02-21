
import React, { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const WaitlistForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="flex items-center gap-3 bg-funfin-green/10 border border-funfin-green/50 p-4 rounded-xl text-funfin-green animate-in fade-in duration-500">
        <CheckCircle2 className="w-6 h-6 shrink-0" />
        <p className="font-semibold">You're in! We'll notify you when the platform launches.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full max-w-lg">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        className="flex-1 bg-white/5 border border-white/10 focus:border-funfin-blue outline-none px-6 py-4 rounded-2xl text-white backdrop-blur-sm transition-all text-lg"
      />
      <button 
        type="submit"
        className="group bg-funfin-blue hover:bg-funfin-blue/90 text-white font-bold px-8 py-4 rounded-2xl transition-all flex items-center justify-center gap-2 whitespace-nowrap active:scale-95 text-lg shadow-lg shadow-funfin-blue/20"
      >
        Join Waitlist
        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </button>
    </form>
  );
};

export default WaitlistForm;
