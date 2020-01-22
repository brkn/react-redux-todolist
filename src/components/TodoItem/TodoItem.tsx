import "./TodoItem.scss";

import React from "react";
import classNames from "classnames";
import {connect} from "react-redux";

import {
  toggleTodo,
  deleteTodo,
} from "../../redux/actionCreators";

export interface TodoItemModel {
  id: string;
  content: string;
  completed: boolean;
}

const TodoItemComponent = ({
  todoItem,
  dispatchToggleTodo,
  dispatchDeleteTodo,
}: TodoItemProps) => {
  const todoContentClassName = classNames("todo-content", {
    completed: todoItem.completed,
  });

  return (
    <li className={"todo-item"}>
      <div className={"todo-checkbox-content-wrapper"}>
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
      </div>

      <button
        className={"todo-item-delete-button"}
        type={"button"}
        onClick={(event) => {
          event.stopPropagation();
          console.log(todoItem.id);
          dispatchDeleteTodo(todoItem.id);
        }}
      >
        {"\u2718"}
      </button>
    </li>
  );
};

const dispatchToProps = {
  dispatchToggleTodo: toggleTodo,
  dispatchDeleteTodo: deleteTodo,
};

export const TodoItem = connect(null, dispatchToProps)(TodoItemComponent);

export interface TodoItemOwnProps {
  todoItem: TodoItemModel;
}
export type TodoItemProps = TodoItemOwnProps & typeof dispatchToProps;
