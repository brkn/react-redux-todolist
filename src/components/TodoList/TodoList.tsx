import "./TodoList.scss";

import React from "react";
import {connect} from "react-redux";

import {TodoItem} from "../TodoItem/TodoItem";
import {StoreState} from "../../redux/initialState";

const TodoListComponent = ({todos, currentFilter}: TodoListComponentProps) => {
  const getVisibleTodos = () => {
    switch (currentFilter) {
      case "ACTIVE":
        return todos.filter((todo) => !todo.completed);
      case "COMPLETED":
        return todos.filter((todo) => todo.completed);
      case "ALL":
      default:
        return todos;
    }
  };

  return (
    <ul className="todo-list">
      {getVisibleTodos().map((todoItem) => (
        <TodoItem
          key={todoItem.id}
          todoItem={todoItem}
        />
      ))}
    </ul>
  );
};

const mapStateToProps = (storeState: StoreState) => ({
  todos: storeState.todos,
  currentFilter: storeState.filter,
});

export const TodoList = connect(mapStateToProps)(TodoListComponent);

type TodoListComponentProps = ReturnType<typeof mapStateToProps>;
