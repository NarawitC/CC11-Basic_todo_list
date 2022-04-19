import Button from './ui/Button';
import { useState } from 'react';
function TodoInput(props) {
  const [todoInput, setTodoInput] = useState('');
  const addTodoAndUpdateInput = () => {
    props.handleAddTodoList(todoInput);
    setTodoInput('');
  };
  return (
    <>
      <div className="input-group shadow">
        <input
          type="text"
          className="form-control"
          placeholder="Enter new todo"
          value={todoInput}
          onChange={(event) => setTodoInput(event.target.value)}
        />
        <Button color="success" onClick={() => addTodoAndUpdateInput()}>
          <i className="fa-solid fa-plus"></i>
        </Button>

        <Button color="outline-secondary" onClick={() => setTodoInput('')}>
          <i className="fa-solid fa-x"></i>
        </Button>
      </div>
      {/* <small className='text-red'>Title is required.</small> */}
    </>
  );
}
export default TodoInput;
