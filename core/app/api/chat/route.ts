import { createGroq } from "@ai-sdk/groq";
import { streamText } from "ai";

export const runtime = "edge";

const groq = createGroq({
  apiKey: process.env.GROQ_API_KEY,
});

function isRelevantTopic(message: string): boolean {
  const keywords = [
    "history",
    "archaeology",
    "ancient",
    "empire",
    "civilization",
    "artifact",
    "ruins",
    "prehistoric",
    "dynasty",
    "monument",
    "relic",
    "excavation",
    "historical",
    "archaeological",
    "Indonesia",
    "Regime",
    "Reformation",
    "Dutch East Indies",
    "Staged",
    "Coup",
    "Genocide",
  ];
  return keywords.some((keyword) => message.toLowerCase().includes(keyword));
}

export async function POST(req: Request): Promise<Response> {
  try {
    const { messages } = await req.json();
    const lastMessage = messages[messages.length - 1]?.content || "";
    if (!isRelevantTopic(lastMessage)) {
      return new Response(
        JSON.stringify({
          content:
            "This chatbot only answers history and archaeology-related questions.",
        }),
        { status: 200, headers: { "Content-Type": "application/json" } }
      );
    }

    const result = streamText({
      model: groq("deepseek-r1-distill-llama-70b"),
      messages,
    });

    return result.toDataStreamResponse();
  } catch (error) {
    console.error("Error handling POST request:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}