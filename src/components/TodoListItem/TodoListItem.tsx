import React, { useState } from "react";
import "./TodoListItem.css";

const TodoListItem = ({
  done,
  important,
  label,
  onDeleted,
  onToggleImportant,
  onToggleDone,
}: {
  done: boolean;
  important: boolean;
  label: string;
  onDeleted: Function;
  onToggleImportant: React.MouseEventHandler<HTMLSpanElement>;
  onToggleDone: React.MouseEventHandler<HTMLSpanElement>;
}) => {

  return (
    <span className={done ? "todo-list-item done" : "todo-list-item"}>
      <span
        className={
          important ? "todo-list-item-label important" : "todo-list-item-label"
        }
        onClick={onToggleDone}
      >
        {label}
      </span>

      <button
        type="button"
        className="btn btn-outline-success btn-sm float-end"
        onClick={(e) => onDeleted(e)}
      >
        <i className="bi bi-trash"></i>
      </button>

      <button
        type="button"
        className="btn btn-outline-danger btn-sm float-end"
        onClick={onToggleImportant}
      >
        <i className="bi bi-exclamation"></i>
      </button>
    </span>
  );
};

export default TodoListItem;
