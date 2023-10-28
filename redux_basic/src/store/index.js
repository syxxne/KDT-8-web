import { createSlice, configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counter";
import loginSlice from "./login";

// const counterSlice = createSlice({
//   name: "counter",
//   initialState: { number: 0 },
//   reducers: {
//     increment(state, action) {
//       state.number++;
//     },
//     decrement(state) {
//       state.number--;
//     },
//     plus(state, action) {
//       console.log(action);
//       const { ten, minus } = action.payload;
//       state.number = state.number + ten + minus;
//     },
//   },
// });

// const initLogin = { isLogin: false };

// const loginSlice = createSlice({
//   name: "login",
//   initialState: initLogin,
//   reducers: {
//     login(state) {
//       state.isLogin = true;
//     },
//     logout(state) {
//       state.isLogin = false;
//     },
//   },
// });

const store = configureStore({
  reducer: { counter: counterSlice, login: loginSlice },
});

export default store;
