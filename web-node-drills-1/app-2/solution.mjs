// see `solution.js` for solution explanations

import http from "http";

const server = http.createServer((req, res) => {
  res.end('Hello World');
});

server.listen(3001,() => {
 console.log("Server is running!");
}); 