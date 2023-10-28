import { useState, useCallback } from "react";

export default function ParentComponent() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState("");

  const increment = () => {
    console.log("not useCallback", count);
    setCount((prevCount) => prevCount + 1);
  };
  const incrementCount = useCallback(() => {
    console.log("useCallback", count);
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <ChildComponent onClick={increment} />
      <p>Count: {count}</p>
    </>
  );
}

function ChildComponent({ onClick }) {
  return <button onClick={onClick}>Increment Count</button>;
}
