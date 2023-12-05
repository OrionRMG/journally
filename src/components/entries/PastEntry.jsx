import { Oval } from "react-loader-spinner";
import { useUserContext } from "../../UserContext";
import DayDescription from "../form/DayDescription";
import DisabledGoalsProgress from "../goals/DisabledGoalsProgress";
import DisabledSatisfactionLevel from "../DisabledSatisfactionLevel";

function PastEntry({ id, setCurrEntryId }) {
  const { data } = useUserContext();
  const { isLoading, userData } = data;

  let entry;

  function close() {
    setCurrEntryId("");
  }

  if (!isLoading) {
    entry = userData.entries.find((entry) => entry.id === id);
  }

  return isLoading ? (
    <Oval
      height={80}
      width={80}
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
    <div className="new-entry-form">
      <div className="row">
        <h2>{entry.date}</h2>
        <div className="icon-black" onClick={close}>
          <img src="images/close.svg" alt="" />
        </div>
      </div>

      <DisabledGoalsProgress goals={entry.goals} />

      <DisabledSatisfactionLevel value={entry.satisfaction} />

      <DayDescription value={entry.description} disabled={true} />
    </div>
  );
}

export default PastEntry;
