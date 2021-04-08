import React from "react";
import Moment from "react-moment";
import { connect } from "react-redux";
import {
  deleteTask,
  toggleTaskReminder,
  getTask,
} from "../actions/tasksActions";
import { FaTimes } from "react-icons/fa";
import { BiEdit } from "react-icons/bi";

const Task = ({
  task: { _id, text, day, reminder },
  deleteTask,
  toggleTaskReminder,
  getTask,
  handleShowAddTask,
}) => {
  return (
    <div
      className={`task ${reminder ? "reminder" : ""}`}
      onDoubleClick={() => toggleTaskReminder(_id)}
    >
      <h3>
        {text}{" "}
        <span
          style={{
            flex: "0 0 12%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <BiEdit
            style={{ color: "#1565c0", cursor: "pointer" }}
            onClick={() => {
              handleShowAddTask();
              getTask(_id);
            }}
          />
          <FaTimes
            style={{ color: "red", cursor: "pointer" }}
            onClick={() => {
              deleteTask(_id);
            }}
          />
        </span>
      </h3>
      <p>
        <Moment format="MMMM Do YYYY, h:mm:ss a">{day}</Moment>
      </p>
    </div>
  );
};

export default connect(null, { deleteTask, toggleTaskReminder, getTask })(Task);
