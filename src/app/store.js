import { configureStore } from "@reduxjs/toolkit";
import todoReducers from "../featurs/todo/todoSlice";
export const store = configureStore({
  reducer: todoReducers,
});
