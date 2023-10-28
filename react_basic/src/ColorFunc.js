import { useState } from "react";

export default function ColorFunc() {
  const [color, setColor] = useState("black");
  const [text, setText] = useState("검정색 글씨");

  const handleRed = () => {
    setColor("red");
    setText("빨간색 글씨");
  };

  const handleBlue = () => {
    setColor("blue");
    setText("파란색 글씨");
  };

  return (
    <div>
      <h1 style={{ color: color }}>{text}</h1>
      <button onClick={handleRed}>빨간색</button>
      <button onClick={handleBlue}>파란색</button>
    </div>
  );
}
