import React from "react";
import ListItem from "../list-item/ListItem";

const List = ({ todos, toggleComplete, onRemoveTodo, editTodo }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <ListItem
          key={todo.text}
          todo={todo}
          toggleComplete={toggleComplete}
          onRemoveTodo={onRemoveTodo}
          editTodo={editTodo}
        />
      ))}
    </ul>
  );
};

export default List;
