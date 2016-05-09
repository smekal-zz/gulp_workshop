var displayProduct = function() {
  console.log("Console Log message from product.js ...")
  document.getElementById("productcontainer").innerHTML = "<h2>product.js --> Displaying Product Information</h2>";
};

module.exports.displayProduct = displayProduct;
