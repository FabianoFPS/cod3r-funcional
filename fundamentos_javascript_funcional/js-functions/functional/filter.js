const numbers = [1, 2, 3, 4, 5, 6];

const greaterTahn = el => el > 3;

console.log(numbers.filter(greaterTahn));
console.log(numbers.filter(el => el % 2 === 0));


const students = [
  { name: 'Jake', score: 6.4 },
  { name: 'Susan', score: 8.6 },
  { name: 'Emma', score: 9.4 },
  { name: 'Peter', score: 9.1 },
];

const greatStudent = student => student.score >= 9;
console.log(students);
console.log(`Original array: ${students}, greateStudent: ${students.filter(greatStudent)}`);