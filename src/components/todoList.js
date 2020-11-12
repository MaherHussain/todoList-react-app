import React, { useState,useEffect,useCallback}  from "react";
import TodoForm from "./todoForm";
import Todo from './Todo' 



export default function TodoList(props) {
  const [todos, setTodos] = useState([]);
  // fetching data from Api
  const fetchingApiData = useCallback(() => {
    fetch(
      "https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setTodos(data)
        console.log(todos);
      });
  },[]);
  
   useEffect(() => {
    fetchingApiData();
  }, [fetchingApiData]);

  // add todo
  const AddTodo = (todo) => {
    if (!todo.description || /^\s*$/.test(todo.description)) {
      return;
    } else if (!todo.deadline || /^\s*$/.test(todo.deadline)) {
      return;
    }
    const newtodo = [...todos].concat(todo);

    setTodos(newtodo);
    console.log(todo, ...todos);
  };
  // update todo
  const updateTodo = (todoId, newValue) => {
    if (!newValue.description || /^\s*$/.test(newValue.description)) {
      return;
    } /* else if (!newValue.deadline || /^\s*$/.test(newValue.deadline)) {
      return;
    } */
    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };

  // delete todo
  const deleteTodo = (id) => {
    const deleteItem = todos.filter((item) => {
      return item.id !== id;
    });
    setTodos(deleteItem);
  };
  
  // complete todo
  const completeTodo = (id) => {
    const completItem = todos.map((elem) => {
      if (elem.id === id) {
        elem.isCompleted = !elem.isCompleted;
      }
      return elem;
    });
    setTodos(completItem);
  };

  return (
    <div>
      <TodoForm onSubmitHandle={AddTodo} />
      <Todo
        todos={todos}
        setTodos={setTodos}
        deleteTodo={deleteTodo}
        completeTodo={completeTodo}
        updateTodo={updateTodo}
        
      />
    </div>
  );
}
