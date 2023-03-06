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

const bookRoutes = require("./routes/books");
app.use("/api", isAuthenticated, bookRoutes);

const movieRoutes = require("./routes/movies");
app.use("/api", isAuthenticated, movieRoutes);

const paintingRoutes = require("./routes/paintings");
app.use("/api", isAuthenticated, paintingRoutes);

const photoRoutes = require("./routes/photos");
app.use("/api", isAuthenticated, photoRoutes);

const placeRoutes = require("./routes/places");
app.use("/api", isAuthenticated, placeRoutes);

const songRoutes = require("./routes/songs");
app.use("/api", isAuthenticated, songRoutes);

require("./error-handling")(app);

module.exports = app;
