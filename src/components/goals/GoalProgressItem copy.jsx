import { useState } from "react";

function GoalProgressItem({ goal }) {
  const [progress, setProgress] = useState(0);

  return (
    <li className="goal-progress-item">
      <span>{goal}</span>
      <select
        className={`progress-select ${
          progress === 0 ? "gray" : progress === 1 ? "green" : "blue"
        }`}
        value={progress}
        defaultValue={0}
        onChange={(e) => setProgress(Number(e.target.value))}
      >
        <option value={0} className="gray">
          None
        </option>
        <option value={1} className="green">
          A little
        </option>
        <option value={2} className="blue">
          A lot
        </option>
      </select>
    </li>
  );
}

export default GoalProgressItem;
