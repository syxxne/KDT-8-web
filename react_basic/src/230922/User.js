import { useState, useEffect } from "react";
import axios from "axios";

export default function User() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios({
        method: "GET",
        url: "https://jsonplaceholder.typicode.com/users",
      });

      setUsers(res.data);
    };

    fetchData();

    return () => {
      console.log("연결 해제 완료");
    };
  }, []);

  useEffect(() => {
    console.log("유저 정보 업데이트", users.length);
  }, [users]);

  return (
    <>
      <ul>
        {users.map((value) => {
          return (
            <li key={value.id}>
              {value.name}-{value.email}
            </li>
          );
        })}
      </ul>
    </>
  );
}
