import {FilterTypes} from "./actionCreators";
import {TodoItemModel} from "../components/TodoItem/TodoItem";
import {rootReducer} from "./reducers";

export const initialTodoState: TodoItemModel[] = [{
  id: "first-todo",
  content: "Finish Getir assignment",
  completed: true,
}];

export const initialFilterState: FilterTypes = "ALL";

export type StoreState = ReturnType<typeof rootReducer>;
