/* 
------------------------16--------------------------
문제16 : 로꾸거               
문장이 입력되면 거꾸로 출력하는 프로그램을 만들어 봅시다.
입력 : 거꾸로
출력 : 로꾸거
*/

const str = prompt("sentence");
const arr = [...str].reverse().join("");
console.log(arr);

/* 
------------------------17--------------------------
문제17 : 놀이기구 키 제한
유주는 놀이공원 아르바이트 중입니다. 그런데 놀이기구마다 키 제한이 있습니다.
유주가 담당하는 놀이기구는 키가 150cm 이상만 탈 수 있습니다.
입력으로 키가 주어지면
키가 150이 넘으면 **YES**를 틀리면 **NO**를 출력하는 프로그램을 작성하세요.
*/

function isAvailable(height) {
  if (height >= 150) {
    console.log("**YES**");
  } else {
    console.log("**NO**");
  }
}

isAvailable(120); //**NO**
isAvailable(170); //**YES**

/* 
------------------------18--------------------------
# 문제18 : 평균 점수
영하네 반은 국어, 수학, 영어 시험을 보았습니다. 
영하는 친구들의 평균 점수를 구해주기로 했습니다. 
공백으로 구분하여 세 과목의 점수가 주어지면 
**전체 평균 점수**를 구하는 프로그램을 작성하세요. 
**단, 소숫점 자리는 모두 버립니다.**
입력 : 20 30 40  출력 : 30
*/

function getAvg() {
  let korScore = prompt("korean score");
  let mathScore = prompt("Math score");
  let egScore = prompt("English score");
  const avg = ~~((+korScore + +mathScore + +egScore) / 3);
  console.log(avg);
}

getAvg();

/* 
------------------------19--------------------------
# 문제19 : 제곱을 구하자
공백으로 구분하여 두 숫자 a와 b가 주어지면, 
**a의 b승**을 구하는 프로그램을 작성하세요.
*/
let [first, second] = prompt("두 숫자를 입력>>>", "2 4").split(" ");
getSquare(first, second); //16

function getSquare(a, b) {
  return a ** b;
}

/* 
------------------------20--------------------------
# 문제20 : 몫과 나머지
공백으로 구분하여 두 숫자가 주어집니다.
두번째 숫자로 첫번째 숫자를 나누었을 때 
그 몫과 나머지를 공백으로 구분하여 출력하세요.
입력 : 10 2  출력 : 5 0
*/

const input = "10 2";
const inputArr = input.split(" ");
const portion = ~~(inputArr[0] / inputArr[1]);
const remainder = inputArr[0] % inputArr[1];
console.log(`${portion} ${remainder}`);
