// import { createGroq } from "@ai-sdk/groq";
// import { streamText } from "ai";
//
// export const runtime = "edge";
//
// const groq = createGroq({
//   apiKey: process.env.GROQ_API_KEY,
// });
//
// // Function to sanitize the response
// function sanitizeResponse(content: string): string {
//   // Remove any <think> and similar tags
//   return content.replace(/<[^>]+>/g, "").trim(); // Regex to match tags like <think> and remove them
// }
//
// export async function POST(req: Request): Promise<Response> {
//   try {
//     const { messages } = await req.json();
//
//     // Fetch the response from the Groq API
//     const result = streamText({
//       model: groq("deepseek-r1-distill-llama-70b"),
//       messages,
//     });
//
//     // Map over the chunks to sanitize the content
//     const sanitizedStream = result.map((chunk) => ({
//       ...chunk,
//       content: sanitizeResponse(chunk.content),
//     }));
//
//     // Return the sanitized response as a stream
//     return sanitizedStream.toDataStreamResponse();
//   } catch (error) {
//     console.error("Error handling POST request:", error);
//     return new Response("Internal Server Error", { status: 500 });
//   }
// }