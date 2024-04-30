// In a file named 4-http.js, create a small HTTP server using the http module:
// It should be assigned to the variable app and this one must be exported
// HTTP server should listen on port 1245
// Displays Hello Holberton School! in the page body for any endpoint as plain text

const { createServer } = require('node:http');

const port = 1245;
const hostname = '127.0.0.1';

const app = createServer((req, res) => {
  res.end('Hello Holberton School!');
});

app.listen(port, hostname);

module.exports = app;
