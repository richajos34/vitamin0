"use client"

import { useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("Press this or I'm coming to find you.");

  const toggleMessage = () => {
    setMessage(prev => prev === "Press this or I'm coming to find you." ? "Thanks!" : "Press this or I'm coming to find you.");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <h1
        className="text-4xl font-bold text-blue-600 cursor-pointer"
        onClick={toggleMessage}
      >
        {message}
      </h1>
    </div>
  );
}