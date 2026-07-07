const express = require('express');
const app = express();

app.get('/', (req, res) => {
  console.log("Linter will issue here")
  res.send('Works on my machine.');
});

module.exports = app;
