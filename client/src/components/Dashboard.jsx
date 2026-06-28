import "../styles/Dashboard.css";

function Dashboard({ tasks }) {
  const total = tasks.length;
  const completed = tasks.filter(
    (task) => task.status === "Completed"
  ).length;
  const pending = tasks.filter(
    (task) => task.status === "Pending"
  ).length;
  const progress = tasks.filter(
    (task) => task.status === "In Progress"
  ).length;

  return (
    <div className="dashboard">

      <div className="card total">
        <h3>Total</h3>
        <h2>{total}</h2>
      </div>

      <div className="card completed">
        <h3>Completed</h3>
        <h2>{completed}</h2>
      </div>

      <div className="card pending">
        <h3>Pending</h3>
        <h2>{pending}</h2>
      </div>

      <div className="card progress">
        <h3>In Progress</h3>
        <h2>{progress}</h2>
      </div>

    </div>
  );
}

export default Dashboard;