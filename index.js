// server.js
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

// Serve static files from 'public'
app.use(
  express.static("public", {
    dotfiles: "allow" 
  })
);
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});