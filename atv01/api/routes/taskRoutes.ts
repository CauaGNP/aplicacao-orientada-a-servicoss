import tasks from "@/models/Task.js";
import { Router } from "express";

const router = Router();

router.get("/:taskId", (req, res) => {});

router.get("/", (req, res) => {
  const task = tasks;

  res.send({
    data: task,
    test: "aaaa",
  });
});

router.post("/", (req, res) => {});

router.put("/:taskId", (req, res) => {});

router.delete("/:taskId", (req, res) => {
  const { taskId } = req.params;

  tasks = tasks.filter((e) => e.id !== taskId);
});

export default router;
