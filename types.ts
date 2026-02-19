
export interface MarketDataPoint {
  time: string;
  price: number;
  volume: number;
}

export interface Trade {
  id: string;
  type: 'BUY' | 'SELL';
  price: number;
  amount: number;
  timestamp: Date;
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}
