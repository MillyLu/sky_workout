

export const ProgressInput = ({ index, value, onChange }) => {
  return (
    <div>
      <label htmlFor={`progress-${index}`}>Прогресс {index + 1}</label>
      <input
        type="number"
        id={`progress-${index}`}
        value={value}
        onChange={(event) => onChange(index, event.target.value)}
      />
    </div>
  );
};

