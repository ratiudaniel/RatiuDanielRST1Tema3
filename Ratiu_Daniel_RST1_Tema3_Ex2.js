const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  // verificăm cererea HTTP
  if (req.url === '/') {
    // dacă accesăm localhost:8080, afișăm un mesaj de salut
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h1>Hello from my web server!</h1>');
    res.end();
  } else if (req.url === '/SPRING.html') {
    // dacă accesăm localhost:8080/SPRING.html, afișăm pagina HTML pentru primăvară
    fs.readFile('SPRING.html', (err, data) => {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      res.end();
    });
  } else if (req.url === '/WINTER.html') {
    // dacă accesăm localhost:8080/WINTER.html, afișăm pagina HTML pentru iarnă
    fs.readFile('WINTER.html', (err, data) => {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      res.end();
    });
  } else {
    // dacă accesăm altceva decât localhost:8080, afișăm un mesaj de eroare 404
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.write('<h1>Error 404: Page not found</h1>');
    res.end();
  }
});

// pornim serverul și îl ascultăm pe portul 8080
server.listen(8080, () => {
  console.log('Server running on port 8080');
});
