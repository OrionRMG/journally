function DayDescription({ value, onChange, disabled = false }) {
  return (
    <div className="form-item">
      <h3>Thoughts / Desciption</h3>
      <textarea
        id="description"
        name="description"
        className="description-box"
        rows={4}
        placeholder="Write something..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
      />
    </div>
  );
}

export default DayDescription;
