/* 문제16: 로꾸거
문장이 입력되면 거꾸로 출력하는 프로그램을 만들어 봅시다.
입력 : 거꾸로
출력 : 로꾸거
*/
// 방법1
const inputStr = '거꾸로';
const reverseString = (inputStr) => [...inputStr].reverse().join('');
console.log(reverseString(inputStr));

// 방법2
const reverseStringFor = (inputStr) => {
  let result = '';
  for (let char of inputStr) result = char + result;
  return result;
};
console.log(reverseStringFor(inputStr));

/* 문제17: 놀이기구 키 제한
유주는 놀이공원 아르바이트 중입니다.
그런데 놀이기구마다 키 제한이 있습니다.
유주가 담당하는 놀이기구는 키가 150cm 이상만 탈 수 있습니다.
입력으로 키가 주어지면 키가 150이 넘으면 YES를 틀리면 NO를 출력하는 프로그램을 작성하세요.
*/
const inputHeight = 150;
const limitHeight = (inputHeight) => (inputHeight >= 150 ? 'YES' : 'NO');
console.log(limitHeight(inputHeight));

/* 문제18: 평균 점수
영하네 반은 국어, 수학, 영어 시험을 보았습니다. 
영하는 친구들의 평균 점수를 구해주기로 했습니다.
공백으로 구분하여 세 과목의 점수가 주어지면 전체 평균 점수를 구하는 프로그램을 작성하세요. 
단, 소숫점 자리는 모두 버립니다.
*/
// const [korean, math, english] = prompt('국어, 수학, 영어 점수를 공백으로 구분하여 입력해주세요.', '20 30 40').split(' ').map(Number);
let getAvg = (score) => {
  const [korean, math, english] = score.split(' ').map(Number);
  const totalAvgScore = (korean + math + english) / 3;
  return Math.floor(totalAvgScore);
};
console.log(getAvg('20 30 40'));

/* 문제19: 제곱을 구하자
공백으로 구분하여 두 숫자 a와 b가 주어지면, a의 b승을 구하는 프로그램을 작성하세요.
*/
const calcPow = (numberList) => {
  const [a, b] = numberList.split(' ').map(Number);
  return a ** b;
  // return Math.pow(a,b)
};
console.log(calcPow('2 10'));

/* 문제20: 몫과 나머지
공백으로 구분하여 두 숫자가 주어집니다.
두번째 숫자로 첫번째 숫자를 나누었을 때 그 몫과 나머지를 공백으로 구분하여 출력하세요.
*/
// const [number1, number2] = prompt('2개의 숫자를 공백으로 구분하여 입력해주세요.','10 2').split(' ').map(Number)
const [number1, number2] = '10 2'.split(' ').map(Number);
console.log(number1 / number2, number1 % number2);
