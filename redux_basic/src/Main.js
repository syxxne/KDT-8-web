import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ADD_TODO, DELETE_TODO } from "./store";

export default function Main() {
  const [text, setText] = useState("");

  const todos = useSelector((state) => state);

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: ADD_TODO, text });
    setText("");
  };

  const onClick = (id) => {
    dispatch({ type: DELETE_TODO, id });
  };

  return (
    <div>
      <h1>To Dos</h1>
      <form onSubmit={onSubmit}>
        <input value={text} onChange={(e) => setText(e.target.value)} />
        <button>Add</button>
      </form>
      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id} id={todo.id}>
              {todo.text}
              <button onClick={() => onClick(todo.id)}>DEL</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
