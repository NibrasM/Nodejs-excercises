// const http = require("node:http");

// const server = http.createServer((req, res) => {
//   res.end("hi from server");
//   return;
// });

// server.listen(1997, () => {
//   console.log("server listening on port 1997");
// });

const express = require("express");
const app = express();

app.listen(3001, () => {
  console.log("server running at port 3001");
});
