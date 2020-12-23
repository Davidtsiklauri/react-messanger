const express = require("express"),
  logger = require("morgan"),
  app = express(),
  userRoute = require("./routes/users"),
  uploadsRoute = require("./routes/upload"),
  socket = require("./socket/socketHelper"),
  validations = require("./routes/validations"),
  message = require("./routes/message"),
  bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use(logger("dev"));
// middleware;

// io.on("connection", function (socket) {
//   console.log("Made socket connection");
//   socket.on("new user", function (data) {
//     console.log("new ");
//     socket.userId = data;
//     activeUsers.add(data);
//     io.emit("new user", [...activeUsers]);
//   });

//   socket.on("disconnect", () => {
//     activeUsers.delete(socket.userId);
//     io.emit("user disconnected", socket.userId);
//   });
// });

app.use("/api", userRoute);
app.use("/api", validations);
// app.use("/api", message);

app.use(uploadsRoute);

app.get("/", (req, res) => res.send("sucess"));

module.exports = app;
