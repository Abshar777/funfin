
import React, { useState, useEffect, useRef } from 'react';
import { TrendingUp, TrendingDown, Timer, Zap, Trophy } from 'lucide-react';

const PredictionGame: React.FC = () => {
  const [gameState, setGameState] = useState<'idle' | 'active' | 'resolved'>('idle');
  const [prediction, setPrediction] = useState<'up' | 'down' | null>(null);
  const [entryPrice, setEntryPrice] = useState<number>(0);
  const [currentPrice, setCurrentPrice] = useState<number>(42000);
  const [timeLeft, setTimeLeft] = useState(10);
  const [result, setResult] = useState<'win' | 'loss' | null>(null);
  const [streak, setStreak] = useState(0);

  // Simulated Price Engine for the Game
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPrice(prev => prev + (Math.random() - 0.5) * 150);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Game Logic Timer
  useEffect(() => {
    let timer: number;
    if (gameState === 'active' && timeLeft > 0) {
      timer = window.setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && gameState === 'active') {
      resolveGame();
    }
    return () => clearInterval(timer);
  }, [gameState, timeLeft]);

  const startGame = (dir: 'up' | 'down') => {
    setPrediction(dir);
    setEntryPrice(currentPrice);
    setGameState('active');
    setTimeLeft(10);
    setResult(null);
  };

  const resolveGame = () => {
    const isWin = prediction === 'up' ? currentPrice > entryPrice : currentPrice < entryPrice;
    setResult(isWin ? 'win' : 'loss');
    setGameState('resolved');
    setStreak(prev => isWin ? prev + 1 : 0);
    
    // Auto-reset after 3 seconds
    setTimeout(() => {
      setGameState('idle');
    }, 3000);
  };

  const isProfitable = gameState === 'active' && (
    (prediction === 'up' && currentPrice > entryPrice) ||
    (prediction === 'down' && currentPrice < entryPrice)
  );

  return (
    <div className={`h-full flex flex-col bg-slate-900/60 rounded-xl border transition-all duration-500 overflow-hidden backdrop-blur-lg ${
      gameState === 'active' 
        ? (isProfitable ? 'border-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.2)]' : 'border-red-500 shadow-[0_0_20px_rgba(239,68,68,0.2)]')
        : 'border-slate-700/50'
    }`}>
      <div className="p-4 border-b border-slate-700/50 flex items-center justify-between bg-slate-800/30">
        <div className="flex items-center gap-2">
          <Zap className="w-5 h-5 text-yellow-400" />
          <span className="font-semibold text-slate-200">Flash Predict</span>
        </div>
        <div className="flex items-center gap-2 px-2 py-1 rounded bg-slate-900 border border-slate-700">
          <Trophy className={`w-3 h-3 ${streak > 0 ? 'text-yellow-400 animate-bounce' : 'text-slate-500'}`} />
          <span className="text-xs font-bold mono">{streak} STREAK</span>
        </div>
      </div>

      <div className="flex-1 p-6 flex flex-col justify-center items-center text-center">
        {gameState === 'idle' && (
          <div className="animate-in fade-in zoom-in duration-300">
            <h4 className="text-white font-bold mb-2">Predict the next 10s</h4>
            <p className="text-slate-400 text-sm mb-6">Will BTC/USD be higher or lower?</p>
            <div className="flex gap-4">
              <button 
                onClick={() => startGame('up')}
                className="flex flex-col items-center gap-2 bg-slate-800 hover:bg-emerald-600/20 border border-slate-700 hover:border-emerald-500 p-4 rounded-2xl transition-all group"
              >
                <TrendingUp className="w-8 h-8 text-emerald-500 group-hover:scale-125 transition-transform" />
                <span className="text-xs font-bold uppercase tracking-tighter text-slate-300">Call</span>
              </button>
              <button 
                onClick={() => startGame('down')}
                className="flex flex-col items-center gap-2 bg-slate-800 hover:bg-red-600/20 border border-slate-700 hover:border-red-500 p-4 rounded-2xl transition-all group"
              >
                <TrendingDown className="w-8 h-8 text-red-500 group-hover:scale-125 transition-transform" />
                <span className="text-xs font-bold uppercase tracking-tighter text-slate-300">Put</span>
              </button>
            </div>
          </div>
        )}

        {gameState === 'active' && (
          <div className="w-full space-y-6 animate-in fade-in duration-300">
            <div className="relative">
              <div className="text-5xl font-bold text-white mono mb-1 tracking-tighter">
                {timeLeft}s
              </div>
              <div className="text-xs text-slate-500 uppercase font-bold tracking-[0.2em]">Remaining</div>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between text-[10px] font-bold uppercase text-slate-500">
                <span>Strike Price</span>
                <span>Current Price</span>
              </div>
              <div className="flex justify-between items-center bg-slate-900/80 p-3 rounded-lg border border-slate-700">
                <span className="mono text-slate-400">${entryPrice.toFixed(2)}</span>
                <span className={`mono font-bold ${isProfitable ? 'text-emerald-400' : 'text-red-400'}`}>
                  ${currentPrice.toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        )}

        {gameState === 'resolved' && (
          <div className="animate-in zoom-in duration-300 text-center">
            <div className={`text-6xl mb-4 flex justify-center`}>
              {result === 'win' ? '🔥' : '💀'}
            </div>
            <h3 className={`text-2xl font-black uppercase italic ${result === 'win' ? 'text-emerald-400' : 'text-red-400'}`}>
              {result === 'win' ? 'Profit Secured!' : 'Position Liquidated'}
            </h3>
            <p className="text-slate-400 mt-2 text-sm">Resetting simulation...</p>
          </div>
        )}
      </div>

      <div className="p-3 bg-slate-800/30 border-t border-slate-700/50 text-center">
        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
          {gameState === 'active' ? 'Position Live - Do not close' : 'Demo Account: $10,000.00'}
        </span>
      </div>
    </div>
  );
};

export default PredictionGame;
