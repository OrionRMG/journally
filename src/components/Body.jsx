import { useState } from "react";

import { useUserContext } from "../UserContext";

import Box from "./ui/Box";
import Header from "./ui/Header";
import Sidebar from "./ui/Sidebar";
import NewEntryForm from "./form/NewEntryForm";
import PastEntry from "./entries/PastEntry";

function Body() {
  const { isLoading } = useUserContext();

  const [currEntryId, setCurrEntryId] = useState(null);

  return (
    <div className="app-body">
      <Header />
      <Box>
        {currEntryId ? (
          <PastEntry id={currEntryId} setCurrEntryId={setCurrEntryId} />
        ) : isLoading ? (
          <NewEntryForm isLoading={isLoading} />
        ) : (
          <NewEntryForm />
        )}
      </Box>
      {isLoading ? (
        <Sidebar isLoading={isLoading} />
      ) : (
        <Sidebar setCurrEntryId={setCurrEntryId} />
      )}
    </div>
  );
}

export default Body;
