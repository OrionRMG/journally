function Goal({ type, children, entryId = "", onClick }) {
  return (
    <div className={`list-item ${type}`} onClick={onClick}>
      {children}
    </div>
  );
}

export default Goal;
