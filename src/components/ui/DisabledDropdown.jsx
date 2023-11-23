function DisabledDropdown({ value, options, color, icon, size }) {
  return (
    <DropdownValue
      color={color}
      iconName={icon ? toSnakeCase(options[value]) : ""}
      text={options[value]}
      size={size}
      setShowDropdown={setShowDropdown}
    />
  );
}

function DropdownValue({ color, iconName, text, size }) {
  return (
    <div className={`select-${size} ${color}`}>
      <span className="dropdown-item-label">
        {iconName && <img src={`images/${iconName}.svg`} />}
        <span>{text}</span>
      </span>
    </div>
  );
}

const toSnakeCase = (str) =>
  str &&
  str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map((x) => x.toLowerCase())
    .join("_");

export default DisabledDropdown;
