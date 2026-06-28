import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import api from "../services/api";
import "../styles/TaskForm.css";

function TaskForm({
  fetchTasks,
  editingTask,
  setEditingTask,
}) {

  const [task, setTask] = useState({
    title: "",
    description: "",
    status: "Pending",
  });

  useEffect(() => {

    if (editingTask) {

      setTask({
        title: editingTask.title,
        description: editingTask.description,
        status: editingTask.status,
      });

    }

  }, [editingTask]);

  const handleChange = (e) => {

    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    if (!task.title.trim() || !task.description.trim()) {

      toast.error("Please fill all fields");

      return;

    }

    try {

      if (editingTask) {

        await api.put(`/tasks/${editingTask._id}`, task);

        toast.success("Task Updated Successfully");

        setEditingTask(null);

      } else {

        await api.post("/tasks", task);

        toast.success("Task Added Successfully");

      }

      fetchTasks();

      setTask({
        title: "",
        description: "",
        status: "Pending",
      });

    } catch (error) {

      toast.error("Something went wrong");

      console.log(error);

    }

  };

  return (
    <div className="form-container">

      <form onSubmit={handleSubmit}>

        <h2>
          {editingTask ? "Update Task" : "Add New Task"}
        </h2>

        <input
          type="text"
          name="title"
          placeholder="Task Title"
          value={task.title}
          onChange={handleChange}
        />

        <textarea
          name="description"
          placeholder="Task Description"
          rows="4"
          value={task.description}
          onChange={handleChange}
        />

        <select
          name="status"
          value={task.status}
          onChange={handleChange}
        >
          <option>Pending</option>
          <option>In Progress</option>
          <option>Completed</option>
        </select>

        <button type="submit">
          {editingTask ? "Update Task" : "Add Task"}
        </button>

      </form>

    </div>
  );
}

export default TaskForm;