const { urlencoded } = require('express');
const express = require('express');

const { sayHello } = require('./lib/strings');
const { firstCharacters } = require('./lib/strings');
const { firstCharacter } = require('./lib/strings');

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

app.get('/strings/first-character/:string', (req, res) => {
  res.status(200);
  res.json({ result: firstCharacter(req.params.string) });
});

app.get('/strings/first-characters/:string', (req, res) => {
  res.status(200);
  res.json({ result: firstCharacters(req.params.string, req.query.length) });
});

module.exports = app;
