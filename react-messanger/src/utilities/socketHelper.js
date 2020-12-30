import io from "socket.io-client";

export class SocketHelper {
  static socketHelperIntance = null;
  /**
   * @returns {SocketHelper}
   */
  static getInstance() {
    if (SocketHelper.socketHelperIntance == null) {
      SocketHelper.socketHelperIntance = new SocketHelper();
    }
    return this.socketHelperIntance;
  }

  /**
   * @private
   */
  socket = null;

  initSocketConnection(connectionId) {
    if (this.socket) {
      this.closeConnection();
    } else {
      this.socket = io("http://localhost:3300", {
        transports: ["websocket"],
        query: {
          convId: connectionId,
        },
      });
    }
    this.getMessages().then((data) => console.log(data));
  }

  closeConnection() {
    if (this.socket) {
      this.socket.disconnect();
      this.socket = null;
    }
  }

  sendMessage(data) {
    this.emitEvent("message", data);
  }

  sendTypingEvent(event) {
    this.emitEvent("typing");
  }

  getMessages() {
    return new Promise((resolve, reject) => {
      this.socket.on("messages", (data) => {
        resolve(data);
      });
      resolve("dasdsa");
      resolve("sadsa");
    });
  }

  /**
   * @private
   */
  emitEvent(event, data = null) {
    if (this.socket) {
      this.socket.emit(event, data);
    }
  }
}

export class MessageData {
  name;
  message;
  convId;
  constructor(name, message, convId) {
    this.name = name || null;
    this.message = message || null;
    this.convId = convId || null;
  }
}
