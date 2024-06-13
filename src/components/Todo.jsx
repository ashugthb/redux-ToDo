import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeTodo,
  updateTodo,
  updatingTodo,
} from "../featurs/todo/todoSlice";

function Todo() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <>
      <div className="card">
        {todos.map((todo) => (
          <li key={todo.id} className="navbar">
            <div className="text logo">{todo.text}</div>
            <div className="nav-buttons">
              <button
                className="delete"
                onClick={() => {
                  dispatch(removeTodo(todo.id));
                }}
              >
                Delete
              </button>
              <button
                className="update "
                onClick={() => {
                  dispatch(updatingTodo({ id: todo.id, text: todo.text }));
                }}
              >
                Update
              </button>
            </div>
          </li>
        ))}
      </div>
    </>
  );
}

export default Todo;
