/**
 Todo: complete this lab by importing the needed 
 objects and functions from
 ./utils/constants.js and ./utils/helpers.js
 */

const hello = require("./utils/helpers.js")
const { foo, bar, baz } = require("./utils/constants.js")

hello(foo);
hello(bar);
hello(baz);