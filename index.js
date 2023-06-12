const express = require("express");
const app = express();
const PORT = process.env.PORT || 3030;

// // Define a route to handle the root URL ("/")
// app.get("/", (req, res) => {
//   const ipAddress = req.ip;
//   res.send(`Your IP address is: ${ipAddress}`);
// });

app.get("/", (req, res) => {
  const ipAddress =
    req.headers["x-forwarded-for"] || req.connection.remoteAddress;
  res.send(`Your IP address is: ${ipAddress}`);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
