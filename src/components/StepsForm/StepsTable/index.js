import StepsTableItem from '../StepsTableItem';

export default function StepsTable({ steps, onItemDelete }) {
  const sortedSteps = steps
    .map((item) => <StepsTableItem item={item} key={item.id} onItemDelete={onItemDelete}/>)
    .sort((a, b) => new Date(b.props.item.date) - new Date(a.props.item.date));

  return (
    <table className="steps-table">
      <thead className="steps-table__header">
        <tr>
          <td>Дата</td>
          <td>Пройдено (км)</td>
          <td>Действия</td>
        </tr>
      </thead>
      <tbody className="steps-table__body">{sortedSteps.length > 0 ? sortedSteps : <tr><td colSpan="3">Нет данных для отображения</td></tr>}</tbody>
    </table>
  );
}
