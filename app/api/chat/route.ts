import OpenAI from "openai";
import { OpenAIStream, StreamingTextResponse } from 'ai';

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export const runtime = 'edge';

export async function POST(req: Request) {

  const { messages } = await req.json();

const response = await openai.chat.completions.create({
    messages: [{ role: "user", content: messages }],
    model: "gpt-3.5-turbo",
});
  // Convert the response into a friendly text-stream.
  const stream = OpenAIStream(response);

  // Respond with the stream
  return new StreamingTextResponse(stream);
}

// OpenAI API

// import { NextApiRequest, NextApiResponse } from 'next';
// import { Configuration, OpenAIApi } from 'openai';

// const configuration = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY, // Ensure you have this environment variable set
// });
// const openai = new OpenAIApi(configuration);

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method === 'POST') {
//     try {
//       // Extract the message content from the request body
//       const { message } = req.body;

//       // Call the OpenAI API to get a response
//       const response = await openai.createChatCompletion({
//         model: 'gpt-3.5-turbo', // Replace with your desired model
//         messages: [
//           {
//             role: 'system',
//             content: 'You are a helpful assistant.',
//           },
//           {
//             role: 'user',
//             content: message,
//           },
//         ],
//       });

//       // Send the response back to the client
//       res.status(200).json({ message: response.data.choices[0].message.content });
//     } catch (error) {
//       console.error('Error calling OpenAI API:', error);
//       res.status(500).json({ error: 'Error processing your request' });
//     }
//   } else {
//     // Handle any non-POST requests
//     res.setHeader('Allow', ['POST']);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }

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