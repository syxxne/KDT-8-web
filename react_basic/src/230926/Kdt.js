import { useNavigate } from "react-router-dom";

export default function Kdt() {
  const navi = useNavigate();
  const onClick = () => {
    navi(-1);
  };

  return (
    <>
      <div>
        학생의 이름은 <span style={{ color: "green" }}>kdt</span> 입니다.
      </div>
      <button onClick={onClick}>이전페이지로</button>
    </>
  );
}
