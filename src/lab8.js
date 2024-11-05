const { writeFileSync } = require("fs");
const http = require("http");
const fs = require("fs");
/**
 Todo: Follow the todos in this file to complete it
 */

// Todo run this code only once to generate a big file
// --
// Generate a big file using `writeFileSync`
// Array.from({ length: 100000 }, (_, i) => {
//   writeFileSync(__dirname + "/utils/big.txt", `This will be a big text file ${i}\n`, {
//     flag: "a",
//   }); // flag: "a" for appending
// });

// Todo create an http server

http
  .createServer(function (req, res) {
    if (req.url === "/") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(`
      <h1>Hello, World!</h1>
      <a href="./about">About</a>
      <a href="./json">JSON</a>
      <a href="./bigtext">Big Text</a>
    `);
    } 
    
    else if (req.url === "/about") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(`
      <h1>About page</h1>
      <a href="./">Retour</a>
    `);
    } 
    
    else if (req.url === "/json") {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(
        JSON.stringify({
          data: "test",
        })
      );
    } 
    
    else if (req.url === "/bigtext") {
      const stream = fs.createReadStream("./src/utils/big.txt");
      res.writeHead(200, { "Content-Type": "text/plain" });
      stream.pipe(res);
      stream.on("data", (data) => {
        console.log(data.toString());
      });
    } 
    
    else {
      res.writeHead(404, { "Content-Type": "text/html" });
      res.end("<h1>404 Not Found</h1>");
    }
  })
  .listen(4000, () => {
    console.log("Server is listening on port 4000");
  });
// Todo: serve text to the client.

// Todo: What's the problem?

// Todo: use `createReadStream` to file stream to serve text to the client.
