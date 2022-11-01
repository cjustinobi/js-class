const http = require('http')
const fs = require('fs')


const server = http.createServer((req, res) => {
  const url = req.url
  // res.writeHead(200, { 'Content-Type':'text/html'});

  if (url === '/') {
    res.writeHead(200, {
      'Content-Type': 'application/json'
    })
    html = fs.readFileSync('./index.html');
    const result = {
      name: 'Justin'
    }
    res.write(JSON.stringify(result))
    return res.end()
  }

  if (url === '/about') {
    html = fs.readFileSync('./about.html');
    return res.end(html)
  }

  if (url === '/contact') {
    html = fs.readFileSync('./contact.html');
    return res.end(html)
  }

  res.write('page not found')
  res.end()
})

server.listen(3000, () => {
  console.log('Server started at port 3000')
})