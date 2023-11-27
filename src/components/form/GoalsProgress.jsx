import { useUserContext } from "../../UserContext";
import GoalProgressItem from "../goals/GoalProgressItem";

function GoalsProgress({ setGoalsProgress }) {
  const { isLoading, userData } = useUserContext();

  return isLoading ? (
    <Oval
      height={80}
      width={80}
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
    <div className="form-item">
      <h3>Progress toward your goals</h3>
      <ul className="goals-progress-list">
        {userData.goals.map((goal) => (
          <GoalProgressItem
            goal={goal}
            key={goal}
            setGoalsProgress={setGoalsProgress}
          />
        ))}
      </ul>
      {!userData.goals.length && <p>Add some goals to the left!</p>}
    </div>
  );
}

export default GoalsProgress;
