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
