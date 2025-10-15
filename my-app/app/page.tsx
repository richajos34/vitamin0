// pages / index . tsx
"use client";

import { useState } from "react";

export default function Home() {
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday"
  ];


  const [index, setIndex] = useState(0);

  const handleClick = () => {
    setIndex((prev) => (prev + 1) % days.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex items-center justify-center">
      <h1
        className="text-4xl font-bold text-blue-600 cursor-pointer transition-transform duration-300 hover:scale-110 select-none"
        onClick={handleClick}
      >
        {days[index]}
      </h1>
    </div>
  );
}