import DisabledDropdown from "./ui/DisabledDropdown";

function DisabledSatisfactionLevel({ value }) {
  return (
    <div className="form-item">
      <h3>Level of satisfaction today</h3>
      <DisabledDropdown
        value={value}
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
    </div>
  );
}

export default DisabledSatisfactionLevel;
