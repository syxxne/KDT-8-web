import { useRef } from "react";

export default function RefFunc() {
  const inputRef = useRef();

  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <p>(함수형 컴포넌트) 버튼 클릭 시, input에 focus 처리</p>
      <input ref={inputRef} />
      <button onClick={handleFocus}>focus</button>
    </>
  );
}
