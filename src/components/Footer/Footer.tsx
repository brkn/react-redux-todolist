import "./Footer.scss";

import React from "react";
import {connect} from "react-redux";

import {
  setFilter,
  FilterTypes,
} from "../../redux/actionCreators";
import {StoreState} from "../../redux/initialState";
import {store} from "../../redux";

export const FooterComponent = ({
  dispatchSetFilter,
  selectedFilter,
  isThereAnyTodo,
}: FooterProps) => {
  const handleOptionChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    dispatchSetFilter(event.target.value as FilterTypes);
  };

  if (!isThereAnyTodo) {
    return <></>;
  }

  return (
    <footer className={"footer"}>
      <form>
        <div className={"radio"}>
          <label>
            <input
              type={"radio"}
              value={"ALL" as FilterTypes}
              checked={selectedFilter === "ALL"}
              onChange={handleOptionChange}
            />
            {"All"}
          </label>
        </div>
        <div className={"radio"}>
          <label>
            <input
              type={"radio"}
              value={"ACTIVE" as FilterTypes}
              checked={selectedFilter === "ACTIVE"}
              onChange={handleOptionChange}
            />
            {"Active"}
          </label>
        </div>
        <div className={"radio"}>
          <label>
            <input
              type={"radio"}
              value={"COMPLETED" as FilterTypes}
              checked={selectedFilter === "COMPLETED"}
              onChange={handleOptionChange}
            />
            {"Completed"}
          </label>
        </div>
      </form>
    </footer>
  );
};

const mapStateToProps = (storeState: StoreState) => ({
  isThereAnyTodo: storeState.todoReducer.length > 0,
  selectedFilter: storeState.filterReducer,
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
