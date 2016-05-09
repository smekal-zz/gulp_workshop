var product = require('./product.es6');

console.log("Console Log message from main.js ...");
document.getElementById("mycontainer").innerHTML = "<h1>Gulp Application demonstrating use of ES6</h1>";

product.displayProduct();
