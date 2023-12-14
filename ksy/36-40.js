// 36
const input_36 = 2;

const func_36 = (num) => {
  let result = '';
  for (let i = 1; i < 10; i++) {
    i > 1 ? (result += ` ${num * i}`) : (result += num * i);
  }
  return result;
};

// function func_36(num) {
//   let result = '';

//   for (let i = 1; i < 10; i++) {
//     result += ` ${num * i}`;
//   }

//   return result;
// }

console.log(func_36(2));

// 37
const input_37 = '원범 원범 혜원 혜원 혜원 혜원 유진 유진';

const func_37 = (vote) => {
  let obj = {};
  let voteArr = vote.split(' ');
  let elected = '';

  voteArr.forEach((item) => {
    if (Object.prototype.hasOwnProperty.call(obj, item)) {
      obj[item] += 1;
    } else {
      obj[item] = 1;
    }
  });

  elected = Object.keys(obj).reduce((acc, cur) =>
    obj[acc] > obj[cur] ? acc : cur
  );

  return `${elected}(이)가 총 ${obj[elected]}표로 반장이 되었습니다.`;
};

console.log(func_37(input_37));

// 38
const input_38 = '97 86 75 66 55 97 85 97 97 95';

const func_38 = (score) => {
  let arr = score.split(' ');
  let scoreSet = new Set(arr.sort((a, b) => b - a));
  let rank = Array.from(scoreSet).splice(0, 3);
  let result = 0;

  arr.forEach((item) => {
    if (rank.includes(item)) {
      result += 1;
    }
  });

  return result;
};

console.log(func_38(input_38));

// 39
const input_39 = 'hqllo my namq is hyqwon';

const func_39 = (str) => {
  let arr = str.split('');
  let result = '';

  arr.forEach((item) => {
    item === 'q' ? (result += 'e') : (result += item);
  });

  return result;
};

console.log(func_39(input_39));

// 40
const input_40 = [50, 5, 20, 20, 20, 20, 20];
const input_40_2 = [100, 5, 10, 10, 10, 10, 10, 10, 10, 10, 10];

const func_40 = (parm) => {
  let [limitWeight, personnel, weightArr] = [
    parm[0],
    parm[1],
    [...parm.splice(2)],
  ];

  let result = 0;
  let count = 0;

  weightArr.forEach((item) => {
    result += item;

    if (result <= limitWeight && count < personnel) {
      count++;
    }
  });

  return count;
};

console.log(func_40(input_40));
console.log(func_40(input_40_2));
