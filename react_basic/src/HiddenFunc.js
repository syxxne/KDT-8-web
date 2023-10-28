import { useState } from "react";

export default function HiddenFunc() {
  const [visibility, setVisibillity] = useState("visible");
  const [buttonName, setButtonName] = useState("사라져라");

  const handleVisibility = () => {
    setVisibillity("hidden");
    setButtonName("보여라");
  };

  return (
    <div>
      <button onClick={handleVisibility}>{buttonName}</button>
      <h1 style={{ visibility: visibility }}>안녕하세요</h1>
    </div>
  );
}
