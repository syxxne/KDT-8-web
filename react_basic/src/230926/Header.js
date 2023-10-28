import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const navi = useNavigate();

  const onClick = () => {
    navi("redirect");
  };

  return (
    <div>
      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/user">User</Link>
        </li>
        <li>
          <button onClick={onClick}>Redirect</button>
        </li>
      </ul>
    </div>
  );
}
