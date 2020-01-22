import {
  FilterTypes,
} from "./actionCreators";
import {TodoItemModel} from "../components/TodoItem/TodoItem";

export const reduxInitialState = {
  todoState: [] as TodoItemModel[],
  filterState: "ALL" as FilterTypes,
};
