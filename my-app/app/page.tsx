// pages / index . tsx
"use client";

import { useState } from "react";

export default function Home()
{
  const [message, setMessage] = useState("Click me!");

  const toggleMessage = () =>
  {
    setMessage(prev => prev === "Click me!" ? "Clicked!" : "Click me!");
  };

  return (
    < div className =" min -h - screen bg - gray -100 flex items - center justify - center
      ">
        <h1
          className =" text -4 lg font - bold text - blue -400 cursor - pointer "
          onClick ={ toggleMessage }
        >
          { message }
        </h1 >
      </ div >
  );
}