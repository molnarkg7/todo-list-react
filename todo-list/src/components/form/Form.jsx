import React, { useState } from "react";
import "../form/Form.css";

const Form = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState("");

  const handleChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(newTodo);
    setNewTodo("");
  };

  return (
    <form className="todo-form">
      <input
        type="text"
        value={newTodo}
        className="todo-input"
        placeholder="Add new task"
        onChange={handleChange}
      />
      <button type="submit" className="todo-button" onClick={handleSubmit}>
        Add Task
      </button>
    </form>
  );
};

export default Form;
