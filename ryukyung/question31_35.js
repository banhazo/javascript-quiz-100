/* 문제31: 자바스크립트 자료형의 복잡도
다음 배열 내장함수의 시간 복잡도가 O(1)이 아닌 것을 모두 고르시오.
1)  arr[i]          -> O(1)
2)  arr.push(5)     -> O(1)
3)  arr.slice()     -> O(n)
4)  arr.pop()       -> O(1)
5)  arr.includes(5) -> O(n)
*/
/* 답: 3, 5
- O(1): 상수시간 ex. push, pop
- O(n): 선형시간 ex. 1중 for 등
*/

/* 문제32: 문자열 만들기
취업 준비생인 혜림이는 자기소개서를 쓰고 있습니다.
열심히 자기소개서를 작성하던 도중 혜림이는 자기가 지금까지 단어를 얼마나 적었는지 궁금하게 됩니다. 
혜림이를 위해 문자열을 입력받으면 단어의 갯수를 출력하는 프로그램을 작성해 주세요.
입력 : 안녕하세요. 저는 제주대학교 컴퓨터공학전공 혜림입니다.
출력 : 5
*/
const inputStr = '안녕하세요. 저는 제주대학교 컴퓨터공학전공 혜림입니다.';
const countSliceString = (string) => string.split(' ').length;
countSliceString(inputStr); // 5

/* 문제33: 거꾸로 출력하기
한 줄에 여러개의 숫자가 입력되면, 역순으로 그 숫자들을 하나씩 출력하는 프로그램을 작성하시오.

입력 : 1 2 3 4 5
출력 : 5 4 3 2 1

입력 : 2 4 6 7 8
출력 : 8 7 6 4 2
*/
const reverseNumberList = (numberList) =>
  numberList.split(' ').reverse().join(' ');
reverseNumberList('1 2 3 4 5'); // 5 4 3 2 1
reverseNumberList('2 4 6 7 8'); // 8 7 6 4 2

/* 문제34: sort 구현하기
민주는 체육부장으로 체육시간이 되면 반 친구들이 제대로 키 순서대로 모였는지를 확인해야 한다.
그런데 요즘 민주는 그것이 너무 번거롭게 느껴져 한 번에 확인하고 싶어한다. 
민주를 위해 키가 주어지면 순서대로 제대로 섰는지 확인하는 프로그램을 작성해보자.
(키는 공백으로 구분하여 입력됩니다.)
입력 : 176 156 155 165 166 169
출력 : NO
입력 : 155 156 165 166 169 176
출력 : YES
*/
const isSort = (heightList) => {
  unSorted = heightList.split(' ').join(' ');
  sorted = heightList
    .split(' ')
    .sort((a, b) => a - b)
    .join(' ');
  return unSorted === sorted ? 'YES' : 'NO';
};
isSort('176 156 155 165 166 169'); // NO
isSort('155 156 165 166 169 176'); // YES

/* 문제35: Factory 함수 사용하기
2제곱, 3제곱, 4제곱을 할 수 있는 Factory 함수를 만들려고 합니다. 
<pass>에 코드를 작성하여 two함수를 완성하세요.

*/
function one(n) {
  function two(base) {
    return Math.pow(base, n);
    //pass
  }
  return two;
}

const a = one(2);
const b = one(3);
const c = one(4);

console.log(a(10)); // 100
console.log(b(10)); // 1000
console.log(c(10)); // 10000
