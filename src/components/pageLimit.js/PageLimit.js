function PageLimit() {
  return (
    <div className="d-flex align-items-center gap-2 col-3">
      <small className="text-muted">Show:</small>
      <select className="form-select form-select-sm text-center">
        <option value="">10</option>
        <option value="">25</option>
        <option value="">50</option>
      </select>
    </div>
  );
}
export default PageLimit;
