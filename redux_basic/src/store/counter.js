import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { number: 0 },
  reducers: {
    increment(state, action) {
      state.number++;
    },
    decrement(state) {
      state.number--;
    },
    plus(state, action) {
      console.log(action);
      const { ten, minus } = action.payload;
      state.number = state.number + ten + minus;
    },
  },
});

export const counterAction = counterSlice.actions;

export default counterSlice.reducer;
