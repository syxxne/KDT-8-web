import React, { useState, useRef } from "react";

interface Props {
  name: String | number;
  age?: number;
}

const PropsType1: React.FC<Props> = ({ name, age }) => {
  const [count, setCount] = useState<number | string>(0);
  const myInput = useRef<HTMLInputElement>(null);

  const handleFocus = () => {
    // myInput.current?.focus() : myInput.current가 존재할 때, focus() 실행
    // myInput.current!.focus() : myInput.current가 존재한다는 것을 장담하므로 오류 X
    myInput.current?.focus();
  };

  const onclick = (e: React.MouseEvent<HTMLElement>) => {};

  return (
    <>
      <h2>Hello {name}</h2>
      <h4>{age}</h4>
      <input ref={myInput} />
      <button onClick={handleFocus}>버튼</button>
      <form action="">
        <button onClick={(e) => onclick(e)}>제출</button>
      </form>
    </>
  );
};

export default PropsType1;

// export default function PropsType1({ name }: Props) {
//   return (
//     <>
//       <h2>Hello {name}</h2>
//     </>
//   );
// }
