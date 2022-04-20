import Button from '../ui/Button';
import TodoInput from '../TodoInput';
import { useState } from 'react';
function Todo(props) {
  const { title, completed, id, removeTodo, updateTodo } = props;
  const [isEditing, setIsEditing] = useState(false);
  const handleSetIsEditing = () => {
    setIsEditing(false);
  };
  return (
    <li
      className={`list-group-item d-flex flex-wrap justify-content-between align-items-center bd-callout bd-callout-${
        completed ? 'success' : 'warning'
      }`}
    >
      {isEditing ? (
        <>
          <TodoInput
            id={id}
            title={title}
            handleSetIsEditing={handleSetIsEditing}
            updateTodo={props.updateTodo}
          ></TodoInput>
        </>
      ) : (
        <>
          <div className="flex-grow-1" onClick={() => setIsEditing(true)}>
            {title}
          </div>
          <div className="btn-group">
            <Button
              color="outline-info"
              onClick={() => {
                setIsEditing(true);
                updateTodo({ completed: !completed }, id);
              }}
            >
              <i
                className={`fa-solid fa-toggle-${completed ? 'on' : 'off'}`}
              ></i>
            </Button>
            <Button color="outline-danger" onClick={() => removeTodo(id)}>
              <i className="fa-regular fa-trash-can"></i>
            </Button>
          </div>
        </>
      )}
    </li>
  );
}
export default Todo;
