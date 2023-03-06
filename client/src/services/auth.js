import Service from "./service";

class AuthService extends Service {
  login = (requestBody) => this.api.post("/auth/login", requestBody);
  signup = (requestBody) => this.api.post("/auth/signup", requestBody);
  verify = () => this.api.get("/auth/verify");
  logout = () => this.api.post("/auth/logout");
}

const authService = new AuthService();

export default authService;
