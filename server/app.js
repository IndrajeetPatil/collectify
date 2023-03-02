require("dotenv").config();
require("./db");

const express = require("express");
const app = express();

const { isAuthenticated } = require("./middleware/jwt.middleware");

require("./config")(app);

const indexRoutes = require("./routes");
app.use("/api", indexRoutes);

const authRoutes = require("./routes/auth");
app.use("/auth", authRoutes);

const collectionRoutes = require("./routes/collections");
app.use("/api", isAuthenticated, collectionRoutes);

const movieRoutes = require("./routes/movies");
app.use("/api", isAuthenticated, movieRoutes);

require("./error-handling")(app);

module.exports = app;
