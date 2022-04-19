import FilterSearch from './FilterSearch';
import FilterStatus from './FilterStatus';
function Filter() {
  return (
    <div className="d-flex gap-3 my-3">
      <FilterSearch></FilterSearch>
      <FilterStatus></FilterStatus>
    </div>
  );
}
export default Filter;
