function Box({ children, isStreak, className = "" }) {
  const streakPadding = {
    paddingTop: "51px",
  };

  return (
    <div className={`box ${className}`} style={isStreak ? streakPadding : null}>
      {children}
    </div>
  );
}

export default Box;
