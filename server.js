console.log('Web server');
const express = require('express');
const app = express();
const http = require('http');

// 1: Kirish code
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 2: Session code

// 3: View code
app.set('views', 'views');
app.set('view engine', 'ejs');

// 4: Routing code
app.get('/', function (req, res) {
  res.end(
    `<h1 style="background: lime">Home Page</h1> <p>Home page contents</p>`
  );
});
app.get('/contact', function (req, res) {
  res.end(
    `<h1 style="background: grey">Contact Page</h1> <p>Contact informations</p>`
  );
});
app.get('/services', function (req, res) {
  res.end(
    `<h1 style="background: orange">Services Page</h1> <p>Services info page</p>`
  );
});

const server = http.createServer(app);
const PORT = 3000;
server.listen(PORT, function () {
  console.log(`The server is up and running on port: ${PORT}`);
});
