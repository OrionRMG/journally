import { useState } from "react";
import { currentGoals } from "../../data";
import Goal from "./Goal";
import ListItem from "../form/ListItem";
import { Oval } from "react-loader-spinner";

function Goals({ isLoading, goals, setGoals, toggle }) {
  const [isAddingGoal, setIsAddingGoal] = useState(false);
  const [goalText, setGoalText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    setGoals((goals) => [...goals, e.target[0].value]);
    setGoalText("");
  }

  function handleBlur() {
    if (goalText) return;

    setIsAddingGoal(false);
  }

  return (
    <div className="goals-box">
      <div className="row">
        <h2>Goals</h2>
        <div onClick={toggle}>
          <img src="images/close_fullscreen.svg" alt="" />
        </div>
      </div>

      {isLoading ? (
        <Oval
          height={40}
          width={40}
          color="#b05b1d"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="oval-loading"
          secondaryColor="#f9efcb"
          strokeWidth={2}
          strokeWidthSecondary={2}
        />
      ) : (
        <div className="goals-list">
          {goals.map((goal) => {
            return (
              <Goal type="green" key={goal}>
                {goal}
              </Goal>
            );
          })}

          {!isAddingGoal ? (
            <ListItem
              type="gray"
              text="Add goal"
              onClick={() => {
                setIsAddingGoal(true);
              }}
            >
              <span style={{ display: "flex", alignItems: "center" }}>
                <img src="images/add.svg" />
              </span>
              Add goal
            </ListItem>
          ) : (
            <form className="add-goal-box" onSubmit={handleSubmit}>
              <input
                id="add-goal"
                type="text"
                placeholder="Add goal..."
                value={goalText}
                autoFocus
                onBlur={handleBlur}
                onChange={(e) => setGoalText(e.target.value)}
              />
            </form>
          )}
        </div>
      )}
    </div>
  );
}

export default Goals;
