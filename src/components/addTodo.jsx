import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, updateTodo } from "../featurs/todo/todoSlice";
import { useEffect } from "react";

function AddTodo() {
  const [input, setInput] = useState("");
  let isAddTodo = useSelector((state) => state.isAddTodo);
  let updateInput = useSelector((state) => state.input);
  let updateId = useSelector((state) => state.id);

  useEffect(() => {
    if (!isAddTodo) {
      setInput(updateInput);
    }
  }, [isAddTodo, updateInput]);

  const dispatch = useDispatch();
  const addTodoHandler = (e) => {
    e.preventDefault();
    if (input.length > 0) {
      dispatch(addTodo(input));
      setInput("");
    }
  };

  const updateHandler = (e) => {
    e.preventDefault();
    dispatch(updateTodo({ id: updateId, text: input }));
    setInput("");
  };

  return (
    <>
      <h1>To Do list</h1>
      <form onSubmit={isAddTodo ? addTodoHandler : updateHandler}>
        <input
          type="text"
          placeholder="Enter the Task Here"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        ></input>
        <button className="add" type="submit">
          {isAddTodo ? "Add" : "Update "}
        </button>
      </form>
    </>
  );
}

export default AddTodo;
