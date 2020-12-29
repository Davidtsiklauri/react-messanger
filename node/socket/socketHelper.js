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
    this.io.on("connection", (sock) => {
      const { convId } = sock.handshake.query;
      if (convId) {
        this.messagesMap.set(convId, convId);
      }
      sock.on("message", (mssg) => {
        if (this.messagesMap.get(mssg.convId)) {
          const newMessage = new messgsSchema({
            message: mssg.message,
            convId: mssg.convId,
          });
          newMessage.save();
          sock.emit("message", mssg);
        }
      });
    });
  }
}

const socketHelper = new SocketHelper(SocketLib);
module.exports = socketHelper;
