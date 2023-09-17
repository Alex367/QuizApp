import { configureStore, createSlice } from "@reduxjs/toolkit";

// result -> all results across each question
const initialState = { result: [] };

const quizSlice = createSlice({
  name: "quizName",
  initialState,
  reducers: {
    saveResult(state, action) {
      state.result.push(action.payload);
    },
    clearResult(state) {
      state.result = [];
    },
  },
});

const store = configureStore({
  reducer: { quizReducer: quizSlice.reducer },
});

export const quizActions = quizSlice.actions;
export default store;
