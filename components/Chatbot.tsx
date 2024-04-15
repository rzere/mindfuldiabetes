'use client';

import { useSession, signIn, signOut } from 'next-auth/react';
import { useChat } from 'ai/react';
import Link from 'next/link';

export default function Chat() {
const { messages, input, handleInputChange, handleSubmit } = useChat();

return (
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

        <form onSubmit={handleSubmit} className="flex">
            <input
            className="container mx-auto px-4 py-8 flex-grow flex items-center justify-center"
            value={input}
            placeholder="Press Enter to Submit"
            onChange={handleInputChange}
            />
        </form>
        </div>
    </main>
    </div>
);
}