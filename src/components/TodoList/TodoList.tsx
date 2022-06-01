import React from "react";
import TodoListItem from "../TodoListItem/TodoListItem";
import "./TodoList.css";
import { TodoItems } from "../App/App";

const TodoList = ({
  todo,
  onDeleted,
  onToggleImportant,
  onToggleDone,
}: {
  todo: Array<TodoItems>;
  onDeleted: Function;
  onToggleImportant: Function;
  onToggleDone: Function;
}) => {
  return (
    <ul className="list-group todo-list">
      {todo.map((el, index) => {
        return (
          <li className="list-group-item" key={el.label + index}>
            <TodoListItem
              {...el}
              onDeleted={() => onDeleted(index)}
              onToggleImportant={() => onToggleImportant(index)}
              onToggleDone={() => onToggleDone(index)}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
