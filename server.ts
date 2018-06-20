const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
  console.log('empty get');
});

app.post('/login', (req, res) => {
  console.log(req.body);
  let username = req.body.username;
  let password = req.body.password;
});

app.post('/score', (req, res) => {
  let score = req.body.score;
});

app.listen(3000, () => {
  console.log('Ready on port 3000!');
});