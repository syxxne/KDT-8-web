import { useNavigate, useSearchParams } from "react-router-dom";

export default function NewStudent() {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get("name"));

  const navi = useNavigate();
  const onClick = () => {
    navi(-1);
  };

  return (
    <>
      <div>
        학생의 이름은 <span style={{ color: "green" }}>new</span> 입니다.
      </div>
      <div>
        실제 이름은{" "}
        <span style={{ color: "red" }}>{searchParams.get("name")}</span> 입니다.
      </div>
      <button onClick={onClick}>이전페이지로</button>
    </>
  );
}
