const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
import * as cors from 'cors';
const app = express();

app.use(cors());
app.use(bodyParser.json());

let client = mysql.createConnection({
  user: 'darkadmin',
  password: 'aQOTCtLSz8ranLpdQWx0',
  host: '139.59.155.45',
  port: '3306',
});
 
client.query('USE arcadehub');


app.post('/login', (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
});

app.post('/score', (req, res) => {
  let apiKey = req.headers.authorization;
  let gameName = req.body.gameName;
  let score = req.body.score;

  client.query(
    'INSERT INTO scores (iduser, idgame, score, fecha) values((SELECT id FROM users WHERE apiKey = ?), (SELECT id FROM games WHERE gamename = ?), (?), NOW())', 
    [apiKey, gameName, score], function (error, results, fields) {
      if(!error) {
        res.send('OK!');
      } else {
        res.send('error al cargar la base de datos.');
      }
    });
});

app.listen(3000, () => {
  console.log('Ready on port 3000!');
});