import {combineReducers} from "redux";

import {
  AddTodoAction,
  ToggleTodoAction,
  SetFilterAction,
  DeleteTodoAction,
} from "./actionCreators";
import {
  initialTodoState,
  initialFilterState,
} from "./initialState";

const todoReducer = (
  todoState = initialTodoState,
  action: AddTodoAction | ToggleTodoAction | DeleteTodoAction
) => {
  switch (action.type) {
    case "ADD_TODO": {
      const {id, content} = action as AddTodoAction;
      return [
        {
          id,
          content,
          completed: false,
        },
        ...todoState,
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
    case "DELETE_TODO": {
      const newState = todoState.filter((todo) => todo.id !== action.id);
      return newState;
    }
    default:
      return todoState;
  }
};

const filterReducer = (
  filterState = initialFilterState,
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
  todos: todoReducer,
  filter: filterReducer,
});
