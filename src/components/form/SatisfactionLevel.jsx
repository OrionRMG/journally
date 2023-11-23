import { useState } from "react";
import { MdCloseFullscreen } from "react-icons/md";
import Dropdown from "../ui/Dropdown";

function SatisfactionLevel({ satisfactionLevel, setSatisfactionLevel }) {
  return (
    <div className="form-item">
      <h3>Level of satisfaction today</h3>
      <Dropdown
        value={satisfactionLevel}
        setValue={setSatisfactionLevel}
        options={[
          "Very unsatisfied",
          "Unsatisfied",
          "Neutral",
          "Satisfied",
          "Very satisfied",
        ]}
        colors={["red", "yellow", "gray", "green", "blue"]}
        size="lg"
        icon={true}
      />
      {/* <select
        className={`satisfaction-select ${
          satisfaction === 0
            ? "red"
            : satisfaction === 1
            ? "yellow"
            : satisfaction === 2
            ? "gray"
            : satisfaction === 3
            ? "green"
            : "blue"
        }`}
        value={satisfaction}
        defaultValue={2}
        onChange={(e) => setSatisfaction(Number(e.target.value))}
      >
        <option value={0} className="red">
           Very unsatisfied
        </option>
        <option value={1} className="yellow">
          Unsatisfied
        </option>
        <option value={2} className="gray">
          Neutral
        </option>
        <option value={3} className="green">
          Satisfied
        </option>
        <option value={4} className="blue">
          Very satisfied
        </option>
      </select> */}
    </div>
  );
}

export default SatisfactionLevel;
