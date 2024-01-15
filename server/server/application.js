import express from "express";
import cors from "cors";
import "./db.js";
import userRouter from "./router/user.js";
import newsRoute from "./router/news.js";
import http from "http";
import { Server as SocketIOServer } from "socket.io";
// const assert = require("assert");
import assert from "assert";

const app = express();
const port = 4000;
app.use(express.json());
app.use(cors());
const httpServer = http.createServer(app);

const io = new SocketIOServer(httpServer, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log(`New Client connected: ${socket.id}`);

  socket.on("send_message", (data) => {
    // io.emit("receive_message", data);
    socket.broadcast.emit("receive_message", {
      ...data,
      sender: socket.data,
    });
  });

  socket.on("sign_in", (data) => {
    users[data] = socket;
    socket.data = data;
    socket.broadcast.emit("new_user", JSON.stringify(Object.keys(users)));
  });

  socket.on("disconnect", () => {
    console.log(`Client disconnected: ${socket.id}`);
  });
});

app.use("/user", userRouter);
app.use("/news", newsRoute);

httpServer.listen(port, () => {
  console.log(`Application is running on: http://localhost:${port}`);
});
