import React, { useState } from "react";
import Form from "./components/form/Form";
import List from "./components/list/List";

function App() {
  const [todos, setTodos] = useState([]);

  const toggleComplete = (selectedTodo) => {
    const updatedTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return { ...todo, complete: !todo.complete };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const addTodo = (newTodo) => {
    if (newTodo !== "") {
      setTodos([...todos, { text: newTodo, complete: false }]);
    }
  };

  const removeTodo = (todoToRemove) => {
    let updatedTodos = todos.filter((todo) => todo.text !== todoToRemove.text);
    setTodos(updatedTodos);
  };

  const editTodo = (todoToEdit) => {
    let todoToUpdateIndex = todos.findIndex(
      (todo) => todo.text === todoToEdit.text
    );
    console.log(todoToUpdateIndex);
  };

  return (
    <div className="todo-app">
      <header>
        <h1>ToDo List</h1>
      </header>
      <Form addTodo={addTodo} />
      <List
        todos={todos}
        toggleComplete={toggleComplete}
        onRemoveTodo={removeTodo}
        editTodo={editTodo}
      />
    </div>
  );
}

export default App;
