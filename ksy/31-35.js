// 31
/* 정답: 3, 5 */
// 해설: 시간복잡도라고 단어를 어렵게 써서 그렇지 누가 더 일을 오래, 많이 하는가 생각하면 답이 나옴
//      arr.slice() 함수는 배열의 일부를 새로운 배열로 반환하는데, 이 과정에서 전체 배열을 순회해야 하므로 시간 복잡도는 O(n).
//      arr.includes(5) 함수는 배열에 특정 요소가 포함되어 있는지 확인하는데, 이 과정에서 전체 배열을 순회해야 하므로 시간 복잡도는 O(n).

// 32
const input_32 =
  '안녕하세요. 저는 제주대학교 감귤이쁘게까기전공 김어쩌구입니다.';

const func_32 = (txt) => {
  let isWordNums = txt.trim().split(' ').length;

  return isWordNums;
};

console.log(func_32(input_32));

// 33
const input_33 = '1 2 3 4 5 ';

const func_33 = (txt) => {
  return txt.trim().split(' ').reverse().join(' ');
};

console.log(func_33(input_33));

// 34
const input_34_1 = '176 156 155 165 166 169';
const input_34_2 = '155 156 165 166 169 176';

const func_34 = (height) => {
  let arr = height.split(' ');
  let result = 'YES';

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      result = 'NO';
    }
  }

  return result;
};

console.log(func_34(input_34_2));

// 35
const one = (n) => {
  const two = (x) => {
    return x ** n;
  };
  return two;
};

const a = one(2);
const b = one(3);
const c = one(4);

console.log(a(10));
console.log(b(10));
console.log(c(10));
