import Box from "./ui/Box";
import Goals from "./goals/Goals";
import Header from "./ui/Header";
import NewEntryForm from "./form/NewEntryForm";
import Sidebar from "./ui/Sidebar";
import { useState } from "react";
import { useUserData } from "./hooks/useUserData";
import PastEntry from "./PastEntry";

function Body() {
  const { isLoading, userData } = useUserData();

  console.log(userData);

  const [goals, setGoals] = useState([]);
  const [entries, setEntries] = useState([]);

  const [currEntryId, setCurrEntryId] = useState("");

  const [userData1, setUserData] = useState({
    username: "",
    goals: {},
    streak: 0,
    score: 0,
    entries: [],
  });

  return (
    <div className="app-body">
      <Header username={isLoading ? "" : userData.username} />
      <Box>
        {currEntryId ? (
          <PastEntry data={entryData} />
        ) : isLoading ? (
          <NewEntryForm isLoading={isLoading} />
        ) : (
          <NewEntryForm goalsList={userData.goals} />
        )}
      </Box>
      {isLoading ? (
        <Sidebar
          isLoading={isLoading}
          setGoals={setGoals}
          setEntries={setEntries}
        />
      ) : (
        <Sidebar
          goals={userData.goals}
          setGoals={setGoals}
          entries={userData.entries}
          setEntries={setEntries}
        />
      )}
    </div>
  );
}

export default Body;
