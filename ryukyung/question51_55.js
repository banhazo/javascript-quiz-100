/* 문제51: merge sort를 만들어보자
병합정렬(merge sort)은 대표적인 정렬 알고리즘 중 하나로 다음과 같이 동작합니다.
1. 리스트의 길이가 0 또는 1이면 이미 정렬된 것으로 본다. 그렇지 않은 경우에는
2. 정렬되지 않은 리스트를 절반으로 잘라 비슷한 크기의 두 부분 리스트로 나눈다.
3. 각 부분 리스트를 재귀적으로 합병 정렬을 이용해 정렬한다.
4. 두 부분 리스트를 다시 하나의 정렬된 리스트로 합병한다.
출처 : 위키피디아
다음 코드의 빈칸을 채워 병합정렬을 완성해 봅시다. */

function merge(left, right) {
  let result = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) result.push(left.shift());
    else result.push(right.shift());
  }

  while (left.length) result.push(left.shift());
  while (right.length) result.push(right.shift());

  return result;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

/* 문제52: quick sort
다음 빈 칸을 채워 퀵 정렬을 완성해주세요. */
function quickSort(arr) {
  if (arr.length <= 1) return arr;

  const pivot = arr[0];
  const left = [];
  const right = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) left.push(arr[i]);
    else right.push(arr[i]);
  }
  return quickSort(left).concat(pivot, quickSort(right));
}

/* 문제53: 괄호 문자열

괄호 문자열이란 괄호 기호인 '{', '}', '[', ']', '(', ')' 와 같은 것을 말한다. 
그중 괄호의 모양이 바르게 구성된 문자열을 바른 문자열, 그렇지 않은 문자열을 바르지 않은 문자열이라 부르도록 하자. 
(())와 같은 문자열은 바른 문자열이지만 ()()) 와 같은 문자열은 바르지 않은 문자열이다.
(해당 문제에서는 소괄호만 판별하지만,  중괄호와 대괄호까지 판별해 보세요.)
입력으로 주어진 괄호 문자열이 바른 문자열인지 바르지 않은 문자열인지 "YES"와 "NO"로 구분된 문자열을 출력해보자. */
const isBracketString = (bracketList) => {
  const temp = [];

  const openList = ['(', '{', '['];
  const closeList = [')', '}', ']'];

  for (let i = 0; i < bracketList.length; i++) {
    const currentBracket = bracketList[i];

    if (openList.includes(currentBracket)) temp.push(currentBracket);
    if (closeList.includes(currentBracket)) {
      if (!temp.length) return 'NO';
      const opened = temp.pop();
      if (openList.indexOf(opened) !== closeList.indexOf(currentBracket))
        return 'NO';
    }
  }
  return temp.length === 0 ? 'YES' : 'NO';
};
isBracketString('({[()]})'); // YES
isBracketString('(){}[]'); // YES
isBracketString('(()'); // NO

/* 문제54: 연속되는 수

은주는 놀이공원 아르바이트를 하고 있다. 
은주가 일하는 놀이공원에서는 현재 놀이공원 곳곳에 숨겨진 숫자 스탬프를 모아 오면 선물을 주는 이벤트를 하고 있다.
숫자 스탬프는 매일 그 수와 스탬프에 적힌 숫자가 바뀌지만 그 숫자는 항상 연속된다. 
그런데 요즘 다른 날에 찍은 스탬프를 가지고 와 선물을 달라고 하는 손님이 늘었다.
스탬프에 적힌 숫자가 공백으로 구분되어 주어지면 이 숫자가 연속수인지 아닌지 "YES"와 "NO"로 판별하는 프로그램을 작성하시오
입력: 1 2 3 4 5| 1 4 2 6 3

출력: YES | NO
*/
const checkStamp = (stampList) => {
  const sorted = stampList.split(' ').map(Number).sort().join('');
  stampList = stampList.split(' ').map(Number);
  return stampList.join('') === sorted ? 'YES' : 'NO';
};
checkStamp('1 2 3 4 5'); // YES
checkStamp('1 4 2 6 3'); // NO

/* 문제55 : 하노이의 탑

하노이의 탑은 프랑스 수학자 에두아르드가 처음으로 발표한 게임입니다. 
하노이의 탑은 A, B, C 3개의 기둥과 기둥에 꽂을 수 있는 N 개의 원판으로 이루어져 있습니다. 이 게임에서는 다음의 규칙을 만족해야 합니다.

1. 처음에 모든 원판은 A 기둥에 꽂혀 있다.
2. 모든 원판의 지름은 다르다.
3. 이 원반은 세 개의 기둥 중 하나에 반드시 꽂혀야 한다.
4. 작은 원반 위에 큰 원반을 놓을 수 없다.
5. 한 번에 하나의 원판(가장 위에 있는 원판)만을 옮길 수 있다.

이 규칙을 만족하며 A 기둥에 있는 원반 N 개를 모두 C 원반으로 옮기고 싶습니다.
모든 원반을 옮기기 위해 실행되어야 할 최소 원반 이동 횟수를 계산하는 프로그램을 완성해 주세요. */
const route = [];

function hanoi(num, start, end, temp) {
  //원판이 한 개일 때에는 바로 옮기면 됩니다.
  if (num === 1) {
    route.push([start, end]);
    return NaN;
  }

  //원반이 n-1개를 경유기둥으로 옮기고
  hanoi(num - 1, start, temp, end);
  //가장 큰 원반은 목표기둥으로
  route.push([start, end]);
  //경유기둥과 시작기둥을 바꿉니다.
  hanoi(num - 1, temp, end, start);
}

hanoi(3, 'A', 'B', 'C');
console.log(route);
console.log(route.length);

/* hanoi(원판개수, 시작기둥, 목표기둥, 경유기둥)
[1] 원판 1개라면 시작 기둥에서 목표기둥으로 이동
[1-1] 1의 경우가 아니면, 가장 큰 원판을 제외하고 경유 기둥으로, 가장 큰 원반은 목표 기둥으로
[2] 경우 기둥과 시작 기둥 바꾸기
[3] 재귀 호출
 */
