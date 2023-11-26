import { Oval } from "react-loader-spinner";
// import { entries } from "../../data";
import ListItem from "../form/ListItem";

function PastEntries({ isLoading, entries, toggle, setCurrEntryId }) {
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
          {entries.map((entry) => {
            return (
              <ListItem type="blue" id={entry.id} key={entry.id} onClick={() => handleClick(entry.id)}>
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
