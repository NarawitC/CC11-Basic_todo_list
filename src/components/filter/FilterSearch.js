import Button from '../ui/Button';

function FilterSearch(props) {
  const { searchTerm, changeSearchTerm } = props;
  return (
    <div className="input-group shadow ">
      <input
        type="text"
        className="form-control"
        placeholder="Search"
        value={searchTerm}
        onChange={(event) => changeSearchTerm(event.target.value)}
      />
      <Button color="dark" onClick={() => changeSearchTerm('')}>
        <i className="fa-solid fa-x"></i>
      </Button>
    </div>
  );
}
export default FilterSearch;
