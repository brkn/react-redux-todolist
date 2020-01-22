import "./TodoItem.scss";

import React from "react";
import classNames from "classnames";
import {connect} from "react-redux";

import {toggleTodo} from "../../redux/actionCreators";

export interface TodoItemModel {
  id: string;
  content: string;
  completed: boolean;
}

const TodoItemComponent = ({todoItem, dispatchToggleTodo}: TodoItemProps) => {
  const todoContentClassName = classNames("todo-content", {
    completed: todoItem.completed,
  });

  return (
    <li className={"todo-item"}>
      <input
        className={"todo-checkbox"}
        id={todoItem.id}
        type={"checkbox"}
        checked={todoItem.completed}
        onChange={() => {
          dispatchToggleTodo(todoItem.id);
        }}
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

const dispatchToProps = {
  dispatchToggleTodo: toggleTodo,
};

export const TodoItem = connect(null, dispatchToProps)(TodoItemComponent);

export interface TodoItemOwnProps {
  todoItem: TodoItemModel;
}
export type TodoItemProps = TodoItemOwnProps & typeof dispatchToProps;
