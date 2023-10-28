import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// import { createStore } from "redux";

// const add = document.querySelector("#add");
// const minus = document.querySelector("#minus");
// const num = document.querySelector("#num");

// redux를 이용한 +1, -1 코드
// const ADD = "ADD";
// const MINUS = "MINUS";

// const countReducer = (state = 0, action) => {
//   console.log(state, action);

//   switch (action.type) {
//     case ADD:
//       return state + 1;
//     case MINUS:
//       return state - 1;
//     default:
//       return state;
//   }
// };

// const countStore = createStore(countReducer);
// console.log(countStore);

// countStore.subscribe(() => {
//   num.textContent = countStore.getState();
// });

// add.addEventListener("click", () => {
//   countStore.dispatch({ type: ADD });
// });

// minus.addEventListener("click", () => {
//   countStore.dispatch({ type: MINUS });
// });

// javascript를 이용한 +1, -1 코드
// let count = 0;
// num.textContent = count;

// add.addEventListener("click", () => {
//   count += 1;
//   num.textContent = count;
// });

// minus.addEventListener("click", () => {
//   count -= 1;
//   num.textContent = count;
// });

// to do 실습 문제
// const ul = document.querySelector("#ul");
// const add = document.querySelector("#add");
// const todo = document.querySelector("#todo");

// let todoValue = "";
// let removeValue = "";

// const ADD = "ADD";
// const REMOVE = "REMOVE";

// const todoReducer = (state = [], action) => {
//   console.log(state, action);

//   switch (action.type) {
//     case ADD:
//       console.log(todoValue);
//       return [...state, todoValue];
//     case REMOVE:
//       console.log(removeValue);
//       return state.filter((value) => value !== removeValue);
//     default:
//       return state;
//   }
// };

// const todoStore = createStore(todoReducer);
// console.log(todoStore);

// todoStore.subscribe(() => {
//   ul.innerHTML = "";
//   let htmlText = "";

//   console.log("state", todoStore.getState());

//   todoStore.getState().map((value) => {
//     htmlText += `<li>${value}<button id='remove' value=${value}>DEL</button></li>`;
//   });

//   ul.innerHTML = htmlText;
// });

// add.addEventListener("click", () => {
//   todoStore.dispatch({ type: ADD });
//   todo.value = "";
// });

// ul.addEventListener("click", (e) => {
//   if (e.target && e.target.id === "remove") {
//     removeValue = e.target.value;
//     todoStore.dispatch({ type: REMOVE });
//   }
// });

// todo.addEventListener("input", () => {
//   todoValue = todo.value;
// });
