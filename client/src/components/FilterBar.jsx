import "../styles/FilterBar.css";

function FilterBar({
  search,
  setSearch,
  statusFilter,
  setStatusFilter,
}) {
  return (
    <div className="filter-bar">

      <input
        type="text"
        placeholder="🔍 Search Tasks..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select
        value={statusFilter}
        onChange={(e) => setStatusFilter(e.target.value)}
      >
        <option>All</option>
        <option>Pending</option>
        <option>In Progress</option>
        <option>Completed</option>
      </select>

    </div>
  );
}

export default FilterBar;