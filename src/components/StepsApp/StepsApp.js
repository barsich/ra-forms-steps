import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import StepsForm from './StepsForm';
import StepsTable from './StepsTable';

export default function StepsApp() {
  const [dateFromForm, setDateFromForm] = useState(new Date().toISOString().substr(0, 10));
  const [distanceFromForm, setDistanceFromForm] = useState(0);
  const [stepsItems, setStepsItems] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setStepsItems((prevStepsItems) => {
      const sameDateItem = prevStepsItems.find((item) => item.date === dateFromForm);
      if (sameDateItem) {
        return prevStepsItems.map((item) =>
          item.date === dateFromForm ? {...item, distance: item.distance + +distanceFromForm} : item
        );
      } else {
        return [
          ...prevStepsItems,
          {
            id: uuidv4(),
            date: dateFromForm,
            distance: +distanceFromForm,
          },
        ];
      }
    });
    setDistanceFromForm(0);
  };

  const handleChange = ({ target }) => {
    switch (target.name) {
      case 'date':
        setDateFromForm(target.value);
        break;
      case 'distance':
        setDistanceFromForm(target.value);
        break;
      default:
        break;
    }
  };

  const handleDelete = (id) => {
    setStepsItems((prevStepsItems) => prevStepsItems.filter((item) => item.id !== id));
  };

  return (
    <div className="container">
      <StepsForm
        onSubmit={handleSubmit}
        onChange={handleChange}
        date={dateFromForm}
        distance={distanceFromForm}
      />
      <StepsTable steps={stepsItems} onDelete={handleDelete} />
    </div>
  );
}
