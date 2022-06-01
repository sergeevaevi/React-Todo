import React from "react";
import TodoList from "../TodoList/TodoList";
import AppHeader from "../AppHeader/AppHeader";
import SearchPanel from "../SearchPanel/SearchPanel";
import ItemStatusFilter from "../ItemStatusFilter/ItemStatusFilter";

export interface TodoItems{
  label:string;
  important: boolean;
}

const App = () => {
  const todoData = [
    { label: "Coffee", important: false },
    { label: "Tea", important: true },
    { label: "Coco", important: false },
  ];

  return (
    <div className="App">
      <AppHeader toDo={0} done={0}></AppHeader>
      <div className="top-panel d-flex">
        <SearchPanel />
        <ItemStatusFilter />
      </div>
      <TodoList todo={todoData}></TodoList>
    </div>
  );
};

export default App;