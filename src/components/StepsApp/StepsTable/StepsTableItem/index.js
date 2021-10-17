export default function StepsTableItem({ item, onDelete }) {
  const handleDelete = () => {
    onDelete(item.id);
  };
  return (
    <tr className="steps-table__item">
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
