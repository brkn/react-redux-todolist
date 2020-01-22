import "./App.scss";

import React from "react";
import {Provider} from "react-redux";

import {TodoList} from "../TodoList/TodoList";
import {store} from "../../redux";
import {Input} from "../Input/Input";
import {Footer} from "../Footer/Footer";
import {Header} from "../Header/Header";

export const App = () => {
  return (
    <main>
      <Header />

      <Provider store={store}>
        <Input />
        <TodoList />
        <Footer />
      </Provider>
    </main>
  );
};
