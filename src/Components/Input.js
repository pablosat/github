import React, { useEffect, useRef, useState } from "react";

export const Input = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState("");
  const ref = useRef(null);

  useEffect(() => {
    ref.current.focus();
  }, []);

  return (
    <input
      ref={ref}
      placeholder="Search github user..."
      className="input"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value.trim())}
      onKeyDown={({ key }) => {
        if (key === "Enter" && !!inputValue) {
          onSubmit(inputValue);
        }
      }}
    />
  );
};
