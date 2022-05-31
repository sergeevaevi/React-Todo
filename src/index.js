import React from 'react';
import ReactDOM from 'react-dom/client';
import TodoList from './components/TodoList';
import AppHeader from './components/AppHeader';
import SearchPanel from './components/SearchPanel';

const App = () => {

  const todoData = [
    {label: "Coffee", important: false },
    {label: "Tea", important: true },
    {label: "Coco", important: false },
  ]

  return (
    <div className="App">
      <AppHeader></AppHeader>
      <SearchPanel></SearchPanel>
      <TodoList todo={todoData}></TodoList>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
