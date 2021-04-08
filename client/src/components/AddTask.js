import React, { useState, useEffect } from "react";
import moment from "moment";
import { connect } from "react-redux";
import { addTask, updateTask } from "../actions/tasksActions";

const AddTask = ({ addTask, task, updateTask }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);
  const [addMode, setAddMode] = useState(true);

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      alert("Please enter a task");
    } else {
      if (addMode) {
        addTask({ text, day, reminder });
      } else {
        setAddMode(true);
        updateTask(task._id, { text, day, reminder });
      }

      setText("");
      setDay("");
      setReminder(false);
    }
  };

  useEffect(() => {
    if (Object.keys(task).length) {
      setAddMode(false);
      setText(task.text);
      setDay(moment(task.day).format("YYYY-MM-DD"));
      setReminder(task.reminder);
    }
  }, [task]);

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label htmlFor="task">Task</label>
        <input
          type="text"
          name="text"
          id="text"
          placeholder="Add Task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>

      <div className="form-control">
        <label htmlFor="dayTime">Day &amp; Time</label>
        <input
          type="date"
          name="dayTime"
          id="dayTime"
          placeholder="Add Day"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>

      <div className="form-control form-control-check">
        <label htmlFor="reminder">Set Reminder</label>
        <input
          type="checkbox"
          id="reminder"
          checked={reminder}
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>

      <input type="submit" className="btn btn-block" value="Save Task" />
    </form>
  );
};

const mapStateToProps = ({ TasksGet: { task } }) => ({ task });

export default connect(mapStateToProps, { addTask, updateTask })(AddTask);
