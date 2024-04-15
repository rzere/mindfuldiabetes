'use client';

import Image from "next/image";
import { useChat } from 'ai/react';
import { Session } from "next-auth";

export default function Chat({ session }: { session: Session | null }) {
const { messages, input, handleInputChange, handleSubmit } = useChat();
const { email, image } = session?.user || {};
if (!email) return null;

return(
    <div className="container mx-auto px-4 py-8 flex-grow">
    {/* Chat Container */}
    <main  className="container mx-auto px-4 py-8 flex-grow">
        <div className="relative mt-2 rounded-md shadow-sm">
        {messages.length > 0 ? (
            <div className="space-y-4 mb-4">
            {messages.map((m) => (
                <div
                key={m.id}
                className={`p-4 rounded-lg ${
                    m.role === 'user' ? 'bg-[#00a651] bg-opacity-20' : 'bg-gray-100'
                }`}
                >
                <span className="font-semibold">
                    {m.role === 'user' ? 'You: ' : 'Mindful Diabetes AI: '}
                </span>
                <p className="whitespace-pre-wrap">{m.content}</p>
                </div>
            ))}
            </div>
        ) : (
            <p className="text-center text-gray-500">
        
            </p>
        )}
        {/* <Image
            alt="avatar"
            src={image || `https://www.svgrepo.com/show/428242/ship.svg`}
            width={40}
            height={40}
          /> */}
        <form onSubmit={handleSubmit} className="flex">
            <input
            className="container rounded-full mx-auto px-4 py-8 flex-grow flex items-center justify-center"
            value={input}
            placeholder="hit enter to submit your query"
            onChange={handleInputChange}
            />
        </form>
        </div>
    </main>
    </div>
);
}