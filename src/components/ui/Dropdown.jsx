import { useState } from "react";
import useOutsideClick from "../../hooks/useOutsideClick";

function Dropdown({ value, setValue, options, colors, icon, size }) {
  const [showDropdown, setShowDropdown] = useState(false);

  const closeDropdown = () => {
    setShowDropdown(false);
  };

  const ref = useOutsideClick(closeDropdown);

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

  let listDisplayShadow;
  if (showDropdown) {
    listDisplayShadow = {
      boxShadow: "0px 2px 9px -1px rgba(0, 0, 0, 0.25)",
    };
  } else {
    listDisplayShadow = {
      boxShadow: "none",
    };
  }

  return (
    <div className="dropdown-wrapper" style={listDisplayShadow} ref={ref}>
      <div className="dropdown-list dropdown-top" style={listDisplay}>
        {options
          .filter((option, index) => option !== options[value] && index < value)
          .map((item, index) => {
            return (
              <div
                className={`dropdown-item-${size} ${
                  colors[index >= value ? index + 1 : index]
                }`}
                onMouseDown={() => {
                  setValue(index >= value ? index + 1 : index);
                  setShowDropdown((s) => !s);
                }}
                key={item}
              >
                <span className="dropdown-item-label">
                  {icon && <img src={`images/${toSnakeCase(item)}.svg`} />}
                  <span>{item}</span>
                </span>
              </div>
            );
          })}
      </div>

      <DropdownValue
        color={colors[value]}
        iconName={icon ? toSnakeCase(options[value]) : ""}
        text={options[value]}
        size={size}
        setShowDropdown={setShowDropdown}
      />

      <div className="dropdown-list dropdown-bottom" style={listDisplay}>
        {options
          .filter((option, index) => option !== options[value] && index > value)
          .map((item, index) => {
            return (
              <div
                className={`dropdown-item-${size} ${colors[index + value + 1]}`}
                onMouseDown={() => {
                  setValue(index + value + 1);
                  setShowDropdown((s) => !s);
                }}
                key={item}
              >
                <span className="dropdown-item-label">
                  {icon && <img src={`images/${toSnakeCase(item)}.svg`} />}
                  <span>{item}</span>
                </span>
              </div>
            );
          })}
      </div>
    </div>
  );
}

function DropdownValue({ color, iconName, text, size, setShowDropdown }) {
  return (
    <div
      className={`select-${size} ${color}`}
      onMouseDown={() => setShowDropdown((s) => !s)}
    >
      <span className="dropdown-item-label">
        {iconName && <img src={`images/${iconName}.svg`} />}
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
