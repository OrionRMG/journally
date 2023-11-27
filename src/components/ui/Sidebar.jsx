import Box from "./Box";
import Goals from "../goals/Goals";
import PastEntries from "../entries/PastEntries";
import { useState } from "react";
import CollapsedBox from "./CollapsedBox";

function Sidebar({ isLoading, setCurrEntryId }) {
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
            <Goals isLoading={isLoading} toggle={setGoalsCollapsed} />
          ) : (
            <Goals toggle={setGoalsCollapsed} />
          )}
        </Box>
      )}

      {entriesCollapsed ? (
        <CollapsedBox type={"entries"} onClick={toggleEntries} />
      ) : (
        <Box>
          {isLoading ? (
            <PastEntries isLoading={isLoading} toggle={toggleEntries} />
          ) : (
            <PastEntries
              toggle={toggleEntries}
              setCurrEntryId={setCurrEntryId}
            />
          )}
        </Box>
      )}
    </div>
  );
}

export default Sidebar;
