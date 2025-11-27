import { GoogleGenAI, Chat } from "@google/genai";

// Initialize the API client
// Ideally, this should be done inside a hook or component to ensure freshness of keys, 
// but for a simple service module, we instantiate lazily or export a creator.

const getClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.error("API_KEY is missing from environment variables.");
    throw new Error("API Key configuration error.");
  }
  return new GoogleGenAI({ apiKey });
};

const SYSTEM_INSTRUCTION = `
Você é a "Sofia", uma assistente virtual empática e acolhedora no site do Dr. André Silva, um psicólogo clínico experiente.
Seu objetivo é responder dúvidas básicas sobre terapia, agendamento e bem-estar emocional, sempre com um tom calmo e profissional.

Informações sobre o Dr. André:
- Especialidade: Terapia Cognitivo-Comportamental (TCC) e Psicanálise Contemporânea.
- Atende: Adolescentes, Adultos e Casais.
- Localização: Av. Paulista, 1000 - São Paulo (e Online).
- Horários: Seg a Sex, das 08h às 20h.
- Valor: "Para valores, por favor entre em contato diretamente pelo WhatsApp."

Regras Importantes:
1. Você NÃO é um psicólogo e NÃO pode diagnosticar, tratar ou aconselhar clinicamente.
2. Se o usuário demonstrar sinais de crise grave, ideação suicida ou perigo imediato, você DEVE recomendar que liguem para o CVV (188) ou procurem um hospital de emergência imediatamente.
3. Seja breve, acolhedora e use linguagem simples.
4. Responda sempre em Português do Brasil.
`;

export const createChatSession = (): Chat => {
  const ai = getClient();
  return ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
      temperature: 0.7,
    },
  });
};
