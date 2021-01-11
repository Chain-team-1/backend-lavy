const http = require('http');
const server = http.createServer((req, res) => {
  console.log('created server successful')
  res.end('server created');
}).listen(2021, '127.0.0.1');

