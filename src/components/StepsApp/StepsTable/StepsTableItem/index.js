export default function StepsTableItem({ item, onDelete }) {
  const handleDelete = ({ target }) => {
    onDelete(target.closest('.steps-table__item').dataset.id);
  };
  return (
    <tr className="steps-table__item" data-id={item.id}>
      <td>{new Date(item.date).toLocaleDateString('ru-ru')}</td>
      <td>{item.distance}</td>
      <td>
        <span className="material-icons edit-button">mode_edit_outline</span>
        <span className="material-icons delete-button" onClick={handleDelete}>
          delete_outline
        </span>
      </td>
    </tr>
  );
}
