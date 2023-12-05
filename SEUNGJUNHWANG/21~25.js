// 문제 21
// 다음 중 set을 만드는 방법으로 올바른 것을 모두 고르시오.

// 1)  var x = {1, 2, 3, 5, 6, 7};
// 2)  var x = {};
// 3)  var x = new Set('javascript');
// 4)  var x = new Set(range(5));
// 5)  var x = new Set();

// 정답: 3 , 5번

// set의 생성자 함수의 인수에는 iterable한 대상이 온다.

// 문제 22
// 다음 중 변수 i가 6의 배수인지 확인하는 방법으로 올바른 것은?

// 1)  i / 6 == 0
// 2)  i % 6 == 0
// 3)  i & 6 == 0
// 4)  i | 6 == 0
// 5)  i // 6 == 0

// 정답: 2번

// 문제 23
// console.log(10/3)의 출력 결과는 3이다.

// 정답: X 3.33333... → Math.floor()를 쓰자

// 문제 24
// 민지는 국제 포럼에서 아르바이트를 하게 되었습니다.
// 민지는 각 국에서 온 참가자들의 명단을 엑셀로 정리하고 있는데 참가자들 이름이 어떤 이는 전부 소문자, 어떤 이는 전부 대문자로 써져 있는 등 형식이 제각각이었습니다.
// 민지를 위해 이름이 입력되면 전부 대문자로 출력되는 프로그램을 만들어주세요.

// 일반함수
function Upper() {
  const inputName = prompt("이름을 입력해주세요");
  return inputName.toUpperCase();
}

// 화살표 함수
let nameUpper = () => prompt("이름을 입력해주세요").toUpperCase();

// 문제 25
// 원의 넓이는 반지름의 길이 x 반지름의 길이 x 3.14로 구할 수 있습니다.
// 함수를 사용하여 원의 넓이를 구하는 코드를 작성해봅시다.

// 입력으로 반지름의 길이 정수 n이 주어지면 원의 넓이를 반환하는 함수를 만들어 주세요.

function circleArea() {
  let radius = +prompt("반지름을 입력해주세요");
  return radius * radius * 3.14;
}

// 답안
// function circle(n) {
//   const result = n * n * 3.14;

//   return result;
// }

// const r = prompt("원의 반지름을 입력하세요.");

// console.log(circle(r));
