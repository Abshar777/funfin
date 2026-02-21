
import React, { useState, useEffect } from 'react';
import {
  TrendingUp, BookOpen, Shield, Cpu, Target, Layers, Globe,
  Twitter, Github, Linkedin, CheckCircle2, MessageSquare,
  Gamepad2, Lock, Smartphone, Users, Rocket, PlayCircle,
  ChevronRight, Award, Zap, BarChart3
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import TradingChart from './components/TradingChart';
import AIChatMentor from './components/AIChatMentor';
import WaitlistForm from './components/WaitlistForm';
import PredictionGame from './components/PredictionGame';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('package');

  return (
    <div className="min-h-screen bg-funfin-dark text-slate-100 selection:bg-funfin-yellow/30">
      {/* Background Decorative Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-funfin-blue/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-funfin-green/10 blur-[100px] rounded-full" />
      </div>

      {/* Navigation */}
      <nav className="relative z-50 px-6 py-6 border-b border-white/5 bg-funfin-dark/50 backdrop-blur-md sticky top-0">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img style={{ width: '150px', }} src="/logo.png" alt="Fun Fin" />
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-400">
            <a href="#about" className="hover:text-funfin-yellow transition-colors">About</a>
            <a href="#features" className="hover:text-funfin-yellow transition-colors">Features</a>
            <a href="#how-it-works" className="hover:text-funfin-yellow transition-colors">How it Works</a>
            <button className="px-6 py-2.5 rounded-full bg-funfin-blue hover:bg-funfin-blue/90 text-white font-bold transition-all active:scale-95 shadow-lg shadow-funfin-blue/20">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative z-10 pt-20 pb-32 px-6 container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-funfin-blue/10 border border-funfin-blue/20 mb-8"
        >
          <span className="w-2 h-2 bg-funfin-green rounded-full animate-pulse" />
          <span className="text-xs font-bold uppercase tracking-widest text-funfin-blue">India's Premium Paid package Platform</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.9] max-w-5xl mx-auto"
        >
          LEARN. CONNECT. <br />
          <span className="text-funfin-yellow">COMPETE.</span> SUCCEED.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          Combining structured courses, mentor guidance, and gamified learning —
          all in one powerful mobile package designed for the Indian digital ecosystem.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mb-20"
        >
          <button className="px-8 py-4 rounded-2xl bg-funfin-yellow text-funfin-dark font-black text-lg hover:bg-white transition-all shadow-xl shadow-funfin-yellow/10 flex items-center gap-2">
            Get Started <ChevronRight className="w-5 h-5" />
          </button>
          <button className="px-8 py-4 rounded-2xl bg-white/5 border border-white/10 text-white font-black text-lg hover:bg-white/10 transition-all flex items-center gap-2">
            Explore Courses <PlayCircle className="w-5 h-5" />
          </button>
        </motion.div>

        <div className="flex justify-center">
          <WaitlistForm />
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="relative z-10 py-32 bg-white/[0.02] border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-sm font-black text-funfin-yellow uppercase tracking-[0.3em] mb-4">What is FUNFIN?</h2>
              <h3 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
                A Fully Monetized, <br />
                <span className="text-funfin-blue">Mobile-First</span> package.
              </h3>
              <p className="text-slate-400 text-lg mb-6 leading-relaxed">
                FUNFIN is designed for Indian learners who want structured learning with real mentor support and engaging game-based experiences.
              </p>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                Unlike free platforms, FUNFIN delivers premium, high-quality education where every feature is designed for serious learning and measurable progress.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-4 rounded-2xl bg-funfin-dark border border-white/5">
                  <div className="text-3xl font-black text-funfin-green mb-1">1000+</div>
                  <div className="text-xs uppercase font-bold text-slate-500 tracking-wider">Lesson Capacity</div>
                </div>
                <div className="p-4 rounded-2xl bg-funfin-dark border border-white/5">
                  <div className="text-3xl font-black text-funfin-yellow mb-1">24/7</div>
                  <div className="text-xs uppercase font-bold text-slate-500 tracking-wider">Mentor Support</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-3xl overflow-hidden bg-slate-800 border-8 border-white/5 shadow-2xl relative z-10">
                <video
                  src="/logo.mp4"
                  autoPlay
                  muted
                  loop
                  className="w-full h-full object-cover "
                  referrerPolicy="no-referrer"
                />
                {/* <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-funfin-yellow flex items-center justify-center animate-pulse cursor-pointer">
                    <PlayCircle className="w-10 h-10 text-funfin-dark fill-current" />
                  </div>
                </div> */}
              </div>
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-funfin-blue/20 blur-3xl rounded-full" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-funfin-green/20 blur-3xl rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="relative z-10 py-32 container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-sm font-black text-funfin-yellow uppercase tracking-[0.3em] mb-4">Why Choose Us</h2>
          <h3 className="text-4xl md:text-6xl font-black">PREMIUM LEARNING EXPERIENCE</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "Structured Learning",
              desc: "Well-organized video courses with progress tracking and assessments.",
              icon: Layers,
              color: "text-funfin-blue",
              bg: "bg-funfin-blue/10"
            },
            {
              title: "Expert Mentorship",
              desc: "Connect with mentors through one-to-one chat and paid live sessions.",
              icon: Users,
              color: "text-funfin-yellow",
              bg: "bg-funfin-yellow/10"
            },
            {
              title: "Gamified Experience",
              desc: "Compete in quizzes, unlock game levels, earn rewards and climb leaderboards.",
              icon: Gamepad2,
              color: "text-funfin-green",
              bg: "bg-funfin-green/10"
            },
            {
              title: "Secure & Reliable",
              desc: "Protected video streaming, secure payments, and scalable infrastructure.",
              icon: Shield,
              color: "text-slate-400",
              bg: "bg-white/5"
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="p-8 rounded-3xl bg-white/[0.03] border border-white/5 hover:border-funfin-yellow/30 transition-all group"
            >
              <div className={`w-14 h-14 rounded-2xl ${item.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <item.icon className={`w-7 h-7 ${item.color}`} />
              </div>
              <h4 className="text-xl font-black mb-4">{item.title}</h4>
              <p className="text-slate-400 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative z-10 py-32 bg-funfin-dark">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/3">
              <h2 className="text-sm font-black text-funfin-yellow uppercase tracking-[0.3em] mb-4">Core Features</h2>
              <h3 className="text-4xl font-black mb-8">EVERYTHING YOU NEED TO MASTER YOUR SKILLS</h3>
              <div className="space-y-2">
                {[
                  { id: 'package', label: 'Paid package', icon: BookOpen },
                  { id: 'comm', label: 'Mentor Comm', icon: MessageSquare },
                  { id: 'game', label: 'Gamification', icon: Gamepad2 }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center gap-4 p-4 rounded-2xl transition-all font-bold ${activeTab === tab.id
                        ? 'bg-funfin-blue text-white shadow-lg shadow-funfin-blue/20'
                        : 'bg-white/5 text-slate-400 hover:bg-white/10'
                      }`}
                  >
                    <tab.icon className="w-5 h-5" />
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
            <div className="lg:w-2/3">
              <AnimatePresence mode="wait">
                {activeTab === 'package' && (
                  <motion.div
                    key="package"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                  >
                    {[
                      "High-quality video-based courses",
                      "1000+ scalable lesson capacity",
                      "Downloadable study materials",
                      "Progress tracking dashboard",
                      "Quizzes & assessments",
                      "Auto-generated certificates",
                      "Subscription & one-time purchase"
                    ].map((feature, i) => (
                      <div key={i} className="flex items-start gap-4 p-6 rounded-2xl bg-white/[0.03] border border-white/5">
                        <CheckCircle2 className="w-6 h-6 text-funfin-green shrink-0" />
                        <span className="font-bold text-slate-200">{feature}</span>
                      </div>
                    ))}
                  </motion.div>
                )}
                {activeTab === 'comm' && (
                  <motion.div
                    key="comm"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                  >
                    {[
                      "One-to-one private chat",
                      "Paid session booking",
                      "Scheduled live sessions",
                      "Session reminders",
                      "Session history tracking",
                      "Mentor availability scheduling",
                      "Personalized guidance"
                    ].map((feature, i) => (
                      <div key={i} className="flex items-start gap-4 p-6 rounded-2xl bg-white/[0.03] border border-white/5">
                        <MessageSquare className="w-6 h-6 text-funfin-blue shrink-0" />
                        <span className="font-bold text-slate-200">{feature}</span>
                      </div>
                    ))}
                  </motion.div>
                )}
                {activeTab === 'game' && (
                  <motion.div
                    key="game"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                  >
                    {[
                      "Interactive learning games",
                      "Course-based quiz challenges",
                      "Global Leaderboards",
                      "Achievement badges",
                      "Locked premium levels",
                      "Reward-based progression",
                      "Competitive learning"
                    ].map((feature, i) => (
                      <div key={i} className="flex items-start gap-4 p-6 rounded-2xl bg-white/[0.03] border border-white/5">
                        <Gamepad2 className="w-6 h-6 text-funfin-yellow shrink-0" />
                        <span className="font-bold text-slate-200">{feature}</span>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Playground Area (Existing Components) */}
      <section className="relative z-10 py-32 container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-black text-funfin-yellow uppercase tracking-[0.3em] mb-4">Interactive Playground</h2>
          <h3 className="text-4xl md:text-6xl font-black">TEST YOUR SKILLS IN REAL-TIME</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 flex flex-col gap-8">
            <div className="h-[450px] bg-white/[0.02] border border-white/5 rounded-3xl overflow-hidden shadow-2xl">
              <TradingChart />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-6">
                <PredictionGame />
              </div>
              <div className="grid grid-cols-1 gap-4">
                {[
                  { label: 'Platform Latency', value: '4ms', icon: Cpu, color: 'text-funfin-blue' },
                  { label: 'Success Rate', value: '98.2%', icon: Target, color: 'text-funfin-green' },
                  { label: 'Active Learners', value: '1.2k', icon: Globe, color: 'text-funfin-yellow' },
                ].map((stat, i) => (
                  <div key={i} className="bg-white/[0.02] border border-white/5 rounded-2xl p-5 flex items-center gap-5 hover:border-white/20 transition-all">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
                      <stat.icon className={`w-6 h-6 ${stat.color}`} />
                    </div>
                    <div>
                      <div className="text-[10px] uppercase font-black text-slate-500 tracking-widest">{stat.label}</div>
                      <div className="text-xl font-black text-white">{stat.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="lg:col-span-4 h-full">
            <div className="h-full bg-white/[0.02] border border-white/5 rounded-3xl overflow-hidden shadow-2xl">
              <AIChatMentor />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="relative z-10 py-32 bg-white/[0.02] border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-sm font-black text-funfin-yellow uppercase tracking-[0.3em] mb-4">The Journey</h2>
            <h3 className="text-4xl md:text-6xl font-black">HOW IT WORKS</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-white/5 -translate-y-1/2 z-0" />
            {[
              { step: "01", title: "Create Account", desc: "Register and verify with OTP." },
              { step: "02", title: "Choose Plan", desc: "Purchase a course or subscription." },
              { step: "03", title: "Start Learning", desc: "Watch lessons and track progress." },
              { step: "04", title: "Connect", desc: "Book sessions with expert mentors." },
              { step: "05", title: "Compete", desc: "Play games and climb leaderboards." }
            ].map((item, i) => (
              <div key={i} className="relative z-10 text-center">
                <div className="w-16 h-16 rounded-full bg-funfin-dark border-4 border-funfin-blue flex items-center justify-center mx-auto mb-6 text-xl font-black text-white shadow-lg shadow-funfin-blue/20">
                  {item.step}
                </div>
                <h4 className="text-lg font-black mb-2">{item.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Monetization & Security */}
      <section className="relative z-10 py-32 container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="p-10 rounded-[3rem] bg-funfin-blue/5 border border-funfin-blue/20">
            <h3 className="text-2xl font-black mb-8 flex items-center gap-3">
              <Zap className="text-funfin-yellow" /> MONETIZATION MODEL
            </h3>
            <ul className="space-y-4">
              {[
                "One-time course purchases",
                "Monthly & quarterly subscriptions",
                "Mentor session booking fees",
                "Game unlock purchases",
                "Premium bundled packages"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-slate-300 font-bold">
                  <div className="w-2 h-2 rounded-full bg-funfin-yellow" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm text-slate-500 italic">Every feature is secure and payment verified.</p>
          </div>
          <div className="p-10 rounded-[3rem] bg-funfin-green/5 border border-funfin-green/20">
            <h3 className="text-2xl font-black mb-8 flex items-center gap-3">
              <Lock className="text-funfin-yellow" /> SECURITY & TECHNOLOGY
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Secure HTTPS communication",
                "Razorpay Integration",
                "Private Cloud Storage",
                "Signed Streaming URLs",
                "JWT Authentication",
                "Role-based Access",
                "Daily Backups"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 text-xs font-black text-slate-400 uppercase tracking-widest">
                  <Shield className="w-4 h-4 text-funfin-green" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who is it for? */}
      <section className="relative z-10 py-32 bg-white/[0.02]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-4xl font-black mb-12">WHO IS FUNFIN FOR?</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "Students preparing for structured courses",
                "Skill-based learners",
                "Competitive exam aspirants",
                "Learners seeking mentor support",
                "Gamified learning enthusiasts"
              ].map((item, i) => (
                <span key={i} className="px-6 py-3 rounded-full bg-funfin-blue/10 border border-funfin-blue/20 text-funfin-blue font-bold">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision & CTA */}
      <section className="relative z-10 py-32 container mx-auto px-6">
        <div className="rounded-[4rem] bg-gradient-to-br from-funfin-blue to-funfin-dark p-12 md:p-24 text-center border border-white/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-funfin-yellow/10 blur-[100px] rounded-full -mr-48 -mt-48" />
          <div className="relative z-10">
            <h3 className="text-sm font-black text-funfin-yellow uppercase tracking-[0.3em] mb-6">Our Vision</h3>
            <p className="text-3xl md:text-5xl font-black mb-12 max-w-4xl mx-auto leading-tight">
              To build India’s most engaging and structured paid learning platform that combines education, mentorship, and gaming.
            </p>
            <div className="h-px w-24 bg-funfin-yellow mx-auto mb-12" />
            <h4 className="text-4xl md:text-6xl font-black mb-12">READY TO TRANSFORM?</h4>
            <div className="flex flex-wrap justify-center gap-6">
              <button className="px-10 py-5 rounded-2xl bg-funfin-yellow text-funfin-dark font-black text-xl hover:scale-105 transition-all shadow-2xl shadow-funfin-yellow/20 flex items-center gap-3">
                <Smartphone className="w-6 h-6" /> Download the package
              </button>
              <button className="px-10 py-5 rounded-2xl bg-white text-funfin-dark font-black text-xl hover:scale-105 transition-all shadow-2xl shadow-white/10 flex items-center gap-3">
                <Rocket className="w-6 h-6" /> Start Learning Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/5 pt-20 pb-10 px-6 bg-funfin-dark">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-3 mb-8">
                <div className="flex items-center gap-3">
                  <img style={{ width: '150px', }} src="/logo.png" alt="Fun Fin" />
                </div>
              </div>
              <p className="text-slate-500 max-w-sm mb-10 leading-relaxed font-medium">
                Pioneering the future of financial education through
                interactive technology, expert mentorship, and gamified experiences.
              </p>
              <div className="flex gap-4">
                {[Twitter, Github, Linkedin].map((Icon, i) => (
                  <a key={i} href="#" className="w-12 h-12 rounded-xl bg-white/5 hover:bg-funfin-blue transition-all flex items-center justify-center group">
                    <Icon className="w-6 h-6 text-slate-400 group-hover:text-white" />
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-black mb-8 text-white uppercase tracking-widest text-sm">The Platform</h4>
              <ul className="space-y-4 text-slate-500 font-bold">
                <li><a href="#" className="hover:text-funfin-yellow transition-colors">Courses</a></li>
                <li><a href="#" className="hover:text-funfin-yellow transition-colors">Mentors</a></li>
                <li><a href="#" className="hover:text-funfin-yellow transition-colors">Gamification</a></li>
                <li><a href="#" className="hover:text-funfin-yellow transition-colors">Leaderboards</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-black mb-8 text-white uppercase tracking-widest text-sm">Company</h4>
              <ul className="space-y-4 text-slate-500 font-bold">
                <li><a href="#" className="hover:text-funfin-yellow transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-funfin-yellow transition-colors">Vision</a></li>
                <li><a href="#" className="hover:text-funfin-yellow transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-funfin-yellow transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="text-center pt-10 border-t border-white/5 text-slate-600 text-[10px] font-black uppercase tracking-[0.4em]">
            &copy; 2024 FUNFIN TECHNOLOGIES. Built for the Indian Digital Ecosystem.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;

