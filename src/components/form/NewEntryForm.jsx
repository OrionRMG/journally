import { useState } from "react";
import DayDescription from "./DayDescription";
import GoalsProgress from "./GoalsProgress";
import SatisfactionLevel from "./SatisfactionLevel";
import { Oval } from "react-loader-spinner";

function NewEntryForm({ isLoading, goalsList }) {
  const [satisfactionLevel, setSatisfactionLevel] = useState(2);
  const [goalsProgress, setGoalsProgress] = useState([]);
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const dateMillis = new Date(Date.now());
    const id = Date.parse(dateMillis);
    const date = dateMillis.toLocaleString("en-US", {month: "long", day: "numeric", year: "numeric"});

    let goals = [];

    goalsProgress.forEach((goal) => {
      const goalData = {
        goal: goal.goal,
        progress: goal.progress,
      };

      goals.push(goalData);
    });

    const formData = {
      goals,
      satisfactionLevel,
      description,
      date,
    };

    console.log(formData);
    // TODO DB PUSH
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
        <GoalsProgress
          goalsList={goalsList}
          goalsProgress={goalsProgress}
          setGoalsProgress={setGoalsProgress}
        />
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
