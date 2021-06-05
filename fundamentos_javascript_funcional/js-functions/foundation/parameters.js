function logParams(a, b, c) {
  console.log(a, b, c);
}

logParams(1, 2, 3);
logParams(1, 2, 3, 4);
logParams(1, 2);

function defaultParams(a = 1, b = 2, c = 3) {
  console.log(a, b, c);
}

defaultParams(33, 65, 89);
defaultParams();

function logNums(nums) {
  for (let n of nums) {
    console.log(n);
  }
}

// Spread/rest
function logNumsSped(...nums) {
  console.log(Array.isArray(nums));
  for (let n of nums) {
    console.log(n);
  }
}

logNums([4, 5, 9, 3, 0]);
logNumsSped(4, 5, 9, 3, 0);

function sumAll(...nums) {
  return nums.reduce((acc, num) => acc += num, 0);
}

console.log(`Soma de todos é: ${sumAll(9, 8, 6, 4)}`);