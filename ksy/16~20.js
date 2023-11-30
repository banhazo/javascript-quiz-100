// 16
let input_16 = '거꾸로';

console.log(input_16.split('').reverse().join(''));

// 17
const limitHeight = (height) => {
  return height >= 150 ? 'YES' : 'NO';
};

console.log(limitHeight(140));
console.log(limitHeight(150));

// 18
const avgScore = (score) => {
  let arr = score.split(' ');
  let total = 0;
  let length = arr.length;
  let avg = 0;

  arr.forEach((score) => {
    total += +score;
  });

  avg = total / length;

  return avg;
};

console.log(avgScore('30 40 50'));

// 19
const square = (nums) => {
  let arr = nums.split(' ');

  return arr[0] ** arr[1];
};

console.log(square('4 2'));

// 20
const div = (nums) => {
  let arr = nums.split(' ');
  let result = '';

  result = `${arr[0] / arr[1]} ${arr[0] % arr[1]}`;

  return result;
};

console.log(div('10 2'));
