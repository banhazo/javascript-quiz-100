/* ---------------------------- 문제46 : 각 자리수의 합 2 --------------------------- */

/*
1부터 20까지의(20을 포함) 모든 숫자를 일렬로 놓고 모든 자릿수의 총 합을 구하세요. 
예를 들어 10부터 15까지의 모든 숫자를 일렬로 놓으면 101112131415이고 
각 자리의 숫자를 더하면 21입니다. (1+0+1+1+1+2+1+3+1+4+1+5 = 21)
*/

// - 외전 1 -
const num = prompt("1~20까지 입력해라").split("");
let result = 0;

for (let i = 0; i < num.length; i++) {
  let n = parseInt(num[i]);
  result += n;
}

console.log(result);

// - 외전 2 -
const a = prompt("1~19까지 부터");
const b = prompt("1~20까지 까지");

function plus(a, b) {
  let result2 = [];
  let c = 0;
  for (let i = a; i <= b; i++) {
    result2.push(i);
  }
  result2 = result2.join("");
  for (let i = 0; i < result2.length; i++) {
    c += parseInt(result2[i]);
  }
  console.log(c);
}
plus(a, b);

/* --------------------------- 문제47 : set 자료형의 응용 --------------------------- */

/*
바울랩에서는 3월 29일 제주대학교에서 '제주 빅데이터 사회혁신 해커톤' 행사를 주최하게 되었습니다. 
이에 구글 설문지를 배포하였으나 제주대학생들이 중복해서 n개씩 설문지를 제출하였습니다. 
중복된 데이터들을 삭제하여 실제 접수 명단이 몇 명인지 알고 싶습니다.
아래 주어진 데이터들로부터 중복을 제거하여 실제 접수 인원을 출력해 주세요.
*/

const people = {
  이호준: "01050442903",
  이호상: "01051442904",
  이준호: "01050342904",
  이호준: "01050442903",
  이준: "01050412904",
  이호: "01050443904",
  이호준: "01050442903",
};

// - 정답 -

const list = new Set(Object.keys(people)).size;

/* -------------------------- 문제48 : 대소문자 바꿔서 출력하기 -------------------------- */

// 문자열이 주어지면 대문자와 소문자를 바꿔서 출력하는 프로그램을 작성하세요.

/*
입출력

입력 : AAABBBcccddd
출력 : aaabbbCCCDDD
*/

// - 정답 -

const q = prompt("아무영어 입력해라잉");
let hap = "";

for (let i = 0; i < q.length; i++) {
  if (q[i] === q[i].toUpperCase()) {
    hap += q[i].toLowerCase();
  } else {
    hap += q[i].toUpperCase();
  }
}

/* ----------------------------- 문제49 : 최댓값 구하기 ----------------------------- */

// 순서가 없는 10개의 숫자가 공백으로 구분되어 주어진다. 주어진 숫자들 중 최댓값을 반환하라.

/*
입출력

입력 : 10 9 8 7 6 5 4 3 2 1
출력 : 10
*/

// - 정답 -

const number = prompt("아무 숫자 입력").split(" ");

number.sort((a, b) => b - a);

console.log(number[0]);

/* ---------------------------- 문제50 : 버블정렬 구현하기 ---------------------------- */

/*
버블정렬은 두 인접한 원소를 검사하여 정렬하는 방법을 말합니다. 시간 복잡도는 느리지만 코드가 단순하기 때문에 자주 사용됩니다.
https://img.scoop.it/omRChIeVtQY1Nodjul8eODl72eJkfbmt4t8yenImKBVvK0kTmF0xjctABnaLJIm9
아래 코드의 빈 칸을 채워 버블 정렬을 완성해 봅시다.
*/

/*function bubble(arr) {
  let result = arr.slice(); 

  for (let i = 0; i < result.length - 1; i++) {
    for (/~빈칸을 채워주세요.~/) {
      if (result[j] > result[j + 1]) {
         //빈칸을 채워주세요.
      }
    }
  }
  return result;
}

const items = prompt('입력해주세요.').split(' ').map((n) => {
  return parseInt(n, 10);
});

console.log(bubble(items));*/
