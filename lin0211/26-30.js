/* 
------------------------26--------------------------
# 문제26 : 행성 문제2

우리 태양계를 이루는 행성은 수성, 금성, 지구, 화성, 목성, 토성, 천왕성, 해왕성이 있습니다.
이 행성들의 영어 이름은 Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune입니다.

**행성의 한글 이름을 입력하면 영어 이름을 반환하는 프로그램**을 만들어 주세요.
*/
const planets = {
  수성: "Mercury",
  금성: "Venus",
  지구: "Earth",
  화성: "Mars",
  목성: "Jupiter",
  토성: "Saturn",
  천왕성: "Uranus",
  해왕성: "Neptune",
};

function translatePlanet(planet) {
  return planets[planet];
}

translatePlanet("천왕성"); //'Uranus'

/* 
------------------------27--------------------------
# 문제27 : 객체 만들기

첫번째 입력에서는 학생의 이름이 공백으로 구분되어 입력되고, 두번째에는 그 학생의 수학 점수가 공백으로 구분되어 주어집니다.

두 개를 합쳐 **학생의 이름이 key**이고 **value가 수학 점수**인 객체를 출력해주세요.
입력
Yujin Hyewon
70 100

출력
{'Yujin': 70, 'Hyewon': 100}
*/

const names = "영희 철수";
const grades = "100 80";

const nameArr = names.split(" ");
const gradeArr = grades.split(" ");

const result = {};
const nameGradeObj = nameArr.map((a, i) => (result[a] = +gradeArr[i]));

console.log(result);

/* 
------------------------28--------------------------
# 문제28 : 2-gram

**2-gram**이란 문자열에서 2개의 연속된 요소를 출력하는 방법입니다. 

예를 들어 'Javascript'를 2-gram으로 반복해 본다면 다음과 같은 결과가 나옵니다.

입력
Javascript

출력
J a
a v
v a
a s
s c
c r
r i
i p
p t
*/

const input = prompt("단어입력>>>", "Javascript");
twoGram(input);

function twoGram(str) {
  const inputArr = [...str];
  inputArr.forEach((a, i) => {
    if (i) console.log(`${inputArr[i - 1]} ${a}`);
  });
}

/* 
------------------------29--------------------------
# 문제29 : 대문자만 지나가세요

진구는 영어 학원 아르바이트를 하고 있습니다. 반 아이들은 알파벳을 공부하는 학생들인데 오늘은 대문자 쓰기 시험을 봤습니다.

**알파벳 하나만을 입력하고 그 알파벳이 대문자이면 YES를 아니면 NO를 출력하는 프로그램**을 만들어 주세요.
*/

upperFilter("A"); //YES
upperFilter("c"); //NO

function upperFilter(alphabet) {
  console.log(alphabet === alphabet.toUpperCase() ? "YES" : "NO");
}

/* 
------------------------30--------------------------
# 문제30 : 문자열 속 문자 찾기

문자 pineapple에는 apple이라는 문자가 숨어 있습니다. 원범이는 이렇듯 문자열 속에 숨어있는 문자를 찾아보려고 합니다.

첫번째 입력에서는 문자열이 입력되고, 두번째에는 찾을 문자가 입력되어야 합니다.
**그 문자가 시작하는 index를 반환하는 프로그램**을 만들어 주세요

입력
pineapple is yummy
apple

출력
4
*/

const inputStr = prompt("문자열입력>>>", "pineapple is yummy");
const inputCharacter = prompt("문자입력>>>", "apple");
findIndex(inputStr, inputCharacter); //4

function findIndex(inputStr, inputCharacter) {
  console.log(inputStr.indexOf(inputCharacter));
}
