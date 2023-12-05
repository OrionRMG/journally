import { useState } from "react";

import { useUserContext } from "../UserContext";

import Box from "./ui/Box";
import Header from "./ui/Header";
import Sidebar from "./ui/Sidebar";
import NewEntryForm from "./form/NewEntryForm";
import PastEntry from "./entries/PastEntry";
import StreakBanner from "./StreakBanner";
import { useUpdateUser } from "../hooks/useUpdateUser";
import User from "./User";

function Body() {
  const { data, currDayId } = useUserContext();
  const { userData, sessionData } = data;
  const { streak, entries } = userData;
  const { updateUserData } = useUpdateUser();

  const yesterdayId = currDayId - 24 * 60 * 60 * 1000; //24 hours;

  function checkPastEntry() {
    if (!streak) return;

    if (
      entries[entries.length - 1]?.id !== yesterdayId &&
      entries[entries.length - 1]?.id !== currDayId
    ) {
      updateUserData({
        updateData: { streak: 0 },
        userId: userData.id,
      });
    }
  }

  checkPastEntry();

  const [currEntryId, setCurrEntryId] = useState(null);

  return (
    <>
      <User name={sessionData.user_metadata.name} />
      <Box isStreak={streak > 1 ? true : false}>
        {streak > 1 && <StreakBanner streak={streak} />}
        {currEntryId ? (
          <PastEntry id={currEntryId} setCurrEntryId={setCurrEntryId} />
        ) : (
          <NewEntryForm />
        )}
      </Box>
      <Sidebar setCurrEntryId={setCurrEntryId} />
    </>
  );
}

export default Body;
