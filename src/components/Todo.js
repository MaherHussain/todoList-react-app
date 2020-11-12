import React, { useState, useEffect, useCallback } from "react";
import TodoForm from "./todoForm";

import { FaRegEdit } from "react-icons/fa";
import { AiTwotoneDelete } from "react-icons/ai";

export default function Todo({ todos, deleteTodo, completeTodo, updateTodo, setTodos ,}) {
  const [edit, setEdit] = useState({
    id: null,
    description: "",
   deadline : ""

  });
 
  const submitUpdate = (description, deadline) => {
    
    updateTodo(edit.id, description, deadline);
   
    setEdit({
      id: null,
      description:"",
      deadline:"",
    });
 
  
     
     
 };

  return (
  <div>
 {edit.id &&(
    <TodoForm edit={edit} onSubmitHandle={submitUpdate} />
    )}:
 
    
      {todos.map((item, index) => {
        return (
          <div>
            <div
              className={item.isCompleted ? "todo-row completed" : "todo-row"}
              key={index}
            >
              {item.description} | {item.deadline}
            </div>
            <div className="icons">
              <input type="checkbox" onClick={() => completeTodo(item.id)} />
              <FaRegEdit
                className="edit-icon"
                onClick={()=> setEdit({
                    id: item.id,
                    description: item.description,
                    deadline : item.deadline

                  }) 
                  
                }
              />
              <AiTwotoneDelete
                onClick={() => deleteTodo(item.id)}
                className=" delete-icon "
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
