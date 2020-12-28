const mongoose = require("mongoose");
const userSchema = mongoose.Schema;

const user = new userSchema({
  id: mongoose.Types.ObjectId,
  avatar: {
    fileName: String,
    mimetype: String,
    name: String,
    size: Number,
    required: false,
  },
  userName: {
    type: String,
    unique: true,
    required: true,
    dropDups: true,
  },
  friends_ids: [{ friend_id: {
      type: String,
      required: true
  } }],
  created_at: { type: Date, default: Date.now },
});

user.pre("save", (next) => {
  console.log(this);

  const now = new Date();
  if (!this.created_at) {
    this.created_at = now;
  }
  return next();
});

const model = mongoose.model("Users", user);

module.exports = model;
