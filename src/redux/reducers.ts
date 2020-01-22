import {combineReducers} from "redux";

import {
  AddTodoAction,
  ToggleTodoAction,
  FilterTypes,
  SetFilterAction,
} from "./actionCreators";
import {TodoItemModel} from "../components/TodoItem/TodoItem";

const todoReducer = (
  todoState = [] as TodoItemModel[],
  action: AddTodoAction | ToggleTodoAction
) => {
  switch (action.type) {
    case "ADD_TODO": {
      const {id, content} = action as AddTodoAction;
      return [
        ...todoState,
        {
          id,
          content,
          completed: false,
        },
      ];
    }
    case "TOGGLE_TODO": {
      return todoState.map((todo) => (todo.id === action.id
        ? {
          ...todo,
          completed: !todo.completed,
        }
        : todo));
    }
    default:
      return todoState;
  }
};

const filterReducer = (
  filterState = "ALL" as FilterTypes,
  action: SetFilterAction
) => {
  switch (action.type) {
    case "SET_FILTER":
      return action.filter;
    default:
      return filterState;
  }
};

export const rootReducer = combineReducers({
  todoReducer,
  filterReducer
});
