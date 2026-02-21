
import { GoogleGenAI, Type } from "@google/genai";
import { Message } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const chatWithMentor = async (history: Message[], prompt: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [
        ...history.map(m => ({ role: m.role, parts: [{ text: m.content }] })),
        { role: 'user', parts: [{ text: prompt }] }
      ],
      config: {
        systemInstruction: `You are Fun Fin, a high-performance trading mentor for a new learning package platform. 
        Your tone is professional, encouraging, and sharp. 
        You specialize in technical analysis, risk management, and market psychology.
        Keep responses concise and engaging for a landing page playground.
        Explain concepts as if the user is a budding professional trader.`,
        temperature: 0.7,
      },
    });

    return response.text || "I'm processing the markets... ask me something else!";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "The markets are a bit noisy right now. Please try again.";
  }
};
