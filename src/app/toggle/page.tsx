"use client";
import React, { useRef, useState } from "react";
import ToggleIcon from "../components/toggle";
export default function Page() {
  const [input, setInput] = useState("");
  const [inputType, setInputType] = useState("password");
  const handleIcon = () => {
    setInputType((prev) => (prev === "text" ? "password" : "text"));
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="card m-5 px-5 py-2 flex flex-col gap-5 items-center"
    >
      <p className="font-bold text-lg text-blue-500"> Useref test </p>
      <div className="flex gap-5">
        <ToggleIcon
          initialIcon="eye-slash"
          toggleIcon="eye"
          onClick={handleIcon}
        />
        <input
          className="focus:outline-1 focus:outline-blue-500 px-3 py-2"
          type={inputType}
          value={input}
          placeholder="testing...."
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <button>submit</button>
    </form>
  );
}
