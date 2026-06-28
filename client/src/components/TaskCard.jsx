import { FaEdit, FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";
import api from "../services/api";
import "../styles/TaskCard.css";

function TaskCard({ task, fetchTasks, setEditingTask }) {

  const deleteTask = async () => {

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this task?"
    );

    if (!confirmDelete) return;

    try {

      await api.delete(`/tasks/${task._id}`);

      toast.success("Task Deleted");

      fetchTasks();

    } catch (error) {

      toast.error("Failed to delete task");

    }

  };

  const editTask = () => {

    setEditingTask(task);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  };

  return (
    <div className="task-card">

      <div className="card-header">

        <h2>{task.title}</h2>

        <div className="icons">

          <FaEdit
            className="edit"
            onClick={editTask}
          />

          <FaTrash
            className="delete"
            onClick={deleteTask}
          />

        </div>

      </div>

      <p>{task.description}</p>

      <span className={`status ${task.status.replace(" ", "-")}`}>
        {task.status}
      </span>

    </div>
  );
}

export default TaskCard;