import React from "react";
import TodoListItem from "../TodoListItem";
import "./TodoList.css";

const TodoList = ({ todo } : {todo: Array<{ label: string, important: boolean }>}) => {
  return (
    <ul className="list-group todo-list">
      {todo.map((el, index) => {
        return (
          <li className="list-group-item" key={index}>
            <TodoListItem {...el} />
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
