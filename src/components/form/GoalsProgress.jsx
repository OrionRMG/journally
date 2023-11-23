import { currentGoals } from "../../data";
import GoalProgressItem from "../goals/GoalProgressItem";

function GoalsProgress({ goalsList, setGoalsProgress, disabled = false }) {
  console.log(goalsList);

  return (
    <div className="form-item">
      <h3>Progress toward your goals</h3>
      <ul className="goals-progress-list">
        {goalsList.map((goal) => (
          <GoalProgressItem
            goal={goal}
            key={goal}
            setGoalsProgress={setGoalsProgress}
            disabled={disabled}
          />
        ))}
      </ul>
      {!goalsList.length && <p>Add some goals to the left!</p>}
    </div>
  );
}

export default GoalsProgress;
