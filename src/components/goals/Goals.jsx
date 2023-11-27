import { useEffect, useState } from "react";
import Goal from "./Goal";
import ListItem from "../form/ListItem";
import { Oval } from "react-loader-spinner";
import { useUserContext } from "../../UserContext";
import { updateUser } from "../../services/apiUser";
import { useMutation } from "@tanstack/react-query";

function Goals({ toggle }) {
  const [isAddingGoal, setIsAddingGoal] = useState(false);
  const [goalText, setGoalText] = useState("");

  const { isLoading, userData, refetch } = useUserContext();

  async function handleSubmit(e) {
    e.preventDefault();
    const newGoal = e.target[0].value;

    await updateUser({ goals: [...userData.goals, newGoal] }, 1);
    refetch();
    setGoalText("");
  }

  function handleBlur() {
    if (goalText) return;

    setIsAddingGoal(false);
  }

  async function deleteGoal(goalName) {
    const newGoalsList = userData.goals.filter((goal) => goal !== goalName);

    await updateUser({ goals: newGoalsList }, 1);
    if (!isLoading) refetch();
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
          {userData.goals.map((goal) => {
            return (
              <Goal
                type="green"
                key={goal}
                deleteGoal={deleteGoal}
                goalText={goal}
              >
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
              <div
                style={{ display: "flex", alignItems: "center", gap: "8px" }}
              >
                <span style={{ display: "flex", alignItems: "center" }}>
                  <img src="images/add.svg" />
                </span>
                Add goal
              </div>
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
