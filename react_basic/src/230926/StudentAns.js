import { useNavigate, useParams, useSearchParams } from "react-router-dom";

export default function StudentAns() {
  const { name } = useParams();

  const [searchParam, setSearchParam] = useSearchParams();
  const keyword = searchParam.get("name");

  const navi = useNavigate();
  const onClick = () => {
    navi(-1);
  };

  return (
    <>
      <div>
        학생 이름은 <span style={{ color: "green" }}>{name}</span>
        {keyword !== null && (
          <div>
            실제 이름은 <span style={{ color: "red" }}>{keyword}</span>
          </div>
        )}
      </div>
      <button onClick={onClick}>이전페이지로</button>
    </>
  );
}
