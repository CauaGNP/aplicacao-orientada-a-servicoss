"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = require("express");
var _taskController = require("../controllers/taskController.ts");
const router = (0, _express.Router)();
router.get("/", _taskController.getAllTasks);
router.get("/:taskId", _taskController.getTaskById);
router.post("/", _taskController.createTask);
router.put("/:taskId", _taskController.updatedTask);
router.delete("/:taskId", _taskController.deleteTask);
var _default = exports.default = router;