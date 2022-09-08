import React, { useState } from "react";

export const Input = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <input
      placeholder="Search github user..."
      className="input"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value.trim())}
      onKeyDown={({ code }) => {
        if (code === "Enter" && !!inputValue) {
          onSubmit(inputValue);
        }
      }}
    />
  );
};
