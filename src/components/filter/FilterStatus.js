import RadioButton from '../ui/RadioButton';
function FilterStatus() {
  return (
    <div className="btn-group shadow">
      <RadioButton id="status" name="all" color="btn-outline-dark">
        <i class="fa-solid fa-list"></i>
      </RadioButton>
      <RadioButton id="status" name="all" color="btn-outline-dark">
        <i class="fa-solid fa-clipboard-check"></i>
      </RadioButton>
      <RadioButton id="status" name="all" color="btn-outline-dark">
        <i class="fa-regular fa-clipboard"></i>
      </RadioButton>
    </div>
  );
}
export default FilterStatus;
