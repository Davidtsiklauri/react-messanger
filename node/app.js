const express = require("express"),
  logger = require("morgan"),
  app = express(),
  userRoute = require("./routes/users"),
  uploadsRoute = require("./routes/upload"),
  messagesRoute = require("./routes/messages"),
  socket = require("./socket/socketHelper"),
  validations = require("./routes/validations"),
  bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
socket.initSocket();
app.use(bodyParser.json());

app.use(logger("dev"));
// middleware;

app.use("/api", userRoute);
app.use("/api", messagesRoute);
app.use("/api", validations);
// app.use("/api", message);

app.use(uploadsRoute);

app.get("/", (req, res) => res.send("sucess"));

module.exports = app;
