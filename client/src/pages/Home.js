import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getTasks } from "../actions/tasksActions";
import AddTask from "../components/AddTask";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Tasks from "../components/Tasks";

const Home = ({
  getTasks,
  loading,
  tasks,
  addSuccess,
  deleteSuccess,
  toggleSuccess,
  updateSuccess,
}) => {
  const [showAddTask, setShowAddTask] = useState(false);

  useEffect(() => {
    getTasks();
  }, [getTasks, addSuccess, deleteSuccess, toggleSuccess, updateSuccess]);

  const onAdd = () => {
    setShowAddTask(!showAddTask);
  };

  const handleShowAddTask = () => {
    setShowAddTask(true);
  };

  return (
    <div className="container">
      <Header onAdd={onAdd} showAddTask={showAddTask} />
      {showAddTask && <AddTask />}
      {loading ? (
        <p>Loading....</p>
      ) : (
        <Tasks tasks={tasks} handleShowAddTask={handleShowAddTask} />
      )}
      <Footer />
    </div>
  );
};

const mapStateToProps = ({
  TasksList: { loading, tasks },
  TasksAdd: { success: addSuccess },
  TasksDelete: { success: deleteSuccess },
  TaskToggle: { success: toggleSuccess },
  TasksUpdate: { success: updateSuccess },
}) => ({
  loading,
  tasks,
  addSuccess,
  deleteSuccess,
  toggleSuccess,
  updateSuccess,
});

export default connect(mapStateToProps, { getTasks })(Home);
