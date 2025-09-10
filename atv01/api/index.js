import "dotenv/config";
import express from "express";
import routes from "./routes/index.js";
const server = express();
const port = process.env.PORT ?? 3000;
server.get("/", (req, res) => {
    res.send("Welcome a task API!!");
});
server.use("/task", routes.taskRoutes);
server.listen(port, () => {
    console.log("Server is runing!!");
});
//# sourceMappingURL=index.js.map