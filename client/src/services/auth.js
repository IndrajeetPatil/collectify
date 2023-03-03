import axios from "axios";

class AuthService {
  constructor() {
    this.api = axios.create({
      baseURL: process.env.REACT_APP_SERVER_URL || "http://localhost:5005",
    });

    // Automatically set token on the request headers for every request
    this.api.interceptors.request.use((config) => {
      const storedToken = localStorage.getItem("authToken");

      if (storedToken) {
        config.headers = { Authorization: `Bearer ${storedToken}` };
      }

      return config;
    });
  }

  login = (requestBody) => this.api.post("/auth/login", requestBody);
  signup = (requestBody) => this.api.post("/auth/signup", requestBody);
  verify = () => this.api.get("/auth/verify");
  logout = () => this.api.post("/auth/logout");
}

const authService = new AuthService();

export default authService;
