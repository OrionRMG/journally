import { Oval } from "react-loader-spinner";
import ListItem from "../form/ListItem";
import { useUserContext } from "../../UserContext";

function PastEntries({ toggle, setCurrEntryId }) {
  const { isLoading, userData } = useUserContext();

  function handleClick(id) {
    setCurrEntryId(id);
  }

  return (
    <div className="entries-box">
      <div className="row">
        <h2>Past Entries</h2>
        <div onClick={toggle}>
          <img src="images/close_fullscreen.svg" alt="" />
        </div>
      </div>
      {isLoading ? (
        <Oval
          height={40}
          width={40}
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
      )}
    </div>
  );
}

export default PastEntries;
