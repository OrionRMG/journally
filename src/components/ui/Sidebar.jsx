import Box from "./Box";
import Goals from "../goals/Goals";
import PastEntries from "../PastEntries";
import { useState } from "react";
import CollapsedBox from "./CollapsedBox";
import { Oval } from "react-loader-spinner";

function Sidebar({ isLoading, goals, setGoals, entries, setEntries }) {
  const [goalsCollapsed, setGoalsCollapsed] = useState(false);
  const [entriesCollapsed, setEntriesCollapsed] = useState(false);

  function toggleGoals() {
    setGoalsCollapsed((c) => !c);
  }

  function toggleEntries() {
    setEntriesCollapsed((c) => !c);
  }

  return (
    <div className="sidebar">
      {goalsCollapsed ? (
        <CollapsedBox type={"goals"} onClick={toggleGoals} />
      ) : (
        <Box>
          {isLoading ? (
            <Goals
              isLoading={isLoading}
              goals={goals}
              setGoals={setGoals}
              toggle={setGoalsCollapsed}
            />
          ) : (
            <Goals
              goals={goals}
              setGoals={setGoals}
              toggle={setGoalsCollapsed}
            />
          )}
        </Box>
      )}

      {entriesCollapsed ? (
        <CollapsedBox type={"entries"} onClick={toggleEntries} />
      ) : (
        <Box>
          {isLoading ? (
            <PastEntries
              isLoading={isLoading}
              entries={entries}
              setEntries={setEntries}
              toggle={toggleEntries}
            />
          ) : (
            <PastEntries
              entries={entries}
              setEntries={setEntries}
              toggle={toggleEntries}
            />
          )}
        </Box>
      )}
    </div>
  );
}

export default Sidebar;
