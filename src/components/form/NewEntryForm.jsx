import { useState } from "react";
import DayDescription from "./DayDescription";
import GoalsProgress from "./GoalsProgress";
import SatisfactionLevel from "./SatisfactionLevel";
import { Oval } from "react-loader-spinner";
import { updateUser } from "../../services/apiUser";
import { useUserContext } from "../../UserContext";
import { useUpdateUser } from "../../hooks/useUpdateUser";
import { encrypt } from "../../Utility";

function NewEntryForm() {
  const { data, currDayEntry, currDayId } = useUserContext();
  const { updateUserData, isUpdating } = useUpdateUser();
  const userId = data.userData.id;

  const [satisfactionLevel, setSatisfactionLevel] = useState(
    currDayEntry ? currDayEntry.satisfaction : 2
  );
  const [goalsProgress, setGoalsProgress] = useState([]);
  const [description, setDescription] = useState(
    currDayEntry ? currDayEntry.description : ""
  );

  const { userData, refetch } = data;

  function handleSubmit(e) {
    e.preventDefault();

    const id = currDayId;
    const date = new Date(id).toLocaleString("en-US", {
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

    submitEntry(formData);
  }

  function submitEntry(formData) {
    if (currDayEntry) {
      const updatedEntries = userData.entries.filter(
        (entry) => entry.id !== currDayEntry.id
      );
      const entries = [...updatedEntries, formData];
      const strEntries = JSON.stringify(entries);
      const encryptEntries = encrypt(strEntries);
      updateUserData({
        updateData: { entries: encryptEntries },
        userId,
        notifText: "Entry updated!",
      });
    } else {
      const entries = [...userData.entries, formData];
      const strEntries = JSON.stringify(entries);
      const encryptEntries = encrypt(strEntries);
      updateUserData({
        updateData: {
          entries: encryptEntries,
          streak: data.userData.streak + 1,
        },
        userId,
        notifText: "Entry saved!",
      });
    }
  }

  return (
    <form className="new-entry-form" onSubmit={handleSubmit}>
      <h2>
        {currDayEntry
          ? "✔ Today's entry was saved!"
          : "📔 How was your day today?"}
      </h2>
      <GoalsProgress setGoalsProgress={setGoalsProgress} />

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
      ) : (
        <div className="save-button-row">
          <button className="save-button yellow" type="submit">
            {currDayEntry ? "Update entry" : "Save entry"}
          </button>
          {currDayEntry && <span>You can edit this entry until 4:00AM</span>}
        </div>
      )}
    </form>
  );
}

export default NewEntryForm;
