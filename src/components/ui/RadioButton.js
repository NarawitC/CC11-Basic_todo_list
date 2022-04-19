function RadioButton(props) {
  return (
    <>
      <input type="radio" className="btn-check" name={props.name} id={props.id} />
      <label htmlFor="all" className={`btn ${props.color || `btn-outline-primary`} shadow-none`}>
        {props.children}
      </label>
    </>
  );
}
export default RadioButton;
