import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";

import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import TaskForm from "./components/TaskForm";
import FilterBar from "./components/FilterBar";
import TaskList from "./components/TaskList";

import api from "./services/api";

function App() {
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [editingTask, setEditingTask] = useState(null);

  const fetchTasks = async () => {
    try {
      const res = await api.get("/tasks");
      setTasks(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const filteredTasks = tasks.filter((task) => {
    const matchSearch =
      task.title.toLowerCase().includes(search.toLowerCase()) ||
      task.description.toLowerCase().includes(search.toLowerCase());

    const matchStatus =
      statusFilter === "All" || task.status === statusFilter;

    return matchSearch && matchStatus;
  });

  return (
    <>
      <Navbar />

      <div className="container">
        <Dashboard tasks={tasks} />

        <TaskForm
          fetchTasks={fetchTasks}
          editingTask={editingTask}
          setEditingTask={setEditingTask}
        />

        <FilterBar
          search={search}
          setSearch={setSearch}
          statusFilter={statusFilter}
          setStatusFilter={setStatusFilter}
        />

        <TaskList
          tasks={filteredTasks}
          fetchTasks={fetchTasks}
          setEditingTask={setEditingTask}
        />
      </div>

      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}

export default App;