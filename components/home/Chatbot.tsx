'use client';

import Image from "next/image";
import { useChat } from 'ai/react';
import {useKindeBrowserClient} from "@kinde-oss/kinde-auth-nextjs";
import { useState, useEffect, useRef, FormEvent } from 'react';
import ReactMarkdown from 'react-markdown';

export default function Chatbot() {
  const { messages, input, handleInputChange, handleSubmit, setInput } = useChat();
  const { user } = useKindeBrowserClient();
  const [presetQuestion, setPresetQuestion] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (presetQuestion && input === presetQuestion) {
      handleSubmit({ preventDefault: () => {} } as FormEvent<HTMLFormElement>);
      setPresetQuestion(null); // Reset the preset question
    }
  }, [presetQuestion, input, handleSubmit]);

  const handlePresetQuestion = (e: FormEvent, question: string) => {
    e.preventDefault();
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
                  <ReactMarkdown className="whitespace-pre-wrap">{m.content}</ReactMarkdown>
                </div>
              ))}
            </div>
          ) : (
            <div>
              <p className="text-center text-gray-500">
                {/* Message when there are no messages */}
              </p>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <button 
                  onClick={(e) => handlePresetQuestion(e, "What is type 3 diabetes?")} 
                  className="mx-auto mb-5 flex max-w-fit animate-fade-up items-center justify-center space-x-2 overflow-hidden rounded-lg bg-blue-100 px-7 py-2 transition-colors hover:bg-blue-200 text-sm font-semibold text-[#1d9bf0]"
                >
                  What is type 3 diabetes?
                </button>
                <button 
                  onClick={(e) => handlePresetQuestion(e, "What is insulin resistance in the brain?")} 
                  className="mx-auto mb-5 flex max-w-fit animate-fade-up items-center justify-center space-x-2 overflow-hidden rounded-lg bg-blue-100 px-7 py-2 transition-colors hover:bg-blue-200 text-sm font-semibold text-[#1d9bf0]"
                >
                  What is insulin resistance in the brain?
                </button>
                <button 
                  onClick={(e) => handlePresetQuestion(e, "What is the connection between Alzheimers Disease & Type 2 Diabetes?")} 
                  className="mx-auto mb-5 flex max-w-fit animate-fade-up items-center justify-center space-x-2 overflow-hidden rounded-lg bg-blue-100 px-7 py-2 transition-colors hover:bg-blue-200 text-sm font-semibold text-[#1d9bf0]"
                >
                  What is the connection between Alzheimers Disease & Type 2 Diabetes?
                </button>
                <button 
                  onClick={(e) => handlePresetQuestion(e, "Can you make me a 21 day walking exercise routine?")} 
                  className="mx-auto mb-5 flex max-w-fit animate-fade-up items-center justify-center space-x-2 overflow-hidden rounded-lg bg-blue-100 px-7 py-2 transition-colors hover:bg-blue-200 text-sm font-semibold text-[#1d9bf0]"
                >
                  Can you make me a 21 day walking exercise routine?
                </button>
              </div>
            </div>
          )}
          <form ref={formRef} onSubmit={handleSubmit} className="flex">
            <input
              className="container rounded-full mx-auto px-4 py-8 flex-grow flex items-center justify-center text-gray-500"
              value={input}
              placeholder="Press enter to submit your query"
              onChange={handleInputChange}
            />
          </form>
        </div>
      </main>
    </div>
  );
}
