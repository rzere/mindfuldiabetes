'use client';

import Image from "next/image";
import { useChat } from 'ai/react';
//import { Session } from "next-auth";
//import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import {useKindeBrowserClient} from "@kinde-oss/kinde-auth-nextjs";

//export default function Chatbot({ session }: { session: Session | null }) {
export default function Chatbot() {
const jerriAvatarUrl = "https://scontent.cdninstagram.com/v/t51.2885-15/60228238_434219193821264_7385769686695668070_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi45NjJ4OTYyLnNkci5mMjg4NSJ9&_nc_ht=scontent.cdninstagram.com&_nc_cat=108&_nc_ohc=BNGsdFe5YjsAb6rmeTI&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MjA0Njc5NjU5NzYzNTczNDIyMg%3D%3D.2-ccb7-5&oh=00_AfD2_sMJd4TalbiJIiZ6SSLY9fs7ObmSkVLzrvs6xVAWDg&oe=66225A01&_nc_sid=10d13b";
const { messages, input, handleInputChange, handleSubmit } = useChat();
//const { email, name } = session?.user || {};
const {
    user
} = useKindeBrowserClient();
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
                  {m.role === 'user' && user?.picture ? (
                    <Image
                      src={user.picture}
                      alt="User avatar"
                      width="30"
                      height="30"
                      className="mr-2 rounded-full"
                    />
                  ) : (
                    <Image
                      src={jerriAvatarUrl}
                      alt="Jerri avatar"
                      width="30"
                      height="30"
                      className="mr-2 rounded-full"
                    />
                  )}
                  <span className="font-semibold text-[#1d9bf0]">
                    {m.role === 'user' ? user?.given_name + ':' : 'JERRI: '}
                  </span>
                  <p className="whitespace-pre-wrap">{m.content}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500">
              {/* Message when there are no messages */}
            </p>
          )}
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