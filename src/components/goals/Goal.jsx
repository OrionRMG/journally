import { useState } from "react";

function Goal({ type, children, onClick, deleteGoal, goalText }) {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div
      className={`list-item ${type}`}
      onClick={onClick}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {children}
      {isHovering && (
        <img
          src="images/delete.svg"
          alt=""
          width={20}
          height={20}
          onClick={() => deleteGoal(goalText)}
          style={{ cursor: "pointer" }}
        />
      )}
    </div>
  );
}

export default Goal;
