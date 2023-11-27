import DisabledGoalProgressItem from "./DisabledGoalProgressItem";

function DisabledGoalsProgress({ goals }) {
  return (
    <div className="form-item">
      <h3>Progress toward your goals</h3>
      <ul className="goals-progress-list">
        {goals.map((goal) => (
          <DisabledGoalProgressItem goal={goal} key={goal.goal} />
        ))}
      </ul>
    </div>
  );
}

export default DisabledGoalsProgress;
