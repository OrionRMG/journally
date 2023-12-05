import { useState } from "react";
import { Oval } from "react-loader-spinner";

function Goal({ type, children, onClick, deleteGoal, goalText, isUpdating }) {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div
      className={`list-item ${type}`}
      onClick={onClick}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {children}
      {isHovering && !isUpdating && (
        <img
          src="images/delete.svg"
          alt=""
          width={20}
          height={20}
          onClick={() => deleteGoal(goalText)}
          style={{ cursor: "pointer" }}
          className="icon-green"
        />
      )}
      {isUpdating && (
        <Oval
          height={20}
          width={20}
          color="#3c833b"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="oval-loading"
          strokeWidth={2}
          strokeWidthSecondary={2}
        />
      )}
    </div>
  );
}

export default Goal;
