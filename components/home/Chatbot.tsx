'use client';

import Image from "next/image";
import { useChat } from 'ai/react';
//import { Session } from "next-auth";
//import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import {useKindeBrowserClient} from "@kinde-oss/kinde-auth-nextjs";

//export default function Chatbot({ session }: { session: Session | null }) {
export default function Chatbot() {


const { messages, input, handleInputChange, handleSubmit } = useChat();
//const { email, name } = session?.user || {};
const {
    user
} = useKindeBrowserClient();
if (user == null) return null;
const { given_name } = {JSON.stringify(user.given_name, null, 2)};

return(
    <div className="container mx-auto px-4 py-8 flex-grow">
    {/* Chat Container */}
    <main  className="container mx-auto px-4 py-8 flex-grow">
    {/* <div className="p-2">
              {session?.user?.name && (
                <p className="truncate text-sm font-medium text-gray-900">
                  Hi, {session?.user?.name.split(" ")[0]}!
                </p>
              )}
            </div> */}
        <div className="relative mt-2 rounded-md">
        {messages.length > 0 ? (
            <div className="space-y-4 mb-4">
            {messages.map((m) => (
                <div
                key={m.id}
                className={`p-4 rounded-lg text-gray-500 ${
                    m.role === 'user' ? 'bg-blue-100 bg-opacity-20' : 'bg-gray-100'
                }`}
                >
                {/* <pre className="p-4 rounded bg-slate-950 text-green-300">
                    {JSON.stringify(user.given_name, null, 2)}
                </pre> */}
                <span className="font-semibold text-orange-500" >
                    {m.role === 'user' ? user.given_name + ':' : 'JERRI: '}
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