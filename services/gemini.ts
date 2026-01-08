
import { GoogleGenAI } from "@google/genai";
import { SYSTEM_PROMPT } from "../constants";

export const getGeminiResponse = async (userMessage: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userMessage,
      config: {
        systemInstruction: SYSTEM_PROMPT,
        temperature: 0.7,
        topP: 0.95,
      },
    });

    return response.text || "I'm sorry, I couldn't process that request right now. Please call us directly at +1 (239) 337-1008.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having a little trouble connecting. Please feel free to call our Fort Myers office at +1 (239) 337-1008 for immediate assistance!";
  }
};
