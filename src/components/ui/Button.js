function Button(props) {
  const classButton = `btn btn-${props.color || 'primary'} shadow-none`;
  return <button className={classButton}>{props.children}</button>;
}
export default Button;
