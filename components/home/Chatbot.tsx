'use client';

import Image from "next/image";
import { useChat } from 'ai/react';
import {useKindeBrowserClient} from "@kinde-oss/kinde-auth-nextjs";
import { useState, useEffect, useRef, FormEvent } from 'react';

export default function Chatbot() {
  const { messages, input, handleInputChange, handleSubmit, setInput } = useChat();
  const { user } = useKindeBrowserClient();
  const [presetQuestion, setPresetQuestion] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (presetQuestion && input === presetQuestion) {
      formRef.current?.submit();
      setPresetQuestion(null); // Reset the preset question
    }
  }, [presetQuestion, input]);

  const handlePresetQuestion = (e: FormEvent) => {
    e.preventDefault();
    const question = "What is type 3 diabetes?";
    setInput(question);
    setPresetQuestion(question);
  };

  if (user == null) return null;

  return (
    <div className="container mx-auto px-4 py-8 flex-grow">
      {/* Chat Container */}
      <main className="container mx-auto px-4 py-8 flex-grow">
        <div className="relative mt-2 rounded-md">
          {messages.length > 0 ? (
            <div className="space-y-4 mb-4">
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={`p-4 rounded-lg text-gray-500 ${
                    m.role === 'user' ? 'bg-blue-200 bg-opacity-20' : 'bg-orange-200 bg-opacity-20'
                  }`}
                >
                  {m.role === 'user' ? (
                    <Image
                      src={user.picture || "/logo.png"}
                      alt="User Avatar"
                      width="50"
                      height="50"
                      className="mr-2 rounded-full"
                    />
                  ) : (
                    <Image
                      src="/jerri.jpeg"
                      alt="Jerri Avatar"
                      width="50"
                      height="50"
                      className="mr-2 rounded-full"
                    />
                  )}
                  <span className="font-semibold text-[#1d9bf0]">
                    {m.role === 'user' ? user?.given_name + ':' : 'JEIR [ai]:'}
                  </span>
                  <p className="whitespace-pre-wrap">{m.content}</p>
                </div>
              ))}
            </div>
          ) : (
            <div>
              <p className="text-center text-gray-500">
                {/* Message when there are no messages */}
              </p>
              <button 
                onClick={(e) => handlePresetQuestion(e)} 
                className="bg-blue-500 text-white px-4 py-2 rounded-md mx-auto block mb-4"
              >
                What is type 3 diabetes?
              </button>
            </div>
          )}
          <form ref={formRef} onSubmit={handleSubmit} className="flex">
            <input
              className="container rounded-full mx-auto px-4 py-8 flex-grow flex items-center justify-center text-gray-500"
              value={input}
              placeholder="Press enter to submit your query."
              onChange={handleInputChange}
            />
          </form>
        </div>
      </main>
    </div>
  );
}
