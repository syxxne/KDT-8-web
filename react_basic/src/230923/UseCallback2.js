import { useState, useCallback } from "react";

export default function UseCallback2() {
  const [text, setText] = useState("");

  // useCallback 사용 X
  const onChangeText = (e) => {
    setText(e.target.value);
  };

  // useCallback 사용 O
  const onChangeTextUseCallback = useCallback((e) => {
    setText(e.target.value);
  }, []);

  return (
    <>
      <h1>useCallback test</h1>
      <input onChange={onChangeText} />
      <div>
        <span>작성한 값: {text || "없음"}</span>
      </div>
    </>
  );
}
