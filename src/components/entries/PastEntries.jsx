import { Oval } from "react-loader-spinner";
import ListItem from "../form/ListItem";
import { useUserContext } from "../../UserContext";

function PastEntries({ toggle, setCurrEntryId }) {
  const { data } = useUserContext();
  const { isLoading, userData } = data;

  function handleClick(id) {
    setCurrEntryId(id);
  }

  return (
    <div className="entries-box">
      <div className="row">
        <h2>Past Entries</h2>
        <div onClick={toggle} className="icon-black">
          <img src="images/close_fullscreen.svg" alt="" />
        </div>
      </div>
      <div className="entries-list">
        {userData.entries
          .slice()
          .reverse()
          .map((entry) => {
            return (
              <ListItem
                type="blue"
                id={entry.id}
                key={entry.id}
                isEntry={true}
                onClick={() => handleClick(entry.id)}
              >
                {entry.date}
              </ListItem>
            );
          })}
      </div>
    </div>
  );
}

export default PastEntries;
