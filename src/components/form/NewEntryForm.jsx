import { useState } from "react";
import DayDescription from "./DayDescription";
import GoalsProgress from "./GoalsProgress";
import SatisfactionLevel from "./SatisfactionLevel";
import { Oval } from "react-loader-spinner";
import { updateUser } from "../../services/apiUser";
import { useUserContext } from "../../UserContext";

function NewEntryForm({ isLoading }) {
  const [satisfactionLevel, setSatisfactionLevel] = useState(2);
  const [goalsProgress, setGoalsProgress] = useState([]);
  const [description, setDescription] = useState("");

  const { userData, refetch } = useUserContext();

  async function handleSubmit(e) {
    e.preventDefault();

    const dateMillis = new Date(Date.now());
    const id = Date.parse(dateMillis);
    const date = dateMillis.toLocaleString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });

    let goals = [];

    goalsProgress.forEach((goal) => {
      const goalData = {
        goal: goal.goal,
        progress: goal.progress,
      };

      goals.push(goalData);
    });

    const formData = {
      id,
      goals,
      satisfaction: satisfactionLevel,
      description,
      date,
    };

    await submitEntry(formData);
    refetch();
  }

  async function submitEntry(formData) {
    await updateUser({ entries: [...userData.entries, formData] }, 1);
  }

  return (
    <form className="new-entry-form" onSubmit={handleSubmit}>
      <h2>How was your day today?</h2>

      {isLoading ? (
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
        <GoalsProgress setGoalsProgress={setGoalsProgress} />
      )}

      <input
        id="satisfactionLevel"
        name="satisfactionLevel"
        value={satisfactionLevel}
        type="hidden"
      />
      <SatisfactionLevel
        satisfactionLevel={satisfactionLevel}
        setSatisfactionLevel={setSatisfactionLevel}
      />
      <DayDescription value={description} onChange={setDescription} />
      <div>
        <button className="save-button yellow" type="submit">
          Save entry
        </button>
      </div>
    </form>
  );
}

export default NewEntryForm;
