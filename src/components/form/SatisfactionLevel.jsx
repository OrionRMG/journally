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
    </div>
  );
}

export default SatisfactionLevel;
