const app = require("./app");
const PORT = process.env.REACT_APP_PORT || 5005;
app.listen(PORT, () =>
  console.log(`Server listening on http://localhost:${PORT}`),
);
