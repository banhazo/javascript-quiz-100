/* # 문제56 : 객체의 함수 응용
다음의 객체가 주어졌을 때 한국의 면적과 가장 비슷한 국가와 그 차이를 출력하세요. 
*/
nationWidth = {
  korea: 220877,
  Rusia: 17098242,
  China: 9596961,
  France: 543965,
  Japan: 377915,
  England: 242900,
};

const similarCountry = (countryList) => {
  const koreaArea = countryList.korea;
  const absList = {};
  for (let country in countryList) {
    if (country === 'korea') continue;
    const difference = Math.abs(countryList[country] - koreaArea);
    absList[country] = difference;
  }
  const sorted = Object.values(absList).sort((a, b) => a - b);
  const country = Object.keys(absList).find(
    (key) => absList[key] === sorted[0]
  );
  return `${country} ${sorted[0]}`;
};
similarCountry(nationWidth); // England 22023

/* # 문제57 : 1의 개수
**0부터 1000까지 1의 개수를 세는 프로그램**을 만들려고 합니다. 
예를 들어 0부터 20까지 1의 개수를 세어본다면 1, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19에 각각 1이 들어가므로 12개의 1이 있게 됩니다.
11은 1이 2번 들어간 셈이죠.
그렇다면 0부터 1000까지의 수에서 1은 몇 번이나 들어갔을까요? 출력해 주세요. */

const countOne = (start, end) => {
  const numberList = [...Array(end - start).keys()].map((i) => i + 1);
  return numberList
    .join('')
    .split('')
    .filter((i) => i == '1').length;
};
countOne(1, 1000); // 301

/* # 문제58 : 콤마 찍기
원범이는 편의점 아르바이트가 끝난 후 정산을 하고자 합니다.
정산을 빨리하고 집에 가고 싶은 원범이는 프로그램을 만들려고 합니다.
**숫자를 입력받고 천 단위로 콤마(,)를 찍어주세요.**
예를 들어, **123456789**를 입력받았으면 **123,456,789**를 출력해야 합니다. */

const insertComma = (number) => {
  if (number.length <= 3) return number;
  const result = [];
  for (let i = 0; i < number.length; i += 3) {
    result.push(number.slice(i, i + 3));
  }
  return result.join(',');
};
insertComma('123456789'); // 123,456,789
console.log(insertComma('123')); // 123

/* # 문제59 : 빈칸채우기
총 문자열의 길이는 50으로 제한하고 사용자가 문자열을 입력하면 그 문자열을 가운데 정렬을 해주고, 나머지 빈 부분에는 '='을 채워 넣어주세요. */
const fillBlank = (string) => {
  const stringLength = string.length;
  let both = '='.repeat(parseInt((50 - stringLength) / 2));
  return `${both}${string}${both}`;
};
fillBlank('hi'); // ========================hi========================
fillBlank('hello'); // ======================hello======================

/* # 문제60 : 번호 매기기

새 학기가 되어 **이름을 가나다 순서대로 배정하고 번호를 매기려고 합니다**.
데이터에 입력된 이름을 아래와 같이 출력해 주세요. */

students = [
  '강은지',
  '김유정',
  '박현서',
  '최성훈',
  '홍유진',
  '박지호',
  '권윤일',
  '김채리',
  '한지호',
  '김진이',
  '김민호',
  '강채연',
];
const sortStudent = (studentList) => {
  const result = studentList.sort();
  for (let student in studentList) {
    console.log(`번호: ${student}, 이름: ${studentList[student]}`);
  }
};
sortStudent(students);
