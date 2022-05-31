import React from "react";
import TodoList from "../TodoList";
import AppHeader from "../AppHeader";
import SearchPanel from "../SearchPanel";

const App = () => {
  const todoData = [
    { label: "Coffee", important: false },
    { label: "Tea", important: true },
    { label: "Coco", important: false },
  ];

  return (
    <div className="App">
      <AppHeader toDo={0} done={0}></AppHeader>
      <SearchPanel></SearchPanel>
      <TodoList todo={todoData}></TodoList>
    </div>
  );
};

export default App;