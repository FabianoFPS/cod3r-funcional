const numbers = [1, 2, 3, 4, 5, 6];
const sum = (total, el) => total + el;
const total = numbers.reduce(sum);
console.log(total);

const avg = (acc, el, index, array) => {
  if (index === array.length - 1) {
    return (acc + el) / array.length;
  }

  return acc + el;
}

console.log(numbers.reduce(avg));

console.table(numbers.reduce(
  (acc, el, index, array) => {
    acc.total += el;
    acc.quantidade = array.length;
    acc.media = acc.total / acc.quantidade;

    return acc;
  },
  {
    total: 0,
    quantidade: 0,
    media: 0,
  }
));