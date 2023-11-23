function DayDescription({ value, onChange }) {
  return (
    <div className="form-item">
      <h3>What happened today?</h3>
      <textarea
        id="description"
        name="description"
        className="description-box"
        rows={4}
        placeholder="Write something..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

export default DayDescription;
