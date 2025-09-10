import { Request, Response } from "express";
declare const getAllTasks: ({ req, res }: {
    req: Request;
    res: Response;
}) => void;
declare const getTaskById: ({ req, res }: {
    req: Request;
    res: Response;
}) => void;
declare const createTask: ({ req, res }: {
    req: Request;
    res: Response;
}) => void;
declare const updatedTask: ({ req, res }: {
    req: Request;
    res: Response;
}) => void;
declare const deleteTask: ({ req, res }: {
    req: Request;
    res: Response;
}) => void;
export { getAllTasks, getTaskById, createTask, updatedTask, deleteTask };
//# sourceMappingURL=taskController.d.ts.map