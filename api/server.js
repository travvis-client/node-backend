const cors = require("cors");
const express = require("express");
const helmet = require("helmet");

const authRouter = require("../router/auth/authRouter");
const usersRouter = require("../router/users/usersRouter");
const campaignsRouter = require("../router/campaigns/campaignsRouter");

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use("/api/", authRouter)
server.use("/api/users", usersRouter)
server.use("/api/campaigns", campaignsRouter)

server.get("/", (req, res) => {
  res.status(200).json({ api: "Travvis api running" });
});

module.exports = server;
