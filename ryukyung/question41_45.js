/* 문제41 : 소수판별
숫자가 주어지면 소수인지 아닌지 판별하는 프로그램을 작성해주세요.
소수이면 YES로, 소수가 아니면 NO로 출력해주세요.
(소수 : 1과 자기 자신만으로 나누어떨어지는 1보다 큰 양의 정수)
 */

/* for문
[2 ~ num] 직접 나눠서 계산
[2 ~ num/2] num의 약수는 num의 절반을 넘을 수 없으니까
 */
const isPrimeFor = (number) => {
  if (number === 1) return false;
  if (number === 2) return true;
  // for (let i = 2; i < number; i++) if (number % i === 0) return false;
  for (let i = 2; i < number / 2; i++) if (number % i === 0) return false;

  return true;
};
// [제곱근] num의 제곱근보다 작은 수에서 안 나눠진다면 큰 수에도 안 나눠진다.
const isPrimeSqrt = (number) => {
  if (number === 1) return false;
  if (number === 2) return true;
  for (let i = 2; i <= Math.floor(Math.sqrt(number)); i++) {
    if (number % i === 0) return false;
  }
  return true;
};

// YES/NO 리턴
const checkPrime = (isPrimeFunc, number) => {
  return isPrimeFunc(number) ? 'YES' : 'NO';
};

checkPrime(isPrimeFor, 5); // YES
checkPrime(isPrimeFor, 100); // NO
checkPrime(isPrimeSqrt, 5); // YES
checkPrime(isPrimeSqrt, 100); // NO

/* 문제42 : 2020년
2020년 1월 1일은 수요일입니다. 2020년 a월 b일은 무슨 요일일까요?
두 수 a, b를 입력받아 2020년 a월 b일이 무슨 요일인지 리턴하는 함수 solution을 완성하세요.
요일의 이름은 일요일부터 토요일까지 각각 SUN, MON, TUE, WED, THU, FRI, SAT 입니다.
예를 들어 a = 5, b = 24라면 5월 24일은 일요일이므로 문자열 "SUN"를 반환하세요.
제한 조건
2020년은 윤년입니다.
2020년 a월 b일은 실제로 있는 날입니다. 
(13월 26일이나 2월 45일 같은 날짜는 주어지지 않습니다.) */
const dayOfWeek = (month, date) => {
  const weekList = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const day = new Date(`2020-${Number(month)}-${Number(date)}`);
  return weekList[day.getDay()];
};
dayOfWeek(1, 1); // WED

/* 문제43 : 10진수를 2진수로

우리가 흔히 사용하는 숫자 1, 8, 19, 28893 등등...은 10진수 체계입니다.
이를 컴퓨터가 알아 들을 수 있는 2진수로 바꾸려고 합니다. 어떻게 해야할까요?

사용자에게 숫자를 입력받고 이를 2진수를 바꾸고 그 값을 출력해주세요. */

const toDecimal = (number) => {
  return number.toString(2);
};
toDecimal(10); // 1010

const binaryToDecimal = (decimal) => {
  let binary = '';
  while (decimal) {
    binary = (decimal % 2) + binary;
    decimal = parseInt(decimal / 2, 10);
  }
  return binary;
};
binaryToDecimal(10); // 1010

/* 문제44 : 각 자리수의 합
사용자가 입력한 양의 정수의 각 자리수의 합을 구하는 프로그램을 만들어주세요
예를들어
18234 = 1+8+2+3+4 이고 정답은 18 입니다.
3849 = 3+8+4+9 이고 정답은 24입니다.
입력 : 18234 | 3849
출력 : 18    | 24 */

const sumEachDigit = (number) => {
  return number
    .split('')
    .map(Number)
    .reduce((a, b) => a + b, 0);
};
sumEachDigit('18234'); // 18
sumEachDigit('3849'); // 24

/* 문제45 : getTime()함수 사용하기
Date객체의 메소드 중 하나인 getTime()은 1970년 1월 1일 0시 0분 0초 이후로부터 지금까지 흐른 시간을 천분의 1초 단위(ms)로 반환합니다.
이를 이용하여 현재 연도(2019)를 출력해보세요. */
const thisYear = () => {
  let year = new Date().getTime();
  // 1000ms * 60s * 60m * 24h * 365d
  year = 1970 + Math.floor(year / (3600 * 24 * 365 * 1000));
  return year;
};

thisYear();
