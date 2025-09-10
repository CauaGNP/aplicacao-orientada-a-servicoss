"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updatedTask = exports.getTaskById = exports.getAllTasks = exports.deleteTask = exports.createTask = void 0;
var _Task = _interopRequireDefault(require("@/models/Task.ts"));
var _uuid = require("uuid");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const getAllTasks = ({
  req,
  res
}) => {
  res.send({
    data: _Task.default
  });
};
exports.getAllTasks = getAllTasks;
const getTaskById = ({
  req,
  res
}) => {
  const {
    taskId
  } = req.params;
  const task = _Task.default.find(e => e.id === taskId);
  if (!task) {
    res.status(404).send({
      error: "Task not found"
    });
  }
  res.status(200).send({
    data: task
  });
};
exports.getTaskById = getTaskById;
const createTask = ({
  req,
  res
}) => {
  const newTask = {
    id: (0, _uuid.v4)(),
    description: req.body.description,
    completed: false
  };
  _Task.default.push(newTask);
  res.send({
    message: "Created task",
    data: newTask
  });
};
exports.createTask = createTask;
const updatedTask = ({
  req,
  res
}) => {
  const {
    taskId
  } = req.params;
  if (!taskId) {
    res.status(400).send({
      error: "Type error"
    });
    return;
  }
  const updatedTask = {
    id: taskId,
    description: req.body.description,
    completed: req.body.completed
  };
  _Task.default.forEach(e => {
    if (e.id === updatedTask.id) {
      if (updatedTask.description !== undefined) {
        e.description = updatedTask.description;
      }
      if (updatedTask.completed !== undefined) {
        e.completed = updatedTask.completed;
      }
    }
  });
  res.status(200).send({
    message: "Updated task",
    data: updatedTask
  });
};
exports.updatedTask = updatedTask;
const deleteTask = ({
  req,
  res
}) => {
  const {
    taskId
  } = req.params;
  const taskIndex = _Task.default.findIndex(e => e.id === taskId);
  if (taskIndex !== -1) {
    _Task.default.splice(taskIndex, 1);
    res.status(200).send({
      message: "Deleted task!"
    });
  } else {
    res.status(404).send({
      message: "Error! Task not found."
    });
  }
};
exports.deleteTask = deleteTask;