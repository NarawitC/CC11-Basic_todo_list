import { useState } from 'react';
import { validateRegister } from './Validate';

function TodoInput(props) {
  const [input, setInput] = useState({
    email: '',
    username: '',
    phoneNumber: '',
  });

  const [error, setError] = useState({});

  const handleChangeInput = (event) => {
    const oldInput = { ...input };
    oldInput[event.target.name] = event.target.value;
    setInput(oldInput);
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();

    const newError = validateRegister(input.email, input.username, input.phoneNumber);

    if (Object.keys(newError).length > 0) {
      setError(newError);
    } else {
      setError({});
    }
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email address
        </label>
        <input
          type="text"
          className="form-control"
          id="email"
          name="email"
          value={input.email}
          onChange={handleChangeInput}
        />
        {error.email && <small className="text-danger">{error.email}</small>}
      </div>
      <div className="mb-3">
        <label htmlFor="username" className="form-label">
          Username
        </label>
        <input
          type="text"
          className="form-control"
          id="username"
          name="username"
          value={input.username}
          onChange={handleChangeInput}
        />
        {error.username && <small className="text-danger">{error.username}</small>}
      </div>
      <div className="mb-3">
        <label htmlFor="phoneNumber" className="form-label">
          Phone Number
        </label>
        <input
          type="text"
          className="form-control"
          id="phoneNumber"
          name="phoneNumber"
          value={input.phoneNumber}
          onChange={handleChangeInput}
        />
        {error.phoneNumber && <small className="text-danger">{error.phoneNumber}</small>}
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
      <button type="button" className="btn btn-success ms-3">
        Cancel
      </button>
    </form>
  );
}

export default TodoInput;
