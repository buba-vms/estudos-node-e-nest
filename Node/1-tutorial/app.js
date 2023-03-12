const http = require('http')

const server = http.createServer((request, resolve) => {
  if (request.url === '/') {
    resolve.end('Welcome to our home page')
    return
  }
  if (request.url === '/about') {
    resolve.end('heres our history')
    return
  }
  resolve.end(`
  <h1>${request.url} dosent exist</h1>
  <a href='/'>back home </a>
  `)
})

server.listen(5000)
