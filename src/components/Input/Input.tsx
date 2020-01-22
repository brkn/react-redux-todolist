import "./Input.scss";

import React, {useState} from "react";
import {connect} from "react-redux";

import {addTodo} from "../../redux/actionCreators";

const KEYBOARD_EVENT_KEY = {
  ENTER: "Enter",
  ESCAPE: "Escape",
};

export const InputComponent = ({dispatchAddTodo}: InputProps) => {
  const [
    todoText,
    setTodoText
  ] = useState("");

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    switch (event.key) {
      case KEYBOARD_EVENT_KEY.ENTER: {
        event.preventDefault();

        const trimmedTodoText = todoText.trim();

        if (trimmedTodoText) {
          dispatchAddTodo(trimmedTodoText);
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
      placeholder="Write your todo here"
      value={todoText}
      onKeyDown={handleKeyDown}
      onChange={handleChange}
    />
  );
};

const dispatchToProps = {
  dispatchAddTodo: addTodo
};

export const Input = connect(null, dispatchToProps)(InputComponent);

export type InputProps = typeof dispatchToProps;
