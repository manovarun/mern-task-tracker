const express = require("express");
const {
  getTasks,
  getTask,
  addTask,
  updateTask,
  deleteTask,
} = require("../controllers/TaskController");

const router = express.Router();

router.route("/").post(addTask).get(getTasks);

router.route("/:id").get(getTask).patch(updateTask).delete(deleteTask);

module.exports = router;
