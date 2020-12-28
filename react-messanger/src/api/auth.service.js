class AuthService {
  getUser() {
    return JSON.parse(localStorage.getItem("user"));
  }

  setUser(user) {
    if (user) {
      return localStorage.setItem("user", JSON.stringify(user));
    }
  }

  getUserId() {
    if (localStorage.getItem("user")) {
      return JSON.parse(localStorage.getItem("user"))["_id"];
    }
  }

  isauthenticated() {
    if (localStorage.getItem("user")) {
      return true;
    }
    return false;
  }

  logOut() {
    return localStorage.removeItem("user");
  }
}

export default new AuthService();
