function ListItem({ type, children, isEntry = false, onClick, className }) {
  return (
    <div
      className={`list-item ${type} ${isEntry ? "entry" : ""} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

export default ListItem;
