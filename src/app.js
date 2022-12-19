const express = require('express');

// strings
const { sayHello, firstCharacters, firstCharacter } = require('./lib/strings');

// numbers
const { add, subtract, multiply, divide, remainder } = require('./lib/numbers');

// array
const {
  getNthElement,
  arrayToCSVString,
  addToArray,
  elementsStartingWithAVowel,
  removeNthElement2,
} = require('./lib/arrays');

// booleans
const { negate, truthiness, isOdd, startsWith } = require('./lib/booleans');

const app = express();

app.use(express.json());

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

// Numbers

app.get('/numbers/add/:a/and/:b', (req, res) => {
  const a = parseInt(req.params.a);
  const b = parseInt(req.params.b);
  if (Number.isNaN(a) || Number.isNaN(b)) {
    return res.status(400).json({ error: 'Parameters must be valid numbers.' });
  }
  return res.status(200).json({ result: add(a, b) });
});

app.get('/numbers/subtract/:a/from/:b', (req, res) => {
  const a = parseInt(req.params.a);
  const b = parseInt(req.params.b);
  if (Number.isNaN(a) || Number.isNaN(b)) {
    return res.status(400).json({ error: 'Parameters must be valid numbers.' });
  }
  return res.status(200).json({ result: subtract(b, a) });
});

app.post('/numbers/multiply', (req, res) => {
  const { a } = req.body;
  const { b } = req.body;

  const n1 = parseInt(a, 10);
  const n2 = parseInt(b, 10);
  if (!a || !b) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  }
  if (Number.isNaN(n1) || Number.isNaN(n2)) {
    res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' });
  }
  res.status(200).json({ result: multiply(n1, n2) });
});

app.post('/numbers/divide', (req, res) => {
  const { a } = req.body;
  const { b } = req.body;

  const n1 = parseInt(a, 10);
  const n2 = parseInt(b, 10);

  if (b === 0) {
    res.status(400).json({ error: 'Unable to divide by 0.' });
  }
  if (a === 0) {
    res.status(200).json({ result: divide(n1, n2) });
  }
  if (!a || !b) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  }
  if (Number.isNaN(n1) || Number.isNaN(n2)) {
    res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' });
  }
  res.status(200).json({ result: divide(n1, n2) });
});

app.post('/numbers/remainder', (req, res) => {
  const { a } = req.body;
  const { b } = req.body;

  const n1 = parseInt(a, 10);
  const n2 = parseInt(b, 10);

  if (req.body.b === 0) {
    res.status(400).json({ error: 'Unable to divide by 0.' });
  }
  if (req.body.a === 0) {
    res.status(200).json({ result: remainder(req.body.a, req.body.b) });
  }
  if (!req.body.a || !req.body.b) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  }
  if (Number.isNaN(n1) || Number.isNaN(n2)) {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  }
  res.status(200).json({ result: remainder(req.body.a, req.body.b) });
});

// Arrays

app.post('/arrays/element-at-index/:a', (req, res) => {
  const { array } = req.body;
  const { a } = req.params;
  res.status(200).json({ result: getNthElement(a, array) });
});

app.post('/arrays/to-string', (req, res) => {
  const { array } = req.body;
  res.status(200).json({ result: arrayToCSVString(array) });
});

app.post('/arrays/append', (req, res) => {
  const { array } = req.body;
  const { value } = req.body;
  addToArray(value, array);

  res.status(200).json({ result: array });
});

app.post('/arrays/starts-with-vowel', (req, res) => {
  const { array } = req.body;
  const newArray = elementsStartingWithAVowel(array);
  res.status(200).json({ result: newArray });
});

app.post('/arrays/remove-element', (req, res) => {
  const { array } = req.body;
  const index = req.query.index || 0;

  const newArray = removeNthElement2(index, array);
  res.status(200).json({ result: newArray });
});

// Booleans

app.post('/booleans/negate', (req, res) => {
  const { value } = req.body;
  res.status(200).json({ result: negate(value) });
});

app.post('/booleans/truthiness', (req, res) => {
  const { value } = req.body;
  res.status(200).json({ result: truthiness(value) });
});

app.get('/booleans/is-odd/:number', (req, res) => {
  const { number } = req.params;
  const newNumber = parseInt(number, 10);
  if (Number.isNaN(newNumber)) {
    res.status(400).json({ error: 'Parameter must be a number.' });
  }
  res.status(200).json({ result: isOdd(newNumber) });
});

app.get('/booleans/:string/starts-with/:letter', (req, res) => {
  const { letter } = req.params;
  const { string } = req.params;
  if (letter.length >= 2) {
    res.status(400).json({ error: 'Parameter "character" must be a single character.' });
  }
  res.status(200).json({ result: startsWith(letter, string) });
});

module.exports = app;
