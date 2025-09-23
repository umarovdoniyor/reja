const http = require('http');
const mongodb = require('mongodb');

let db;
const connectionString =
  'mongodb+srv://ud_95:s4TEniL6GyP7njLX@cluster0.hclcdnd.mongodb.net/Reja';

mongodb.connect(
  connectionString,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, client) => {
    if (err) console.log('ERROR on connection MongoDB');
    else {
      console.log('MongoDB connection succeed');
      module.exports = client;
      const app = require('./app');
      const server = http.createServer(app);
      const PORT = 3000;
      server.listen(PORT, function () {
        console.log(
          `The server is up and running on port: ${PORT}, http://localhost:${PORT}`
        );
      });
    }
  }
);
