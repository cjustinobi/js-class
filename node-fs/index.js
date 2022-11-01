const http = require('http')
require('./demo.txt')

// Create a local server to receive data from
const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'application/json' ,
    'justin-header': 'testing testing'
  });
  console.log(req)

  res.end(JSON.stringify({
    data: 'Hejorld!'
  }));
});

server.listen(8000, () => {
  console.log('Server started at port 8000')
});