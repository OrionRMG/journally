import { useUserContext } from "../../UserContext";
import GoalProgressItem from "../goals/GoalProgressItem";

function GoalsProgress({ setGoalsProgress }) {
  const { data, currDayEntry } = useUserContext();
  const { userData } = data;

  return (
    <div className="form-item">
      <h3>Progress toward your goals</h3>
      <ul className="goals-progress-list">
        {userData.goals.map((goal, index) => (
          <GoalProgressItem
            goal={goal}
            key={goal}
            setGoalsProgress={setGoalsProgress}
            value={currDayEntry?.goals[index]?.progress}
          />
        ))}
      </ul>
      {!userData.goals.length && <p>Add some goals to the left!</p>}
    </div>
  );
}

export default GoalsProgress;
