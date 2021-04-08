import React from "react";
import Task from "./Task";

const Tasks = ({ tasks, onAdd, handleShowAddTask }) => {
  return (
    <div>
      {tasks.length === 0 ? (
        <p>No tasks to show</p>
      ) : (
        tasks.map((task) => (
          <Task
            key={task._id}
            task={task}
            handleShowAddTask={handleShowAddTask}
          />
        ))
      )}
    </div>
  );
};

export default Tasks;
