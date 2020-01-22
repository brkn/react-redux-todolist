import "./App.scss";

import React from "react";
import {Provider} from "react-redux";

import {TodoList} from "../TodoList/TodoList";
import {store} from "../../redux";

export const App: React.FC = () => {
  return (
    <Provider store={store}>
      <TodoList />
    </Provider>
  );
};
