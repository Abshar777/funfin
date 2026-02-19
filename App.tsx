
import React, { useState, useEffect } from 'react';
import { TrendingUp, BookOpen, Shield, Cpu, Target, Layers, Globe, Twitter, Github, Linkedin } from 'lucide-react';
import TradingChart from './components/TradingChart';
import AIChatMentor from './components/AIChatMentor';
import WaitlistForm from './components/WaitlistForm';
import PredictionGame from './components/PredictionGame';

const App: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 14,
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen relative chart-grid selection:bg-emerald-500/30">
      {/* Background Decorative Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-emerald-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-blue-600/10 blur-[100px] rounded-full" />
      </div>

      {/* Navigation */}
      <nav className="relative z-50 px-6 py-8 container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center shadow-lg shadow-emerald-600/20">
            <TrendingUp className="text-white w-6 h-6" />
          </div>
          <span className="text-2xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
            FUN FIN
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
          <a href="#" className="hover:text-emerald-400 transition-colors">Vision</a>
          <a href="#" className="hover:text-emerald-400 transition-colors">Roadmap</a>
          <a href="#" className="hover:text-emerald-400 transition-colors">Community</a>
          <button className="px-5 py-2 rounded-full border border-slate-700 hover:border-emerald-500 text-slate-200 transition-all active:scale-95">
            Log In
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative z-10 pt-12 md:pt-24 pb-12 px-6 container mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/50 border border-slate-700 mb-8 animate-bounce duration-[3000ms]">
          <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
          <span className="text-xs font-bold uppercase tracking-widest text-slate-300">Phase 1 Early Access Open Soon</span>
        </div>
        
        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-6 leading-tight max-w-5xl mx-auto">
          MASTER THE <span className="animate-glow text-emerald-500 italic">MARKETS</span> <br />
          BEFORE THEY OPEN.
        </h1>
        
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12">
          Fun Fin: The next generation trading LMS. Real-time simulations, AI-driven feedback, 
          and a curriculum designed by hedge fund quant analysts.
        </p>

        <div className="flex justify-center mb-16">
          <WaitlistForm />
        </div>

        {/* Countdown */}
        <div className="flex justify-center gap-4 md:gap-8 mb-20">
          {[
            { label: 'Days', value: timeLeft.days },
            { label: 'Hours', value: timeLeft.hours },
            { label: 'Minutes', value: timeLeft.minutes },
            { label: 'Seconds', value: timeLeft.seconds },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="w-16 h-16 md:w-24 md:h-24 bg-slate-900/50 border border-slate-700/50 rounded-2xl flex items-center justify-center mb-2 backdrop-blur-md">
                <span className="text-2xl md:text-4xl font-bold text-white mono">{String(item.value).padStart(2, '0')}</span>
              </div>
              <span className="text-[10px] md:text-xs uppercase tracking-widest font-bold text-slate-500">{item.label}</span>
            </div>
          ))}
        </div>
      </header>

      {/* Playground Area */}
      <section className="relative z-10 container mx-auto px-6 mb-32">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">THE PLAYGROUND</h2>
          <p className="text-slate-400">Test your edge and talk to our AI quant mentor.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 min-h-[600px]">
          {/* Main Chart Section */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            <div className="h-[400px]">
              <TradingChart />
            </div>
            {/* Split row for Stats and Prediction Game */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1">
              <PredictionGame />
              <div className="grid grid-cols-1 gap-4">
                {[
                  { label: 'Platform Latency', value: '4ms', icon: Cpu, detail: 'Proprietary Engine' },
                  { label: 'Success Rate', value: '98.2%', icon: Target, detail: 'Learning Outcome' },
                  { label: 'Active Learners', value: '1.2k', icon: Globe, detail: 'Global Network' },
                ].map((stat, i) => (
                  <div key={i} className="bg-slate-900/40 border border-slate-700/50 rounded-xl p-4 flex items-center gap-4 hover:border-emerald-500/30 transition-all">
                    <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center">
                      <stat.icon className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div>
                      <div className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">{stat.label}</div>
                      <div className="text-lg font-bold text-slate-200">{stat.value}</div>
                      <div className="text-[9px] text-slate-500 uppercase tracking-tighter">{stat.detail}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* AI Advisor Card - Full Height on Right */}
          <div className="lg:col-span-4 min-h-[500px]">
            <AIChatMentor />
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="relative z-10 container mx-auto px-6 mb-32 grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            title: "Simulated Realism",
            desc: "Trade across equities, crypto, and forex with historical and real-time paper accounts.",
            icon: Layers,
            color: "text-blue-400"
          },
          {
            title: "AI Risk Analysis",
            desc: "Gemini-powered feedback on your trades to identify psychological biases and risk exposure.",
            icon: BookOpen,
            color: "text-emerald-400"
          },
          {
            title: "Quant Curriculum",
            desc: "Learn from strategies used by institutional desk traders, not social media gurus.",
            icon: Shield,
            color: "text-purple-400"
          }
        ].map((feature, i) => (
          <div key={i} className="p-8 rounded-3xl bg-slate-900/30 border border-slate-700/50 backdrop-blur-sm group hover:border-emerald-500/50 transition-all">
            <div className={`w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
              <feature.icon className={`w-6 h-6 ${feature.color}`} />
            </div>
            <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
            <p className="text-slate-400 leading-relaxed">{feature.desc}</p>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-slate-800 pt-16 pb-8 px-6 bg-slate-900/20 backdrop-blur-xl">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-emerald-600 rounded flex items-center justify-center">
                  <TrendingUp className="text-white w-5 h-5" />
                </div>
                <span className="text-xl font-bold tracking-tighter">FUN FIN</span>
              </div>
              <p className="text-slate-500 max-w-sm mb-8">
                Pioneering the future of financial education through 
                interactive technology and artificial intelligence.
              </p>
              <div className="flex gap-4">
                <a href="#" className="p-2 rounded-lg bg-slate-800 hover:bg-emerald-600/20 transition-colors">
                  <Twitter className="w-5 h-5 text-slate-400 hover:text-emerald-400" />
                </a>
                <a href="#" className="p-2 rounded-lg bg-slate-800 hover:bg-emerald-600/20 transition-colors">
                  <Github className="w-5 h-5 text-slate-400 hover:text-emerald-400" />
                </a>
                <a href="#" className="p-2 rounded-lg bg-slate-800 hover:bg-emerald-600/20 transition-colors">
                  <Linkedin className="w-5 h-5 text-slate-400 hover:text-emerald-400" />
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-slate-200">The Platform</h4>
              <ul className="space-y-4 text-slate-500 text-sm">
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Marketplace</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">AI Mentor</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Simulation Lab</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Certifications</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-slate-200">Company</h4>
              <ul className="space-y-4 text-slate-500 text-sm">
                <li><a href="#" className="hover:text-emerald-400 transition-colors">About</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Career</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Terms</a></li>
              </ul>
            </div>
          </div>
          <div className="text-center pt-8 border-t border-slate-800 text-slate-600 text-[10px] uppercase tracking-[0.2em]">
            &copy; 2024 Fun Fin Technologies. Built for the next 1%.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
