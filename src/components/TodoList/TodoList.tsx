import "./TodoList.scss";

import React from "react";

import {
  TodoItemModel,
  TodoItem,
} from "../TodoItem/TodoItem";

export const TodoList = () => {
  const mockTodos: TodoItemModel[] = [
    {

      id: "todo-1",
      content: "this is first todo",
      completed: false
    }, 
    {

      id: "todo-2",
      content: "this is second todo",
      completed: false
    }, 
    {

      id: "todo-3",
      content: "this is third todo, this is completed",
      completed: true
    }, 
  ]
  const todoItems = mockTodos;
  
  return (
    <ul className="todo-list">
      {todoItems.map((todoItem) => {
        <TodoItem
          key={todoItem.id}
          todoItem={todoItem}
        />;
      })}
    </ul>
  );
};
