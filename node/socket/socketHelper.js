const SocketLib = require("socket.io"),
  messgsSchema = require("../models/Messages.js");

class SocketHelper {
  socket = null;
  io = null;
  messagesMap = new Map();

  constructor(socket) {
    this.socket = socket;
    this.initSocket();
    this.setActiveListeners();
  }

  initSocket() {
    if (!this.io) {
      this.io = this.socket(3300);
    }
  }

  setActiveListeners() {
    this.io.on("connection", (socket) => {
      const { convId } = socket.handshake.query;
      if (convId) {
        this.messagesMap.set(convId, convId);
      }
      socket.join(convId);
      socket.on("message", (mssg) => {
        const mss = { ...mssg, date: new Date() };
        this.io.to(this.messagesMap.get(mssg.convId)).emit("message", mss);
        if (this.messagesMap.get(mssg.convId)) {
          const newMessage = new messgsSchema({
            message: mssg.message,
            convId: mssg.convId,
          });
          newMessage.save();
        }
      });
    });
  }
}

const socketHelper = new SocketHelper(SocketLib);
module.exports = socketHelper;
