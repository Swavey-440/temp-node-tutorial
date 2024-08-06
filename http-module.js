const http = require('http');

const server = http.createServer((req, res) => {
 
  if (req.url === '/') {
    res.end('Welcome to our Home page')
  }
  if (req.url === '/about') {
    res.end('Welcome to our About page')
  }
  res.end(`
    <h1>Oops!</h1>
    <p>We can't seem to fing the page you're looking for</p>
    <a href="/">Back home</a>
  `)
}).listen(5000);

const _ = require('express');
