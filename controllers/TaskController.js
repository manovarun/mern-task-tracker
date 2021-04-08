const expressAsyncHandler = require("express-async-handler");
const Tasks = require("../models/Tasks");
const AppError = require("../utils/AppError");

exports.getTasks = expressAsyncHandler(async (req, res, next) => {
  const tasks = await Tasks.find();

  if (!tasks) {
    return next(new AppError("Unable to find tasks", 404));
  }

  res.status(200).json({ message: "success", tasks });
});

exports.getTask = expressAsyncHandler(async (req, res, next) => {
  const task = await Tasks.findById(req.params.id);

  if (!task) {
    return next(new AppError("Unable to find task", 404));
  }

  res.status(200).json({ message: "success", task });
});

exports.addTask = expressAsyncHandler(async (req, res, next) => {
  const day = new Date(req.body.day);

  const task = await Tasks.create({
    text: req.body.text,
    day,
    reminder: req.body.reminder,
  });

  if (!task) {
    return next(new AppError("Unable to create task", 404));
  }

  res.status(201).json({ status: "success", task });
});

exports.updateTask = expressAsyncHandler(async (req, res, next) => {
  const findTask = await Tasks.findById(req.params.id);

  if (!findTask) {
    return next(
      new AppError(`Unable to find task with id ${req.params.id}`, 404)
    );
  }

  const task = await Tasks.findByIdAndUpdate(req.params.id, req.body);

  if (!task) {
    return next(new AppError("Unable to update task", 400));
  }

  res.status(200).json({ status: "success", task });
});

exports.deleteTask = expressAsyncHandler(async (req, res, next) => {
  let task = await Tasks.findById(req.params.id);

  if (!task) {
    return next(
      new AppError(`Unable to find task with id ${req.params.id}`, 404)
    );
  }

  await Tasks.findByIdAndDelete(req.params.id);

  res.status(204).json({ status: "success" });
});
