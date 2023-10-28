import { createStore } from "redux";

// export const ADD_TODO = "ADD_TODO";
// export const DELETE_TODO = "DELETO_TODO";

// // reducer
// const reducer = (state = [], action) => {
//   console.log(action);
//   switch (action.type) {
//     case ADD_TODO:
//       const newTodo = { text: action.text, id: Date.now() };
//       return [...state, newTodo];
//     case DELETE_TODO:
//       return state.filter((el) => el.id !== action.id);
//     default:
//       return state;
//   }
// };

// // store
// const store = createStore(reducer);

// export default store;

export const ADD_CART = "ADD_CART";
export const DELETE_CART = "DELETE_CART";

// reducer
const reducer = (state = [], action) => {
  console.log(action);
  switch (action.type) {
    case ADD_CART:
      // findIndex() : 배열의 index 값을 찾아주며, 해당 값이 존재하지 않는다면 -1, 존재하면 해당 index 값 반환
      const findIndex = state.findIndex((value) => value.id === action.id);

      if (findIndex !== -1) {
        // state에 직접 접근하면 오류 발생 -> newState로 복사하여 state 내부 값 변경
        const newState = [...state];
        newState[findIndex].quantity++;

        return newState;
      } else {
        const newItem = {
          name: action.name,
          id: action.id,
          price: action.price,
          quantity: 1,
        };

        return [...state, newItem];
      }
    case DELETE_CART:
      return state.filter((value) => value.id !== action.id);
    default:
      return state;
  }
};

// store
const store = createStore(reducer);

// export default store;
