import "./Input.scss";

import React, {useState} from "react";

const KEYBOARD_EVENT_KEY = {
  ENTER: "Enter",
  ESCAPE: "Escape",
};

export const Input: React.FC = () => {
  const [
    todoText,
    setTodoText
  ] = useState("");

  const addTodo = function mockAddTodo(trimmedTodoText: string) {
    return "FIXME";
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    switch (event.key) {
      case KEYBOARD_EVENT_KEY.ENTER: {
        event.preventDefault();

        const trimmedTodoText = todoText.trim();

        if (trimmedTodoText) {
          addTodo(trimmedTodoText);
          setTodoText("");
        }
        break;
      }

      case KEYBOARD_EVENT_KEY.ESCAPE: {
        setTodoText("");
        break;
      }

      default: {
        break;
      }
    }
  };

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setTodoText(event.currentTarget.value);
  };

  return (
    <input
      className="todo-input"
      placeholder="Write your todo, then press enter"
      value={todoText}
      onKeyDown={handleKeyDown}
      onChange={handleChange}
    />
  );
};
