/* ------------------------------- 문제16 : 로꾸거 ------------------------------- */
// 문장이 입력되면 거꾸로 출력하는 프로그램을 만들어 봅시다.

// 입출력

// 입력 : 거꾸로
// 출력 : 로꾸거

let str = "거꾸로";
let result = str.split("");
result = result.reverse();
result = result.join("");

// - 정답 -

/* ---------------------------- 문제17 : 놀이기구 키 제한 ---------------------------- */
//유주는 놀이공원 아르바이트 중입니다. 그런데 놀이기구마다 키 제한이 있습니다.
//유주가 담당하는 놀이기구는 키가 150cm 이상만 탈 수 있습니다.
//입력으로 키가 주어지면 키가 150이 넘으면 YES를 틀리면 NO를 출력하는 프로그램을 작성하세요.

// - 정답 -

let height = prompt("키가 몇이냐 꼬마야?");

if (height < 150) {
  console.log("NO");
} else {
  console.log("YES");
}

/* ------------------------------ 문제18 : 평균 점수 ------------------------------ */
//영하네 반은 국어, 수학, 영어 시험을 보았습니다. 영하는 친구들의 평균 점수를 구해주기로 했습니다.
//공백으로 구분하여 세 과목의 점수가 주어지면 전체 평균 점수를 구하는 프로그램을 작성하세요.
//단, 소숫점 자리는 모두 버립니다.

// 입출력

// 입력 : 20 30 40
// 출력 : 30

// 나만의 방법 1 (외전)
// let korea = prompt("국어점수 말해라!");
// let math = prompt("수학점수 말해라!");
// let english = prompt("영어점수 말해라!");

// let avg = (+korea + +math + +english) / 3;

// console.log(avg);

// 이 문제의 정석 방법 2
// let score = prompt("국어, 수학, 영어 점수 입력해봐라", "30 30 30").split(" ");

// let korea = score[0];
// let math = score[1];
// let english = score[2];

// let avg = Math.floor(+korea + +math + +english) / 3;

// 이 문제의 방법 3
let score = prompt("국어, 수학, 영어 점수 입력해봐라", "20 30 40").split(" ");
let total = 0;
for (let i = 0; i < score.length; i++) {
  total += +score[i];
}
let avg = total / score.length;
alert(avg);
// console.log(total);
// let score = +prompt("국어, 수학, 영어 점수 입력해봐라", "20 30 40").split(" "); - 이거 NaN뜹니다. 잎에 + 붙히면

/* ----------------------------- 문제19 : 제곱을 구하자 ----------------------------- */
// 공백으로 구분하여 두 숫자 a와 b가 주어지면, a의 b승을 구하는 프로그램을 작성하세요.

// - 정답 -

// 제 1의 방법 (정석)
let number = prompt("a, b 숫자 정해봐~").split(" ");
let a = number[0];
let b = number[1];

let power = a ** b;
console.log(power);

/* -------------------------------------------------------------------------- */

// 제 2의 방법 (외전)
// function power(a, b) {
//   return a ** b;
// }
// power(3, 5); = 함수 a랑 b 값
// console.log(power(3, 5));
// let result = power(3,5); = result로 했을때 결과.

/* -------------------------------------------------------------------------- */

// 그냥 해본거. 3번
// let number = prompt("a, b 숫자 정해봐~").split(" ");
// let a = +number[0];
// let b = +number[1];

// function power(a, b) {
//   return a ** b;
// }

// console.log(power(a, b));

/* ------------------------------ 문제20 : 몫과 나머지 ----------------------------- */
// 공백으로 구분하여 두 숫자가 주어집니다.
// 두번째 숫자로 첫번째 숫자를 나누었을 때 그 몫과 나머지를 공백으로 구분하여 출력하세요.

// 입출력

// 입력 : 10 2
// 출력 : 5 0

// - 정답 -

let num = prompt("숫자 두개 띄어서 적아봐라~").split(" ");
let first = num[0];
let second = num[1];

let quotient = parseInt(first / second);
let div = first % second;

console.log(quotient, div);
