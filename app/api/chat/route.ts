import OpenAI from 'openai';
import { OpenAIStream, StreamingTextResponse } from 'ai';
 
// Optional, but recommended: run on the edge runtime.
// See https://vercel.com/docs/concepts/functions/edge-functions
export const runtime = 'edge';
 
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});
 
export async function POST(req: Request) {
  // Extract the `messages` from the body of the request
  const { messages } = await req.json();
 
  // Add any customizations here.
  const customPrompt = {
    role: "system",
    content: "You are an AI named JEIR. You are helpful, knowledgeable about diabetes & health, and always refer to yourself as JEIR."
  };

  // Request the OpenAI API for the response based on the prompt
  const response = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    stream: true,
    messages: [customPrompt, ...messages], // Include customPrompt at the beginning
  });
 
  // Convert the response into a friendly text-stream
  const stream = OpenAIStream(response);
 
  // Respond with the stream
  return new StreamingTextResponse(stream);
}

// TO USE PERPLEXITY API

// import OpenAI from 'openai';
// import { OpenAIStream, StreamingTextResponse } from 'ai';

// // Create an OpenAI API client (that's edge friendly!)
// // but configure it to point to perplexity.ai
// const perplexity = new OpenAI({
//   apiKey: process.env.PERPLEXITY_API_KEY || '',
//   baseURL: 'https://api.perplexity.ai/',
// });

// // IMPORTANT! Set the runtime to edge
// export const runtime = 'edge';

// export async function POST(req: Request) {
//   // Extract the `messages` from the body of the request
//   const { messages } = await req.json();

//   // Ask Perplexity for a streaming chat completion using PPLX 70B online model
//   // @see https://blog.perplexity.ai/blog/introducing-pplx-online-llms
//   const response = await perplexity.chat.completions.create({
//     model: 'mixtral-8x7b-instruct',
//     stream: true,
//     max_tokens: 10000,
//     messages,
//   });

//   // Convert the response into a friendly text-stream.
//   const stream = OpenAIStream(response);

//   // Respond with the stream
//   return new StreamingTextResponse(stream);
// }