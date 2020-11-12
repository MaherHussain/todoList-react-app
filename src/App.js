import React from 'react';
import Counter from './components/Counter'
import './App.css';
import TodoList from './components/todoList'


function App() {
  return (
    <div className="App">
      <Counter />
      <h2>My todo list</h2>


      <TodoList />
    </div>
  );
}

export default App;
