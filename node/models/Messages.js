const mongoose = require("mongoose");
const userSchema = mongoose.Schema;

const messages = new userSchema({
  id: {
    type: mongoose.Types.ObjectId,
    auto: true,
  },
  message: {
    type: String,
  },
  convId: {
    type: String,
  },
  created_at: { type: Date, default: Date.now },
});

messages.pre("save", (next) => {
  const now = new Date();
  if (!this.created_at) {
    this.created_at = now;
  }
  return next();
});

const model = mongoose.model("Messages", messages);

module.exports = model;
