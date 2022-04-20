import RadioButton from '../ui/RadioButton';
function FilterStatus(props) {
  return (
    <div className="btn-group shadow">
      <RadioButton
        id="all"
        name="status"
        color="btn-outline-dark"
        onChange={() => props.changeSearchStatus(null)}
        defaultChecked={props.searchStatus === null}
      >
        <i className="fa-solid fa-list"></i>
      </RadioButton>
      <RadioButton
        id="completed"
        name="status"
        color="btn-outline-dark"
        onChange={() => props.changeSearchStatus(true)}
        defaultChecked={props.searchStatus === true}
      >
        <i className="fa-solid fa-clipboard-check"></i>
      </RadioButton>
      <RadioButton
        id="pending"
        name="status"
        color="btn-outline-dark"
        onChange={() => props.changeSearchStatus(false)}
        defaultChecked={props.searchStatus === false}
      >
        <i className="fa-regular fa-clipboard"></i>
      </RadioButton>
    </div>
  );
}
export default FilterStatus;
