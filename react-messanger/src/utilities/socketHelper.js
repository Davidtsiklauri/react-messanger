export default class SocketHelper {
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

  socket = null;

  initSocket(connectionId) {
    if (socket) {
      this.closeConnection()
    } else {
      this.socket = io("http://localhost:3300", {
        transports: ["websocket"],
        query: {
          connectionId,
        },
      });
    }
  }

  closeConnection() {
    if (this.socket) {
      this.sock.disconnect();
      this.socket = null;
    }
  }
}
