import React from "react";
import'./AppHeader.css'

const AppHeader = ({ toDo=0, done=0 }:{toDo:number, done:number}) => {
  return (
    <div className="app-header d-flex">
      <h1>Todo List</h1>
      <h2>
        {toDo} more to do, {done} done
      </h2>
    </div>
  );
};

export default AppHeader;
