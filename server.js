console.log('Web server');
const express = require('express');
const app = express();
const http = require('http');
const fs = require('fs');

let user;
fs.readFile('database/user.json', 'utf8', (err, data) => {
  if (err) {
    console.log('ERROR: ', err);
  } else {
    user = JSON.parse(data);
  }
});

// 1: Kirish code
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 2: Session code

// 3: View code
app.set('views', 'views');
app.set('view engine', 'ejs');

// 4: Routing code
// app.post('/create-item', (req, res) => {
//   console.log(req.body);
//   res.json({ test: 'success' });
// });

app.get('/author', (req, res) => {
  res.render('author', { user: user });
});

app.get('/', function (req, res) {
  res.render('harid');
});

const server = http.createServer(app);
const PORT = 3000;
server.listen(PORT, function () {
  console.log(`The server is up and running on port: ${PORT}`);
});
