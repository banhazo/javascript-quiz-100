/* # 문제46 : 각 자리수의 합 2
1부터 20까지의(20을 포함) 모든 숫자를 일렬로 놓고 모든 자릿수의 총 합을 구하세요. 
예를 들어 10부터 15까지의 모든 숫자를 일렬로 놓으면 101112131415이고 
각 자리의 숫자를 더하면 21입니다. (1+0+1+1+1+2+1+3+1+4+1+5 = 21) */
const sumDigitAll = (start, end) => {
  const numberList = Array(end - start + 1)
    .fill()
    .map((_, i) => start + i);
  const digitList = numberList.join('').split('').map(Number);
  return digitList.reduce((a, b) => a + b, 0);
};

const result = sumDigitAll(10, 15); // 21

/* # 문제47 : set 자료형의 응용

바울랩에서는 3월 29일 제주대학교에서 '제주 빅데이터 사회혁신 해커톤' 행사를 주최하게 되었습니다. 
이에 구글 설문지를 배포하였으나 제주대학생들이 중복해서 n개씩 설문지를 제출하였습니다. 
**중복된 데이터들을 삭제하여 실제 접수 명단이 몇 명인지 알고 싶습니다.**
아래 주어진 데이터들로부터 중복을 제거하여 **실제 접수 인원을 출력**해 주세요. 

*/
const people = {
  이호준: '01050442903',
  이호상: '01051442904',
  이준호: '01050342904',
  이호준: '01050442903',
  이준: '01050412904',
  이호: '01050443904',
  이호준: '01050442903',
};
const deleteDuplicate = (duplicateList) => {
  let newList = new Set();
  for (let obj in duplicateList) newList.add(duplicateList[obj]);
  return newList.size;
};
deleteDuplicate(people); // 5

/* # 문제48 : 대소문자 바꿔서 출력하기
문자열이 주어지면 대문자와 소문자를 바꿔서 출력하는 프로그램을 작성하세요. 
입력 : AAABBBcccddd
출력 : aaabbbCCCDDD*/

const changeCase = (string) => {
  const stringList = string.split('');
  let result = '';
  for (let s of stringList) {
    result += s === s.toUpperCase() ? s.toLowerCase() : s.toUpperCase();
  }
  return result;
};
changeCase('AAABBBcccddd'); // aaabbbCCCDDD

/* # 문제49 : 최댓값 구하기
순서가 없는 10개의 숫자가 공백으로 구분되어 주어진다.
주어진 숫자들 중 최댓값을 반환하라.
입력 : 10 9 8 7 6 5 4 3 2 1
출력 : 10*/

// [sort] 내림차순 정렬 후 0번지 리턴
const maxNumberSort = (stringNumber) => {
  const numberList = stringNumber.split(' ').sort((a, b) => b - a);
  return Math.max(numberList[0]);
};

// [Math.max] 최댓값 리턴
const maxNumberMath = (stringNumber) => {
  const numberList = stringNumber.split(' ').map(Number);
  return Math.max(...numberList);
};

maxNumberSort('10 9 8 7 6 5 4 3 2 1'); // 10
maxNumberMath('10 9 8 7 6 5 4 3 2 1'); // 10

/* # 문제50 : 버블정렬 구현하기
버블정렬은 두 인접한 원소를 검사하여 정렬하는 방법을 말합니다. 시간 복잡도는 느리지만 코드가 단순하기 때문에 자주 사용됩니다.
아래 코드의 빈 칸을 채워 버블 정렬을 완성해 봅시다. */
// 방법1
function bubble(arr) {
  let result = arr.slice();
  for (let i = 0; i < result.length - 1; i++) {
    for (let j = 0; j < result.length - 1; j++) {
      if (result[j] > result[j + 1]) {
        let temp = result[j];
        result[j] = result[j + 1];
        result[j + 1] = temp;
      }
    }
  }
  return result;
}
const items = '4 2 3 8 5'.split(' ').map((n) => parseInt(n, 10));

console.log(bubble(items));

// 방법2
const bubbleSort = (array) => {
  const result = [...array];
  const swap = (i, j) => {
    [result[i], result[j]] = [result[j], result[i]];
  };
  const len = result.length;
  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      if (result[j] > result[j + 1]) swap(j, j + 1);
    }
  }
  return result;
};

console.log(bubbleSort(items));
