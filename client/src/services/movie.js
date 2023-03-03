import axios from "axios";

class MovieService {
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

  getMovies = () => this.api.get("/api/collections/movies");
  getMovie = (id) => this.api.get(`/api/collections/movies/${id}`);
  createMovie = (movie) => this.api.post("/api/collections/movies", movie);
  updateMovie = (id, movie) => this.api.put(`/api/collections/movies/${id}`, movie);
  deleteMovie = (id) => this.api.delete(`/api/collections/movies/${id}`);
}

const movieService = new MovieService();

export default movieService;
