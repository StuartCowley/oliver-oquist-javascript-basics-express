const express = require('express');

const { sayHello } = require('./lib/strings');

const app = express();

app.get('/strings/hello/:string', (req, res) => {
  res.status(200);
  res.json({ result: sayHello(req.params.string) });
});

app.get('/strings/upper/:id', (req, res) => {
  res.status(200);
  res.json({ result: req.params.id.toUpperCase() });
});

app.get('/strings/lower/:id', (req, res) => {
  res.status(200);
  res.json({ result: req.params.id.toLowerCase() });
});

app.get('/strings/first-characters/:id', (req, res) => {
  res.status(200);
  res.json({ result: req.params.id.charAt(0) });
});

// app.get('/strings/first-characters/:id', (req, res) => {
// res.status(200);
// });
module.exports = app;
