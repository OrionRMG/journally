function ListItem({ type, children, isEntry = false, onClick }) {
  return (
    <div
      className={`list-item ${type} ${isEntry ? "entry" : ""}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

export default ListItem;
