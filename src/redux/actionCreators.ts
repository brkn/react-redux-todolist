import uuidv4 from "uuid/v4";

export const addTodo = (content: string) => ({
  type: "ADD_TODO" as TodoAction,
  id: uuidv4(),
  content,
});

export const setFilter = (filter: FilterTypes) => ({
  type: "SET_FILTER",
  filter,
});

export const toggleTodo = (id: string) => ({
  type: "TOGGLE_TODO" as TodoAction,
  id,
});

export type TodoAction = "ADD_TODO" | "TOGGLE_TODO";
export type AddTodoAction = ReturnType<typeof addTodo>;
export type ToggleTodoAction = ReturnType<typeof toggleTodo>;

export type FilterTypes = "ALL" | "COMPLETED" | "ACTIVE";
export type SetFilterAction = ReturnType<typeof setFilter>;
