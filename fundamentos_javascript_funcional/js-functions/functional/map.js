const numbers = [1, 2, 3, 4, 5, 6];

const numbersV2 = numbers.map(function(el) {
  return (el * 2) + 1000
});

console.log(
  `Array original: ${numbers}, Resultado do map: ${numbersV2}`
);

const students = [
  {name: 'Jake', score: 6.4},
  {name: 'Susan', score: 8.6},
  {name: 'Emma', score: 9.4},
  {name: 'Peter', score: 9.1},
];

const getScore = el => el.score;

console.log(
  students
    .map(getScore)
    .map(Math.ceil)
);