import "./TodoItem.scss";

import React from "react";

export interface TodoItemModel {
  id: string;
  content: string;
  completed: boolean;
}

export interface TodoItemProps {
  todoItem: TodoItemModel;
}

export const TodoItem = ({todoItem}: TodoItemProps) => {
  return (
    <div className="todo-item">
      <p>{todoItem.content}</p>
    </div>
  );
};
