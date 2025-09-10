"use strict";

require("dotenv/config");
var _express = _interopRequireDefault(require("express"));
var _index = _interopRequireDefault(require("./routes/index.ts"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const server = (0, _express.default)();
const port = process.env.PORT ?? 3000;
server.listen(port, () => {
  console.log("Server is runing!!");
});
server.get("/", (req, res) => {
  res.send("Welcome a task API!!");
});
server.use("/task", _index.default.taskRoutes);