import Button from '../ui/Button';
function Todo(props) {
  const { title, completed } = props;
  return (
    <li
      className={`list-group-item d-flex justify-content-between align-items-center bd-callout bd-callout-${
        completed ? 'success' : 'warning'
      }`}
    >
      <span>{title}</span>
      <div className="btn-group ">
        <Button color="outline-info">
          <i className={`fa-solid fa-toggle-${completed ? 'on' : 'off'}`}></i>
        </Button>
        <Button color="outline-danger">
          <i className="fa-regular fa-trash-can"></i>
        </Button>
      </div>
    </li>
  );
}
export default Todo;
