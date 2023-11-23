import { useState } from "react";

function Dropdown({ satisfactionLevel, setSatisfactionLevel }) {
  const options = [
    "Very unsatisfied",
    "Unsatisfied",
    "Neutral",
    "Satisfied",
    "Very satisfied",
  ];

  const colors = ["red", "yellow", "gray", "green", "blue"];

  const [showDropdown, setShowDropdown] = useState(false);

  let listDisplay;
  if (showDropdown) {
    listDisplay = {
      display: "flex",
    };
  } else {
    listDisplay = {
      display: "none",
    };
  }

  return (
    <div className="dropdown-wrapper">
      <div className="dropdown-list dropdown-top" style={listDisplay}>
        {options
          .filter(
            (option, index) =>
              option !== options[satisfactionLevel] && index < satisfactionLevel
          )
          .map((item, index) => {
            return (
              <div
                className={`dropdown-item ${
                  colors[index >= satisfactionLevel ? index + 1 : index]
                }`}
                onMouseDown={() => {
                  setSatisfactionLevel(
                    index >= satisfactionLevel ? index + 1 : index
                  );
                  setShowDropdown((s) => !s);
                }}
              >
                <span className="dropdown-item-label">
                  <img src={`images/${toSnakeCase(item)}.svg`} />
                  <span>{item}</span>
                </span>
              </div>
            );
          })}
      </div>

      {satisfactionLevel === 0 && (
        <DropdownValue
          color="red"
          iconName="very_unsatisfied"
          text="Very unsatisfied"
          setShowDropdown={setShowDropdown}
        />
      )}
      {satisfactionLevel === 1 && (
        <DropdownValue
          color="yellow"
          iconName="unsatisfied"
          text="Unsatisfied"
          setShowDropdown={setShowDropdown}
        />
      )}
      {satisfactionLevel === 2 && (
        <DropdownValue
          color="gray"
          iconName="neutral"
          text="Neutral"
          setShowDropdown={setShowDropdown}
        />
      )}
      {satisfactionLevel === 3 && (
        <DropdownValue
          color="green"
          iconName="satisfied"
          text="Satisfied"
          setShowDropdown={setShowDropdown}
        />
      )}
      {satisfactionLevel === 4 && (
        <DropdownValue
          color="blue"
          iconName="very_satisfied"
          text="Very satisfied"
          setShowDropdown={setShowDropdown}
        />
      )}

      <div className="dropdown-list dropdown-bottom" style={listDisplay}>
        {options
          .filter(
            (option, index) =>
              option !== options[satisfactionLevel] && index > satisfactionLevel
          )
          .map((item, index) => {
            return (
              <div
                className={`dropdown-item ${
                  colors[index + satisfactionLevel + 1]
                }`}
                onMouseDown={() => {
                  setSatisfactionLevel(index + satisfactionLevel + 1);
                  setShowDropdown((s) => !s);
                }}
              >
                <span className="dropdown-item-label">
                  <img src={`images/${toSnakeCase(item)}.svg`} />
                  <span>{item}</span>
                </span>
              </div>
            );
          })}
      </div>
    </div>
  );
}

function DropdownValue({ color, iconName, text, setShowDropdown }) {
  return (
    <div
      className={`satisfaction-select ${color}`}
      onMouseDown={() => setShowDropdown((s) => !s)}
    >
      <span className="dropdown-item-label">
        <img src={`images/${iconName}.svg`} />
        <span>{text}</span>
      </span>
      <img src={`images/chevron_${color}.svg`} />
    </div>
  );
}

const toSnakeCase = (str) =>
  str &&
  str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map((x) => x.toLowerCase())
    .join("_");

export default Dropdown;
