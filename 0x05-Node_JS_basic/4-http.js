const http = require('http');

function createServer() {
  var app = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('content-Type', 'text/plain');
    res.end('Hello Holberton School!');
  });

  app.listen(1245, () => {
    console.log('Server is running on port 1245');
  });

  return app;
}

module.exports = createServer;
