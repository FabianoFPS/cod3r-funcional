function range(...args) {
  let arrayResult = [];
  if (args.length === 1) {
    for (let index = 1; index <= args[0]; index++) {
      console.log(index);
      arrayResult.push(index);
    }

    return arrayResult;
  }

  if (args.length === 2 && args[0] < args[1]) {
    for (let index = args[0]; index <= args[1]; index++) {
      console.log(index);
      arrayResult.push(index);
    }

    return arrayResult;
  }

  if (args.length === 3 && args[0] < args[1]) {
    for (let index = args[0]; index <= args[1]; index += args[2]) {
      console.log(index);
      arrayResult.push(index);
    }

    // let index = args[0];
    // while (index <= args[1]) {
    //   console.log(index);
    //   arrayResult.push(index);
    //   index += args[2];
    // }


    return arrayResult;
  }

  if (args.length === 2 && args[0] > args[1]) {
    for (let index = args[0]; index >= args[1]; index--) {
      console.log(index);
      arrayResult.push(index);
    }

    return arrayResult;
  }

  if (args.length === 3 && args[0] > args[1]) {
    for (let index = args[0]; index >= args[1]; index -= args[2]) {
      console.log(index);
      arrayResult.push(index);
    }

    return arrayResult;
  }
}

const result = range(5);
console.log(result);

const result2 = range(6, 11);
console.log(result2);

const result3 = range(10, 19, 2);
console.log(result3);

const result4 = range(6, 2);
console.log(result4);

const result5 = range(8, -3, 4);
console.log(result5);

function range2(a, b, s = 1) {
  const n1 = b === undefined ? 1 : a;
  const n2 = b == undefined ? a : b;
  const step = n1 <= n2 ? Math.abs(s) : -Math.abs(s);
  const nums = [];

  for (let i = n1; n1 <= n2 ? i <= n2 : i >= n2; i += step) {
    nums.push(i);
  }

  return nums;
}

console.log('Range2');
console.log(range2(8, -3, 4));