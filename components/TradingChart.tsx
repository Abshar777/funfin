
import React, { useState, useEffect } from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { MarketDataPoint } from '../types';

const TradingChart: React.FC = () => {
  const [data, setData] = useState<MarketDataPoint[]>([]);

  useEffect(() => {
    // Generate initial data
    const initialData: MarketDataPoint[] = [];
    let basePrice = 42000;
    for (let i = 0; i < 30; i++) {
      basePrice += (Math.random() - 0.5) * 500;
      initialData.push({
        time: `${i}:00`,
        price: basePrice,
        volume: Math.floor(Math.random() * 1000)
      });
    }
    setData(initialData);

    const interval = setInterval(() => {
      setData(prev => {
        const last = prev[prev.length - 1];
        const nextPrice = last.price + (Math.random() - 0.5) * 200;
        const newData = [...prev.slice(1), {
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
          price: nextPrice,
          volume: Math.floor(Math.random() * 1000)
        }];
        return newData;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-full w-full bg-white/[0.02] rounded-3xl p-6 border border-white/5 backdrop-blur-sm relative overflow-hidden">
      <div className="absolute top-6 left-8 z-10">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-funfin-green rounded-full animate-pulse" />
          <h3 className="text-slate-400 font-black uppercase tracking-[0.2em] text-[10px]">Live Market: BTC/USD</h3>
        </div>
        <p className="text-3xl font-black text-white mono mt-1">
          ${data[data.length - 1]?.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
        </p>
      </div>
      
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#089981" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#089981" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <XAxis dataKey="time" hide />
          <YAxis domain={['auto', 'auto']} hide />
          <Tooltip 
            contentStyle={{ backgroundColor: '#231f20', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', fontWeight: 'bold' }}
            itemStyle={{ color: '#089981' }}
          />
          <Area 
            type="monotone" 
            dataKey="price" 
            stroke="#089981" 
            fillOpacity={1} 
            fill="url(#colorPrice)" 
            strokeWidth={3}
            isAnimationActive={false}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TradingChart;
