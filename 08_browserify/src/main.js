var product = require('./product');

console.log("Console Log message from main.js ...");
document.getElementById("mycontainer").innerHTML = "<h1>main.js --> Gulp Application demonstrating bundling multiple JS files</h1>";

product.displayProduct();
