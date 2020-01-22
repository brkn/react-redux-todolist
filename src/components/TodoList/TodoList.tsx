import "./TodoList.scss";

import React from "react";
import {connect} from "react-redux";

import {TodoItem} from "../TodoItem/TodoItem";
import {StoreState} from "../../redux/initialState";

const TodoListComponent = ({todos}: TodoListComponentProps) => (
  <ul className="todo-list">
    {todos.map((todoItem) => (
      <TodoItem
        key={todoItem.id}
        todoItem={todoItem}
      />
    ))}
  </ul>
);

const mapStateToProps = (storeState: StoreState) => ({
  todos: storeState.todoReducer,
});

export const TodoList = connect(mapStateToProps)(TodoListComponent);

type TodoListComponentProps = ReturnType<typeof mapStateToProps>;
