import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [todos, setTodos] = useState([]);
  const [inputTodo, setInputTodo] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const todoData = async () => {
      const res = await axios({
        method: "GET",
        url: "http://localhost:8000/todos",
      });

      console.log(res);
      setTodos(res.data.data);
      setLoading(false);
    };

    todoData();
  }, []);

  const addTodo = async () => {
    if (inputTodo !== "") {
      const res = await axios({
        method: "POST",
        url: "http://localhost:8000/todo",
        data: { title: inputTodo },
      });

      console.log(res);

      const newTodo = {
        title: inputTodo,
        checked: false,
      };

      setTodos([...todos, newTodo], setInputTodo(""));
    }
  };

  const deleteTodo = async () => {
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].checked === true) {
        const id = todos[i].id;
        const res = await axios({
          method: "DELETE",
          url: `http://localhost:8000/todo/${id}`,
          data: { id: id },
        });

        console.log(res);
      }
    }
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id ? { ...todo, checked: !todo.checked } : todo;
      })
    );
  };

  return (
    <div>
      <input
        type="text"
        value={inputTodo}
        onChange={(e) => setInputTodo(e.target.value)}
        placeholder="Add your new Todo"
      />
      <button onClick={addTodo}>ADD</button>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <ul>
          {todos.map((todo) => {
            return (
              <>
                <li key={todo.id}>
                  <input
                    type="checkbox"
                    checked={todo.checked}
                    onChange={() => toggleTodo(todo.id)}
                  />
                  {todo.title}
                </li>
                <button onClick={deleteTodo}>DELETE</button>
              </>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default App;
