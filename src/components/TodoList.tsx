import React from "react";
import TodoListItem from "./TodoListItem";


const TodoList = ({ todo }) => {
  return (
    <ul>
      {todo.map((el, index) => {
        return (
          <li key={index}>
            <TodoListItem {...el}/>
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
