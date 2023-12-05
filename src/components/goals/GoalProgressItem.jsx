import { useEffect, useState } from "react";
import Dropdown from "../ui/Dropdown";

function GoalProgressItem({ goal, setGoalsProgress, value = 0 }) {
  const [progress, setProgress] = useState(value);

  useEffect(() => {
    const goalProgress = {
      goal: goal,
      progress: progress,
    };

    setGoalsProgress((goals) => {
      const newGoals = goals.filter((goal) => goal.goal !== goalProgress.goal);

      return [...newGoals, goalProgress];
    });
  }, [progress]);

  return (
    <li className="goal-progress-item">
      <span>{goal}</span>
      <Dropdown
        value={progress}
        setValue={setProgress}
        options={["None", "A little", "A lot"]}
        colors={["gray", "green", "blue"]}
        size="sm"
      />
    </li>
  );
}

export default GoalProgressItem;
