import Button from './ui/Button';
import { useState } from 'react';
function TodoInput(props) {
  const [todoInput, setTodoInput] = useState(props.title || '');
  const [displayText, setDisplayText] = useState('none');
  const [displayValid, setDisplayValid] = useState('');
  const addTodoAndUpdateInput = () => {
    if (!todoInput) {
      setDisplayText('block');
      setDisplayValid('is-invalid');
    } else {
      if (props.id) {
        props.updateTodo({ title: todoInput }, props.id);
        props.handleSetIsEditing();
      } else {
        props.handleAddTodoList(todoInput);
        setDisplayText('none');
        setDisplayValid('');
        setTodoInput('');
      }
    }
  };
  const resetDisplayOnChange = () => {
    setDisplayText('none');
    setDisplayValid('');
  };
  return (
    <>
      <div className="input-group shadow">
        <input
          type="text"
          className={`form-control ${displayValid}`}
          placeholder="Enter new todo"
          value={todoInput}
          onChange={(event) => {
            resetDisplayOnChange();
            setTodoInput(event.target.value);
          }}
        />
        {props.id ? (
          <Button color="primary" onClick={() => addTodoAndUpdateInput()}>
            <i className="fa-solid fa-check"></i>
          </Button>
        ) : (
          <Button color="success" onClick={() => addTodoAndUpdateInput()}>
            <i className="fa-solid fa-plus"></i>
          </Button>
        )}
        <Button
          color="outline-secondary"
          onClick={() => {
            if (props.id) {
              props.handleSetIsEditing();
            } else setTodoInput('');
          }}
        >
          <i className="fa-solid fa-x"></i>
        </Button>
      </div>
      <small className={`text-danger d-${displayText}`}>
        Task is required.
      </small>
    </>
  );
}
export default TodoInput;
