function finalPrice0(tax, price) {
  return price * (1 + tax);
}
console.log(finalPrice0(0.0875, 25.1));
console.log(finalPrice0(0.0875, 21.7));
console.log(finalPrice0(0.0875, 107.9));

//CURRING
function finalPrice(tax) {
  return function(price) {
    return price * (1 + tax);
  }
}


console.log(finalPrice(0.0875)(25.1));
console.log(finalPrice(0.0875)(21.7));
console.log(finalPrice(0.0875)(107.9));


const nycFinalPrice = finalPrice(0.0875);

console.log(nycFinalPrice(25.1));
console.log(nycFinalPrice(21.7));
console.log(nycFinalPrice(107.9));
