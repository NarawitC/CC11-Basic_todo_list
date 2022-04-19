function Button(props) {
  const classButton = `btn btn-${props.color || 'primary'} shadow-none`;
  return (
    <button onClick={props.onClick} className={classButton}>
      {props.children}
    </button>
  );
}
export default Button;
