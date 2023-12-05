/* 문제21: set은 어떻게 만드나요?
다음 중 set을 만드는 방법으로 올바른 것을 모두 고르시오.

1)  var x = {1, 2, 3, 5, 6, 7};
2)  var x = {};
3)  var x = new Set('javascript');
4)  var x = new Set(range(5));
5)  var x = new Set();
*/
// 답: 3, 5

/* 문제22:  배수인지 확인하기
다음 중 변수 i가 6의 배수인지 확인하는 방법으로 올바른 것은?
1)  i / 6 == 0
2)  i % 6 == 0
3)  i & 6 == 0
4)  i | 6 == 0
5)  i // 6 == 0
*/
// 답: 2

/* 문제23: OX문제
`console.log(10/3)`의 출력 결과는 3이다.
*/
// 답: X

/* 문제24: 대문자로 바꿔주세요!

민지는 국제 포럼에서 아르바이트를 하게 되었습니다. 
민지는 각 국에서 온 참가자들의 명단을 엑셀로 정리하고 있는데 참가자들 이름이 어떤 이는 전부 소문자, 어떤 이는 전부 대문자로 써져 있는 등 형식이 제각각이었습니다.
민지를 위해 이름이 입력되면 전부 대문자로 출력되는 프로그램을 만들어주세요.
입력 : mary
출력 : MARY
*/
// const inputName = prompt('이름을 입력해주세요.', 'mary');
const upperString = (name) => name.toUpperCase();
console.log(upperString('mary'));

/* 문제25: 원의 넓이를 구하세요
원의 넓이는 `반지름의 길이 x 반지름의 길이 x 3.14`로 구할 수 있습니다.
함수를 사용하여 원의 넓이를 구하는 코드를 작성해봅시다.
입력으로 반지름의 길이 정수 n이 주어지면 원의 넓이를 반환하는 함수를 만들어 주세요.
*/
// const inputRadius = prompt('반지름의 길이를 입력해주세요.', 3);
const calcCircleArea = (radius) => radius * radius * 3.14;
console.log(calcCircleArea(3));
