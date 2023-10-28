import { useRef } from "react";

export default function RefFunc2() {
  const idRef = useRef(1);

  const plusIdRef = () => {
    idRef.current += 1;
    console.log(idRef.current);
  };

  return (
    <>
      <p>useRef 로컬 변수 사용</p>
      {/* ref는 재렌더링이 되지 않기 때문에 ref 값이 바뀌어도 보여지는 것은 1 (state는 재렌더링 되기 때문에 값이 변할 때마다 보여지는 것도 바뀜) */}
      <h2>{idRef.current}</h2>
      <button onClick={plusIdRef}>plus ref</button>
    </>
  );
}
