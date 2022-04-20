import FilterSearch from './FilterSearch';
import FilterStatus from './FilterStatus';
function Filter(props) {
  return (
    <div className="d-flex gap-3 my-3">
      <FilterSearch></FilterSearch>
      <FilterStatus
        changeSearchStatus={props.changeSearchStatus}
        searchStatus={props.searchStatus}
      ></FilterStatus>
    </div>
  );
}
export default Filter;
