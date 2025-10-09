// pages / index . tsx
"use client"; 

import { useState  } from "react";

export default function Home() {
  const [text, setText] = useState('yayay');

  const changeText = () => {
    setText(text === 'yayay' ? 'boooo' : 'yayay');
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold text-sky-600"  onClick={changeText}>
        hi this is sophie{" "}
        {text}
      </h1>
    </main>
  );
}