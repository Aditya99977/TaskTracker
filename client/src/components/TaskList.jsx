import TaskCard from "./TaskCard";

function TaskList({ tasks, fetchTasks, setEditingTask }) {
  if (tasks.length === 0) {
    return (
      <h2
        style={{
          textAlign: "center",
          marginTop: "40px",
          color: "#777",
        }}
      >
        No Tasks Found
      </h2>
    );
  }

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskCard
          key={task._id}
          task={task}
          fetchTasks={fetchTasks}
          setEditingTask={setEditingTask}
        />
      ))}
    </div>
  );
}

export default TaskList;