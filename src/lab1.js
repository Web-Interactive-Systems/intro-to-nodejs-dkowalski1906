/**
 Todo: create a function that sets a timeout of 3000ms and 
  do the following inside its callback:
  - console.table an array of elements
  - console.log __dirname
  - console.log __filename
  - console.log require
  - console.log module
  - console.log process
  - console.log window
 */

const tab = [0, 1, 2];

const lab1 = () => {
  console.log(tab);
  console.log("__dirname:", __dirname);
  console.log("__filename:", __filename);
  console.log("require:", require);
  console.log("process", process.env);
};

// Exécution de lab1 après 3000ms
setTimeout(() => {
  lab1();
}, 3000);