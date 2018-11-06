const http = require("http");
const quotes = require('./quotes');

const onRequest = (request, response) => {
 const quote = Math.floor(Math.random() * (quotes.length));
 response.writeHead(200, { "Content-type": "text/plain" });
 response.write(quotes[quote].quote);
  response.end();
}

http.createServer(onRequest).listen(3000);