export default function StepsForm({ onSubmit, onChange, date, distance }) {
  return (
    <>
      <form className="steps-form" onSubmit={onSubmit}>
        <label>
          Дата: <br />
          <input
            name="date"
            type="date"
            className="steps-form__date"
            value={date}
            onChange={onChange}
          />
        </label>
        <label>
          Пройдено (км): <br />
          <input
            name="distance"
            type="number"
            className="steps-form__distance"
            step="0.01"
            min="0"
            value={distance}
            onChange={onChange}
          />
        </label>
        <button className="steps-form__submit">Ок</button>
      </form>
    </>
  );
}
