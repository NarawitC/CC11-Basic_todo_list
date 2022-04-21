import FilterSearch from './FilterSearch';
import FilterStatus from './FilterStatus';
function Filter(props) {
  const { changeSearchStatus, searchStatus, changeSearchTerm, searchTerm } = props;
  return (
    <div className="d-flex gap-3 my-3">
      <FilterSearch searchTerm={searchTerm} changeSearchTerm={changeSearchTerm}></FilterSearch>

      <FilterStatus
        changeSearchStatus={changeSearchStatus}
        searchStatus={searchStatus}
      ></FilterStatus>
    </div>
  );
}
export default Filter;
