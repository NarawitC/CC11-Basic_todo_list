function RadioButton(props) {
  return (
    <>
      <input
        type="radio"
        className="btn-check"
        name={props.name}
        id={props.id}
        onChange={props.onChange}
        defaultChecked={props.defaultChecked}
      />
      <label
        htmlFor={props.id}
        className={`btn ${props.color || `btn-outline-primary`} shadow-none`}
      >
        {props.children}
      </label>
    </>
  );
}
export default RadioButton;
