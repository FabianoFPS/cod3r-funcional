// Anonymous function
// IIFE - Immediately Invoked Function Expression
(function (a, b, c) {
  console.log(`Result: ${a + b + c}`);
})(1, 2, 3);

(function () {
  let x = 300
  console.log(x);
})();

(() => {
  console.log('Arrow: #01');
})();

(() => console.log('Arrow: #02'))();