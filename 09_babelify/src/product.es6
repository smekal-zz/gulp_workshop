"use strict";

var displayProduct = function() {
  let productPrice = 100;
  console.log(`Console Log message from product.es6 - productPrice = ${productPrice} ...`);
  document.getElementById("productcontainer").innerHTML = "<h2>product.es6 --> Displaying Product Information</h2>";
};

module.exports.displayProduct = displayProduct;
