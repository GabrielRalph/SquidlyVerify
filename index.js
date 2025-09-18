const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

// Serve static files from 'public'
app.use(express.static("public"));
app.listen(PORT, () => {
  console.log(`Server GGG listening on port ${PORT}`);
});