import tasks from "@/models/Task.js";
import { taskType } from "@/types/taskTypes.js";
import { Router } from "express";

const router = Router();

router.get("/:taskId", (req, res) => {});

router.get("/", (req, res) => {
  const task = tasks;

  res.send({
    data: task,
  });
});

router.post("/", (req, res) => {});

router.put("/:taskId", (req, res) => {
  const taskAtt: taskType = {
    id: req.params.taskId,
    description: req.body.description,
    completed: req.body.complete,
  };

  const task = tasks.find((e) => e.id === taskAtt.id);

  if (!task) {
    return res.status(404).json({ message: "Task não encontrada" });
  }

  taskAtt.description ? (task.description = taskAtt.description) : task;
  taskAtt.completed ? (task.completed = taskAtt.completed) : task;

  tasks.push(...tasks, taskAtt);
});

router.delete("/:taskId", (req, res) => {
  const { taskId } = req.params;

  const newTasksArray = tasks.filter((e) => e.id !== taskId);

  tasks.length = 0;
  tasks.push(...newTasksArray);

  res.send({
    message: "Task deleted successful!!",
  });
});

export default router;
