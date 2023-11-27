// 문제 1
// 다음 배열에서 400, 500를 삭제하는 code를 입력하세요.

let nums = [100, 200, 300, 400, 500];

// 정답:
nums.splice(3, 2);

console.log(nums);

// 문제 2
// <pass>부분에 배열 내장함수를 이용하여 코드를 입력하고 다음과 같이 출력되게 하세요.

let arr = [200, 100, 300];

//pass 정답:
arr.splice(2, 0, 10000);

console.log(arr);

// 출력
// [200, 100, 10000, 300]

// 문제 3
let arr1 = [100, 200, 300];
console.log(typeof arr);
// 1)  undefined
// 2)  string
// 3)  number
// 4)  object

// 정답: 4번, 배열은 객체이다.

//문제 4
// 다음 변수 a를 typeof(a)로 넣었을 때 출력될 값과의 연결이 알맞지 않은 것은?
// 1)  입력 : a =1,   출력 : number

// 2)  입력 : a = 2.22,   출력 : boolean

// 3)  입력 : a = 'p',   출력 : string

// 4)  입력 : a = [1, 2, 3],   출력 : object

// 정답: 2번 int

// 문제 5
let a = 10;
let b = 2;

for (let i = 1; i < 5; i += 2) {
  a += i;
}

console.log(a + b);

// i = 1
a = 10 + 1;
i = i + 2;

// i = 3
a = 11 + 3;

// i = 5, i < 5 false, 반복문 실행 x
a = 14;
b = 2;
console.log(a + b); // 16

// 문제 6

// 다음은 자바스크립트 문법 중에서 False로 취급하는 것들 입니다.
// 앗, False로 취급하지 않는 것이 하나 있네요! True를 찾아주세요.

// 1)  NaN
// 2)  1
// 3)  ""
// 4)  0
// 5)  undefined

// 정답 : 2번

// 문제 7

// 다음 중 변수명으로 사용할 수 없는 것 2개를 고르시오.

// 1)  age
// 2)  Age
// 3)  let
// 4)  _age
// 5)  1age

// 정답 : 4, 5

// 문제 8

// 자바스크립트 객체를 다음과 같이 만들었다.
// 출력값을 입력하시오. (출력값은 공백을 넣지 않습니다. )

let d = {
  height: 180,
  weight: 78,
  weight: 84,
  temperature: 36,
  eyesight: 1,
};

console.log(d["weight"]);

// 정답 : 84

// 문제 9

// 다음 소스 코드를 완성하여 날짜와 시간을 출력하시오.

let year = "2019";
let month = "04";
let day = "26";
let hour = "11";
let minute = "34";
let second = "27";

let result = console.log(result); //빈칸을 채워주세요

// 출력
// 2019/04/26 11:34:27
