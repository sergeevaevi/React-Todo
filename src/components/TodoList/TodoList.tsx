import React from "react";
import TodoListItem from "../TodoListItem/TodoListItem";
import "./TodoList.css";
import { TodoItems } from "../App/App";

const TodoList = ({ todo } : {todo: Array<TodoItems>}) => {
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
