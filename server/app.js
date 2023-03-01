require("dotenv").config();
require("./db");
const express = require("express");
const app = express();

require("./config")(app);

const indexRoutes = require("./routes");
app.use("/api", indexRoutes);

const authRoutes = require("./routes/auth");
app.use("/auth", authRoutes);

require("./error-handling")(app);

module.exports = app;
