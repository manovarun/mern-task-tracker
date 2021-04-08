const mongoose = require("mongoose");

const TasksSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: [true, "Please enter text"],
      trim: true,
      unique: true,
    },
    day: {
      type: Date,
      required: [true, "Please enter day"],
    },
    reminder: {
      type: Boolean,
      required: [true, "Please enter reminder"],
      default: false,
    },
  },
  {
    timestamps: true,
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const Tasks = mongoose.model("Tasks", TasksSchema);

module.exports = Tasks;
