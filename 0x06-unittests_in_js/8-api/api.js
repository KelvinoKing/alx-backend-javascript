// By using express, create an instance of express called app
// Listen to port 7865 and log API available on localhost port 7865
// to the browser console when the express server is started
// For the route GET /, return the message Welcome to the payment system

const express = require('express');

const app = express();
const PORT = 7865;

app.get('/', (_, res) => {
  res.send('Welcome to the payment system');
});

app.listen(PORT, () => {
  console.log(`API available on localhost port ${PORT}`);
});

module.exports = app;
