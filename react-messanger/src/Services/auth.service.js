class AuthService {
  constructor() {}

  getUser() {
    return JSON.parse(localStorage.getItem("user"));
  }

  setUser(user) {
    if (user) {
      return localStorage.setItem("user", JSON.stringify(user));
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
