import { Link, Outlet, useParams } from "react-router-dom";
import { users } from "./User";

export default function UserDetail() {
  const { userId } = useParams();
  return (
    <>
      <div>
        사용자 {userId}은/는 {users[Number(userId) - 1].name}입니다.
      </div>
      <Link to="comment">Comment</Link>
      <Outlet context={{ comment: users[Number(userId) - 1].comment }} />
    </>
  );
}
