import { useState } from "react";

export default function LoginForm({ state, dispatch }) {
  const [id, setID] = useState("");
  const [pw, setPW] = useState("");
  const userInfo = { realID: "banana", realPW: "4321" };

  const handleLoginForm = (event) => {
    event.preventDefault();
    const { realID, realPW } = userInfo;

    if (id === realID && pw === realPW) dispatch({ type: "LOGIN_SUCCESS" });
    else if (id !== realID && pw === realPW) dispatch({ type: "MISS_ID" });
    else if (id === realID && pw !== realPW) dispatch({ type: "MISS_PW" });
    else dispatch({ type: "LOGIN_FAILURE" });
  };

  return (
    <form action="" onSubmit={handleLoginForm}>
      <label htmlFor="id">ID</label>
      <input id="id" type="text" onChange={(e) => setID(e.target.value)} />
      <br />

      <label htmlFor="pw">PW</label>
      <input id="pw" type="password" onChange={(e) => setPW(e.target.value)} />
      <br />

      <button>Login</button>
      <br />

      <p>{state.message}</p>
    </form>
  );
}
