function PastEntry({ data }) {
  return (
    <div className="new-entry-form">
      <h2>How was your day today?</h2>

      <GoalsProgress
        goalsList={data}
        goalsProgress={goalsProgress}
        setGoalsProgress={setGoalsProgress}
        disabled={true}
      />

      <input
        id="satisfactionLevel"
        name="satisfactionLevel"
        value={satisfactionLevel}
        type="hidden"
      />
      <SatisfactionLevel
        satisfactionLevel={satisfactionLevel}
        setSatisfactionLevel={setSatisfactionLevel}
      />
      <DayDescription value={description} onChange={setDescription} />
      <div>
        <button className="save-button yellow" type="submit">
          Save entry
        </button>
      </div>
    </div>
  );
}

export default PastEntry;
