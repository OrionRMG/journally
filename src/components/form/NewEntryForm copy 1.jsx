import { useState } from "react";
import DayDescription from "./DayDescription";
import GoalsProgress from "./GoalsProgress";
import SatisfactionLevel from "./SatisfactionLevel";
import { useFormik } from "formik";

function NewEntryForm() {
  const [satisfactionLevel, setSatisfactionLevel] = useState(2);
  const [goalsProgress, setGoalsProgress] = useState([]);
  const [description, setDescription] = useState("");

  const formik = useFormik({
    initialValues: {
      initialValues: {
        goals: {},
      },
      onSubmit: (values) => {
        console.log(values);
      },
    },
  });

  function handleSubmit(e) {
    e.preventDefault();

    const data = new FormData(e.target);
    const formObject = Object.fromEntries(data.entries());

    console.log(formObject);
    // TODO
  }

  return (
    <form className="new-entry-form" onSubmit={handleSubmit}>
      <h2>How was your day today?</h2>

      {goalsProgress.map((goal, index) => {
        return (
          <input
            id="goal.goal"
            name={`goals[${index}][${goal.goal}]`}
            value={goal.progress}
            type="hidden"
            key={goal.goal}
          />
        );
      })}
      {/* <input id="goals" name="goals" value={goalsProgress} type="hidden" /> */}
      <GoalsProgress
        goalsProgress={goalsProgress}
        setGoalsProgress={setGoalsProgress}
      />

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
