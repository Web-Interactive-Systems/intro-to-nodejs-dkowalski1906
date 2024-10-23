/**
 Todo: Complete this lab 

 - Explore node `http` module
 - Create an http server on the port 3000
 - Create a handler of 
    - '/' req that serves to the client the following:
        A text: Hello, this is http node module 
        And a link: <a href="/">Dashbaoard -></a> 
    - '/dashboard' that serves to the client the following: 
        <h1>Dashbaoard</h1>
        <main>Basic routing using node http server</main>
        <a href="/">back home</a>
 
 */

const http = require("http");

http
  .createServer(function (req, res) {
    if (req.url === "/") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(`
        <h1>Hello, World!</h1>
        <a href="./about">About</a>
        <a href="./json">JSON</a>
        `);
    } else if (req.url === "/about") {
      res.end(`
        <h1>About page</h1>
        <a href="./">Retour</a>
        `);
    } else if (req.url === "/json") {
      res.end(
        JSON.stringify({
          data: "test",
        })
      );
    }
  })
  .listen(3000);
