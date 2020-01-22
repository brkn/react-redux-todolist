import "./Footer.scss";

import React, {useState} from "react";

type RadioOption = "All" | "Active" | "Completed"

export const Footer: React.FC = () => {
  const [
    selectedRadio,
    setSelectedRadio
  ] = useState<RadioOption>("All");

  const handleOptionChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setSelectedRadio(event.target.value as RadioOption);
  };

  return (
    <footer className="footer">
      <form>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="All"
              checked={selectedRadio === "All"}
              onChange={handleOptionChange}
            />
            {"All"}
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="Active"
              checked={selectedRadio === "Active"}
              onChange={handleOptionChange}
            />
            {"Active"}
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="Completed"
              checked={selectedRadio === "Completed"}
              onChange={handleOptionChange}
            />
            {"Completed"}
          </label>
        </div>
      </form>
    </footer>
  );
};
