// 1
let nums = [100, 200, 300, 400, 500];

nums.splice(3, 2);

console.log(nums);

// 2
let arr = [200, 100, 300];

arr.splice(2, 0, 10000);

console.log(arr);

// 3
/* 정답: 4 */

// 4
/* 정답: 2 */

// 5
/* 정답: 4 */

// 6
/* 정답: 2 */

// 7
/* 정답: 3, 5 */

// 8
/* 정답: 84 */

// 9
let year = '2019';
let month = '04';
let day = '26';
let hour = '11';
let minute = '34';
let second = '27';

let result = year.concat(
  year,
  '/',
  month,
  '/',
  day,
  ' ',
  hour,
  ':',
  minute,
  ':',
  second
);

console.log(result);

// 10
let starNum = 8;
let tree = '';

for (let i = 0; i < starNum; i++) {
  for (let j = 0; j < starNum - i; j++) {
    tree += ' ';
  }
  for (let k = 0; k < i * 2 - 1; k++) {
    tree += '*';
  }
  tree += '\n';
}
console.log(tree);
