import React, { useState } from "react";
import TodoList from "../TodoList/TodoList";
import AppHeader from "../AppHeader/AppHeader";
import SearchPanel from "../SearchPanel/SearchPanel";
import ItemStatusFilter from "../ItemStatusFilter/ItemStatusFilter";
import ItemAddForm from "../ItemAddForm/ItemAddForm";

export interface TodoItems {
  label: string;
  important: boolean;
  done: boolean;
}

const App = () => {
  const [todoData, setTodoData] = useState([
    { label: "Coffee", important: false, done: false },
    { label: "Tea", important: true, done: false },
    { label: "Coco", important: false, done: true },
  ]);
  const [term, setTerm] = useState("");
  const [filter, setFilter] = useState("all");

  const doneCount = todoData.filter((e) => e.done).length;
  const todoCount = todoData.length - doneCount;

  const filterItems = () => {
    switch (filter) {
      case "all":
        return todoData;
      case "active":
        return todoData.filter((item) => !item.done);
      case "done":
        return todoData.filter((item) => item.done);
      default:
        return todoData;
    }
  };

  const search = (items: Array<TodoItems>) => {
    if (term.length === 0) {
      return items;
    }
    return items.filter(
      (item) => item.label.toLowerCase().indexOf(term.toLowerCase()) > -1
    );
  };

  const deleteItem = (id: number) => {
    setTodoData(todoData.filter((el, index) => index !== id));
  };

  const addItem = (item: TodoItems) => {
    setTodoData([...todoData, item]);
  };

  const handleToggleImportant = (id: number) => {
    setTodoData(
      todoData.map((item, index) =>
        index === id ? { ...item, important: !item.important } : { ...item }
      )
    );
  };

  const handleToggleDone = (id: number) => {
    setTodoData(
      todoData.map((item, index) =>
        index === id ? { ...item, done: !item.done } : { ...item }
      )
    );
  };

  const handleSearchChange = (term: string) => {
    setTerm(term);
  };

  const handleFilterChange = (filter: string) => {
    setFilter(filter);
  };

  return (
    <div className="App">
      <AppHeader toDo={todoCount} done={doneCount}></AppHeader>
      <div className="top-panel d-flex">
        <SearchPanel onSearchChange={handleSearchChange} />
        <ItemStatusFilter filter={filter} onFilterChange={handleFilterChange} />
      </div>
      <TodoList
        todo={search(filterItems())}
        onDeleted={deleteItem}
        onToggleImportant={handleToggleImportant}
        onToggleDone={handleToggleDone}
      ></TodoList>
      <ItemAddForm onItemAdded={addItem}></ItemAddForm>
    </div>
  );
};

export default App;
