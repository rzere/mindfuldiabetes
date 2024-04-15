'use client';

import { useSession, signIn, signOut } from 'next-auth/react';
import { useChat } from 'ai/react';
import Link from 'next/link';

export default function Chat() {
const { data: session } = useSession();
const { messages, input, handleInputChange, handleSubmit } = useChat();

if (!session) {
    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-100">
      {/* Header */}
      <header className="bg-gradient-to-br from-gray-50 via-white to-cyan-100 py-4">
      <div className="mx-5 flex h-16 max-w-screen-xl items-center justify-between w-full">
          <Link href="/" className="flex items-center font-white text-2xl">
          <img
          src={`https://leadshark.vercel.app/_next/image?url=%2Flogo.png&w=64&q=75`}
          alt="MD Logo"
        />
          </Link>
          <div>
            <div className="z-10 w-full px-5 xl:px-0">
        <a
          href="https://mindfuldiabetes.org"
          target="_blank"
          rel="noreferrer"
          className="mx-auto mb-1 flex max-w-fit items-center justify-center overflow-hidden rounded-full bg-blue-100 px-7 py-2 transition-colors hover:bg-blue-200"
        >
          <p className="text-m font-semibold text-[#1d9bf0]">
            AI Demo by Mindful Diabetes Inc.
          </p>
        </a>
        </div>
          </div>
        </div>
        </header>

        {/* Login Message */}
        <main className="container mx-auto px-4 py-8 flex-grow flex items-center justify-center">
        <div><button
          className="bg-[#0d1338] text-[#f3f3f3] px-4 py-2 rounded-md"
            onClick={() => {
              signIn("google");
            }}
          >   
              <>
                <p>Sign In with Google 🔑</p>
              </>
          </button>
          </div>
        </main>
        {/* Blog Link */}
        <div className="bg-[#0d1338] py-4 mt-auto text-center">
        <Link href="https://mindfuldiabetes.org/guide/#recent" className="text-white underline">
        For more information, visit our blog.
        </Link>
    </div>
        {/* Footer */}
        <footer className="bg-[#0d1338] py-4 mt-auto">
        <div className="container mx-auto px-4 text-center">
        <p className="text-white">2024 | Stoic.ist</p>
        </div>
    </footer>
    </div>
    );
}

return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-100">
      {/* Header */}
      <header className="bg-gradient-to-br from-gray-50 via-white to-cyan-100 py-4">
      <div className="mx-5 flex h-16 max-w-screen-xl items-center justify-between w-full">
          <Link href="/" className="flex items-center font-white text-2xl">
          <img
          src={`https://leadshark.vercel.app/_next/image?url=%2Flogo.png&w=64&q=75`}
          alt="MD Logo"
        />
          </Link>
          <div>
            <div className="z-10 w-full px-5 xl:px-0">
        <a
          href="https://mindfuldiabetes.org"
          target="_blank"
          rel="noreferrer"
          className="mx-auto mb-1 flex max-w-fit items-center justify-center overflow-hidden rounded-full bg-blue-100 px-7 py-2 transition-colors hover:bg-blue-200"
        >
          <p className="text-m font-semibold text-[#1d9bf0]">
            AI Demo by Mindful Diabetes Inc.
          </p>
        </a>
        </div>
          </div>
        </div>
        </header>

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
            {/* Blog Link */}
        <div className="bg-[#0d1338] py-4 mt-auto text-center">
        <Link href="https://mindfuldiabetes.org/guide/#recent" className="text-white underline">
        For more information, visit our blog.
        </Link>
    </div>
            {/* Footer */}
            <footer className="bg-[#0d1338] py-4 mt-auto">
        <div className="container mx-auto px-4 text-center">
        <p className="text-white">2024 | Stoic.ist</p>
        <main className="container mx-auto px-4 py-8 flex-grow flex items-center justify-center">
        <div><button
          className="bg-[#f3f3f3] text-[#0d1338] px-4 py-2 rounded-md"
            onClick={() => {
              signOut();
            }}
          >   
              <>
                <p>Log-out</p>
              </>
          </button>
          </div>
        </main>
        </div>
    </footer>
    </div>
);
}