import "./TodoItem.scss";

import React from "react";
import classNames from "classnames";

export interface TodoItemModel {
  id: string;
  content: string;
  completed: boolean;
}

export interface TodoItemProps {
  todoItem: TodoItemModel;
}

const changeCompletedStatusOfTodo = function mockChangeCompletedStatusOfTodo(
  a: string,
  b: boolean
) {
  return "asd";
};

export const TodoItem = ({todoItem}: TodoItemProps) => {
  const todoContentClassName = classNames("todo-content", {
    completed: todoItem.completed,
  });

  const handleCheckboxChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    changeCompletedStatusOfTodo(todoItem.id, event.currentTarget.checked);
  };

  return (
    <li className={"todo-item"}>
      <input
        className={"todo-checkbox"}
        id={todoItem.id}
        type={"checkbox"}
        checked={todoItem.completed}
        onChange={handleCheckboxChange}
      />
      <label
        htmlFor={todoItem.id}
        className={todoContentClassName}
      >
        {todoItem.content}
      </label>
    </li>
  );
};
