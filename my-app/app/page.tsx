// pages/index.tsx
"use client";
import { useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("Hello World");

  const toggleMessage = () => {
    setMessage(prev => prev === "Hello World" ? "This website actually works!!!! v3" : "Hello World");
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