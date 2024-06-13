import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, text: "hello World!" }],
  isAddTodo: true,
  input: "",
  id: "",
};

export const todoSlice = createSlice({
  name: "todos",
  initialState: initialState,
  reducers: {
    addTodo: (state, action) => {
      let todo = { id: nanoid(), text: action.payload };
      state.todos = [...state.todos, todo];
      state.isAddTodo = true;
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, text: action.payload.text };
        }
        return todo;
      });
      state.isAddTodo = true;
    },
    updatingTodo: (state, action) => {
      state.id = action.payload.id;
      state.input = action.payload.text;
      state.isAddTodo = false;
    },
  },
});

export const { addTodo, removeTodo, updateTodo, updatingTodo } =
  todoSlice.actions;

export default todoSlice.reducer;
