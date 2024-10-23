/**
 Todo: Complete this lab 

 - Add a new task in scripts of package.json to run `lab4.js`
 - Use argv of process module to get `filename` (a path to an existing file './utils/content.txt') and `text` (a text)
 - Use writeFile of fs module to write text in filename
 - Use readFile of fs module to read nameFile
 */

const fs = require("fs");

const filename = process.argv[2];
const text = process.argv.slice(3).join(" ");

// Todo writeFile
fs.writeFile(filename, text, (err) => {
    if (err) {
        console.error("Error writing to file:", err);
        return;
    }
})

// Todo readFile

fs.readFile(filename, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);
    
  });