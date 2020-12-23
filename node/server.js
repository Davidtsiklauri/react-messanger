const app = require("./app"),
  mongoose = require("mongoose"),
  secret =
    "mongodb+srv://gira1234:KNWrgdVjUSXdqTKv@cluster0.8fgut.mongodb.net/test";

app.listen(8080, () => console.log("port", "8080"));

mongoose
  .connect(secret, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    autoIndex: false,
  })
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));
