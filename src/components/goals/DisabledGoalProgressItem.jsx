import DisabledDropdown from "../ui/DisabledDropdown";

function DisabledGoalProgressItem({ goal }) {
  return (
    <li className="goal-progress-item">
      <span>{goal.goal}</span>
      <DisabledDropdown
        value={goal.progress}
        options={["None", "A little", "A lot"]}
        colors={["gray", "green", "blue"]}
        size="sm"
      />
    </li>
  );
}

export default DisabledGoalProgressItem;
