import { v4 as uuidV4 } from "uuid";
import tasks from "@/models/Task.js";
const getAllTasks = ({ req, res }) => {
    res.send({
        data: tasks,
    });
};
const getTaskById = ({ req, res }) => {
    const { taskId } = req.params;
    const task = tasks.find((e) => e.id === taskId);
    if (!task) {
        res.status(404).send({
            error: "Task not found"
        });
    }
    res.status(200).send({
        data: task,
    });
};
const createTask = ({ req, res }) => {
    const newTask = {
        id: uuidV4(),
        description: req.body.description,
        completed: false,
    };
    tasks.push(newTask);
    res.send({
        message: "Created task",
        data: newTask,
    });
};
const updatedTask = ({ req, res }) => {
    const { taskId } = req.params;
    if (!taskId) {
        res.status(400).send({ error: "Type error" });
        return;
    }
    const updatedTask = {
        id: taskId,
        description: req.body.description,
        completed: req.body.completed,
    };
    tasks.forEach((e) => {
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
        data: updatedTask,
    });
};
const deleteTask = ({ req, res }) => {
    const { taskId } = req.params;
    const taskIndex = tasks.findIndex((e) => e.id === taskId);
    if (taskIndex !== -1) {
        tasks.splice(taskIndex, 1);
        res.status(200).send({
            message: "Deleted task!",
        });
    }
    else {
        res.status(404).send({
            message: "Error! Task not found.",
        });
    }
};
export { getAllTasks, getTaskById, createTask, updatedTask, deleteTask };
//# sourceMappingURL=taskController.js.map