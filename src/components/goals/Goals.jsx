import { useState } from "react";
import Goal from "./Goal";
import ListItem from "../form/ListItem";
import { useUserContext } from "../../UserContext";
import { useUpdateUser } from "../../hooks/useUpdateUser";
import { Oval } from "react-loader-spinner";

function Goals({ toggle }) {
  const [isAddingGoal, setIsAddingGoal] = useState(false);
  const [goalText, setGoalText] = useState("");

  const { data, isLoading, isMobile } = useUserContext();
  const { userData } = data;
  const userId = data.userData.id;
  const { updateUserData, isUpdating } = useUpdateUser();

  async function handleSubmit(e) {
    e.preventDefault();
    const newGoal = e.target[0].value;

    updateUserData({
      updateData: { goals: [...userData.goals, newGoal] },
      userId,
    });
    setGoalText("");
  }

  function handleBlur() {
    if (goalText) return;

    setIsAddingGoal(false);
  }

  async function deleteGoal(goalName) {
    const newGoalsList = userData.goals.filter((goal) => goal !== goalName);

    updateUserData({ updateData: { goals: newGoalsList }, userId });
  }

  return (
    <div className="goals-box">
      <div className="row">
        <h2>Goals</h2>
        {!isMobile && (
          <div onClick={toggle} className="icon-black">
            <img src="images/close_fullscreen.svg" alt="" />
          </div>
        )}
      </div>

      <div className="goals-list">
        {userData.goals.map((goal) => {
          return (
            <Goal
              type="green"
              key={goal}
              deleteGoal={deleteGoal}
              goalText={goal}
              isUpdating={isUpdating}
            >
              {goal}
            </Goal>
          );
        })}

        {isUpdating ? (
          <Oval
            height={20}
            width={20}
            color="#b05b1d"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="oval-loading"
            secondaryColor="#f9efcb"
            strokeWidth={2}
            strokeWidthSecondary={2}
          />
        ) : !isAddingGoal ? (
          <ListItem
            type="gray"
            text="Add goal"
            onClick={() => {
              setIsAddingGoal(true);
            }}
            className={"add-goal"}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
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
    </div>
  );
}

export default Goals;
