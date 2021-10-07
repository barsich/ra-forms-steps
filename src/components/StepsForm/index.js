import { useState } from 'react';
import StepsTable from './StepsTable';
import { v4 as uuidv4 } from 'uuid';

export default function StepsForm() {
  const [form, setForm] = useState({
    id: 0,
    date: new Date().toISOString().substr(0, 10),
    distance: 0,
  });

  const [stepsItems, setStepsItems] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setStepsItems((prevStepsItems) => {
      const sameDateItem = prevStepsItems.find((item) => item.date === form.date);
      if (sameDateItem) {
        sameDateItem.distance += +form.distance;
        return prevStepsItems.slice();
      } else {
        return [
          ...prevStepsItems,
          {
            id: uuidv4(),
            date: form.date,
            distance: +form.distance,
          },
        ];
      }
    });
    setForm((prevForm) => ({ ...prevForm, id: 0, distance: 0 }));
    console.log(stepsItems)
  };

  const handleChange = ({ target }) => {
    setForm({ ...form, [target.name]: target.value });
  };

  const handleDelete = (id) => {
    setStepsItems((prevStepsItems) => prevStepsItems.filter((item) => item.id !== id));
  };

  return (
    <>
      <form className="steps-form" onSubmit={handleSubmit}>
        <label>
          Дата: <br />
          <input
            name="date"
            type="date"
            className="steps-form__date"
            value={form.date}
            onChange={handleChange}
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
            value={form.distance}
            onChange={handleChange}
          />
        </label>
        <button className="steps-form__submit">Ок</button>
      </form>
      <StepsTable steps={stepsItems} onItemDelete={handleDelete} />
    </>
  );
}
