import styled from "styled-components";
import { useState } from "react";

export default function ColorChange() {
  const [btnColor, setBtnColor] = useState("blue");
  const [textColor, setTextColor] = useState("white");

  const _Btn = styled.button`
    background-color: ${btnColor};
    color: ${textColor};
    padding: 10px 15px;
    border-radius: 4px;
  `;

  const changeColor = () => {
    btnColor === "blue" ? setBtnColor("red") : setBtnColor("blue");
    textColor === "white" ? setTextColor("black") : setTextColor("white");
  };

  return (
    <>
      <_Btn onClick={changeColor}>색상 변경!</_Btn>
    </>
  );
}
