/**
 Todo: Complete this lab 

 - Explore node `path` module
 - Add console log in addition to
  a brief explanation of the most important functions of path module
 
 */

const path = require("path");

console.log(path);
console.log("dirname", path.dirname("./src/text.txt"));
// console.log("join", path.join("toto", "labx.png"));
console.log(path.extname(path.join("toto", "labx.png")));
console.log(path.basename((path.join("toto", "labx.png")), ".png"));