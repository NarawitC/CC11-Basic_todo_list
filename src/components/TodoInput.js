import Button from './ui/Button';
import { useState } from 'react';
function TodoInput(props) {
  const [todoInput, setTodoInput] = useState(props.title || '');
  const [displayText, setDisplayText] = useState('none');
  const [displayValid, setDisplayValid] = useState('');
  const addTodoAndUpdateInput = () => {
    if (!todoInput) {
      if (todoInput.length > 0) {
        props.handleAddTodoList(todoInput);
        setDisplayText('none');
        setDisplayValid('');
      } else {
        setDisplayText('block');
        setDisplayValid('is-invalid');
      }
      setTodoInput('');
    } else {
      props.updateTodo({ title: todoInput }, props.id);
      props.handleSetIsEditing();
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
      <small className={`text-danger d-${displayText}`}>Task is required.</small>
    </>
  );
}
export default TodoInput;
