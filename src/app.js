const express = require('express');

// strings
const { sayHello, firstCharacters, firstCharacter } = require('./lib/strings');

// numbers
const { add } = require('./lib/numbers');

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

app.get('/numbers/add/:a/and/:b', (req, res) => {
  const a = parseInt(req.params.a);
  const b = parseInt(req.params.b);

  res.status(200).json({ result: add(a, b) });
});

app.get('/numbers/add/:numberone/and/numbertwo', (req, res) => {});
module.exports = app;
