function CollapsedBox({ type, onClick }) {
  let iconUrl;
  let classList;

  if (type === "goals") {
    iconUrl = "images/flag.svg";
    classList = "collapsed-box coll-goals";
  }
  if (type === "entries") {
    iconUrl = "images/history.svg";
    classList = "collapsed-box coll-entries";
  }

  return (
    <div className={classList} onClick={onClick}>
      <img src={iconUrl} alt="" />
    </div>
  );
}

export default CollapsedBox;
