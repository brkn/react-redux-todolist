import "./Header.scss";
import React from "react";
import headerLogo from "../../header-logo.png";

export const Header: React.FC = () => (
  <header className="header">
    <h1>{"Todo List App"}</h1>
    <img
      src={headerLogo}
      alt={"Big getir logo"}
    />
  </header>
);
