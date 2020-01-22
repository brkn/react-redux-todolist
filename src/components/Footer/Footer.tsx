import "./Footer.scss";

import React from "react";
import {connect} from "react-redux";
import classNames from "classnames";

import {
  setFilter,
  FilterTypes,
} from "../../redux/actionCreators";
import {StoreState} from "../../redux/initialState";

export const FooterComponent = ({
  todoCount,
  activeTodoCount,
  dispatchSetFilter,
  selectedFilter,
  isThereAnyTodo,
}: FooterProps) => {
  const counter = <p>{`${activeTodoCount}/${todoCount} todos left`}</p>;

  if (!isThereAnyTodo) {
    return <footer className={"footer"}>{counter}</footer>;
  }

  const handleOptionChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    dispatchSetFilter(event.target.value as FilterTypes);
  };

  const allButtonClassName = classNames("all-button", {
    selected: selectedFilter === "ALL",
  });
  const activeButtonClassName = classNames("active-button", {
    selected: selectedFilter === "ACTIVE",
  });
  const completedButtonClassName = classNames("completed-button", {
    selected: selectedFilter === "COMPLETED",
  });

  return (
    <footer className={"footer"}>
      {counter}

      <ul className={"footer-filters-wrapper"}>
        <li className={"radio-button"}>
          <label className={allButtonClassName}>
            <input
              type={"radio"}
              value={"ALL" as FilterTypes}
              checked={selectedFilter === "ALL"}
              onChange={handleOptionChange}
            />
            {"All"}
          </label>
        </li>
        <li className={"radio-button"}>
          <label className={activeButtonClassName}>
            <input
              type={"radio"}
              value={"ACTIVE" as FilterTypes}
              checked={selectedFilter === "ACTIVE"}
              onChange={handleOptionChange}
            />
            {"Active"}
          </label>
        </li>
        <li className={"radio-button"}>
          <label className={completedButtonClassName}>
            <input
              type={"radio"}
              value={"COMPLETED" as FilterTypes}
              checked={selectedFilter === "COMPLETED"}
              onChange={handleOptionChange}
            />
            {"Completed"}
          </label>
        </li>
      </ul>
    </footer>
  );
};

const mapStateToProps = (storeState: StoreState) => ({
  todoCount: storeState.todos.length,
  activeTodoCount: storeState.todos.filter((todo) => !todo.completed).length,
  isThereAnyTodo: storeState.todos.length > 0,
  selectedFilter: storeState.filter,
});

const dispatchToProps = {
  dispatchSetFilter: setFilter,
};

export const Footer = connect(
  mapStateToProps,
  dispatchToProps
)(FooterComponent);

export type FooterProps = ReturnType<typeof mapStateToProps> &
  typeof dispatchToProps;
