const express = require("express");
const app = express();

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
const port = 3000; // Choose the desired port number
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
