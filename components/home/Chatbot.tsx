'use client';

import React, { useState } from 'react';
import Image from "next/image";
import { useChat } from 'ai/react';
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";

export default function Chatbot() {
    const { messages, input, handleInputChange, handleSubmit } = useChat();
    const [showButtons, setShowButtons] = useState(true); // State to control button visibility
    const { user } = useKindeBrowserClient();
    if (user == null) return null;

    // Function to handle button clicks
    const handleButtonClick = (query: string) => {
      // Create a mock event object with the same structure as a real event
      const event = {
          target: {
              value: query,
              getAttribute: () => {}, // Add other necessary properties if required by your handleInputChange
          } as EventTarget & HTMLInputElement // Ensure the type matches what handleInputChange expects
      };
      handleInputChange(event as React.ChangeEvent<HTMLInputElement>); // Cast to the appropriate event type
      handleSubmit({ preventDefault: () => {} });
      setShowButtons(false); // Hide buttons after the first use
  };

    return (
        <div className="container mx-auto px-4 py-8 flex-grow">
            <main className="container mx-auto px-4 py-8 flex-grow">
                <div className="relative mt-2 rounded-md">
                    {showButtons && (
                        <div>
                            <button onClick={() => handleButtonClick("What is type 3 diabetes?")}>What is type 3 diabetes?</button>
                            <button onClick={() => handleButtonClick("What is insulin resistance in the brain?")}>What is insulin resistance in the brain?</button>
                            <button onClick={() => handleButtonClick("What is the connection between Alzheimers Disease & Type 2 Diabetes?")}>What is the connection between Alzheimers Disease & Type 2 Diabetes?</button>
                            <button onClick={() => handleButtonClick("Can you make me a 21 day walking exercise routine?")}>Can you make me a 21 day walking exercise routine?</button>
                        </div>
                    )}
                    {messages.length > 0 && (
                        <div className="space-y-4 mb-4">
                            {messages.map((m) => (
                                <div key={m.id} className={`p-4 rounded-lg text-gray-500 ${m.role === 'user' ? 'bg-blue-200 bg-opacity-20' : 'bg-orange-200 bg-opacity-20'}`}>
                                    <Image src={m.role === 'user' ? user.picture || "/logo.png" : "/jerri.jpeg"} alt="Avatar" width="50" height="50" className="mr-2 rounded-full" />
                                    <span className="font-semibold text-[#1d9bf0]">{m.role === 'user' ? user?.given_name + ':' : 'JEIR [ai]:'}</span>
                                    <p className="whitespace-pre-wrap">{m.content}</p>
                                </div>
                            ))}
                        </div>
                    )}
                    <form onSubmit={handleSubmit} className="flex">
                        <input className="container rounded-full mx-auto px-4 py-8 flex-grow flex items-center justify-center text-gray-500" value={input} placeholder="Press enter to submit your query." onChange={handleInputChange} />
                    </form>
                </div>
            </main>
        </div>
    );
}