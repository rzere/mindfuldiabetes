export const runtime = "client"
import React, { useState } from 'react';
import { useSession } from 'next-auth/react';

const Chatbot = () => {
  const { data: session } = useSession(); // Accessing the current session
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Assuming you want to keep the chat functionality for logged-in users
    if (session) {
      const newMessages = [...messages, { sender: 'user', content: input }];
      setMessages(newMessages);

      try {
        const response = await fetch('/api/chat', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ message: input }),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setMessages([...newMessages, { sender: 'bot', content: data.message }]);
      } catch (error) {
        console.error('Error sending message:', error);
      }

      setInput(''); // Reset the input field
    }
  };

  // Only render the chatbot UI if the user is logged in
  if (!session) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 w-64 p-4 bg-white rounded-lg shadow-lg z-10">
      <div className="overflow-y-auto h-64 mb-4">
        {messages.map((msg, index) => (
          <div key={index} className={`p-2 ${msg.sender === 'user' ? 'bg-blue-100' : 'bg-gray-100'} my-2 rounded`}>
            {msg.content}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="mb-2 p-2 border border-gray-300 rounded"
          placeholder="Type your message..."
        />
        <button
          type="submit"
          className="p-2 bg-blue-500 text-white rounded"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Chatbot;