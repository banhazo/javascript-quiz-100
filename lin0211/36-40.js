/* 
------------------------36--------------------------
# 문제36 : 구구단 출력하기

1~9까지의 숫자 중 하나를 입력하면 그 단의 구구단 결과를 한 줄에 출력하는 프로그램을 작성하세요.

입출력
입력 : 2
출력 : 2 4 6 8 10 12 14 16 18
*/

function timesTable(num) {
  return Array(9)
    .fill(1)
    .map((a, i) => num * (i + 1))
    .join(" ");
}

console.log(timesTable(2)); // 2 4 6 8 10 12 14 16 18
console.log(timesTable(5)); // 5 10 15 20 25 30 35 40 45

/* 
------------------------37--------------------------
# 문제37 : 반장 선거

새 학기를 맞아 호준이네 반은 반장 선거를 하기로 했습니다.  그런데 표를 하나씩 개표하는 과정이 너무 번거롭게 느껴진 당신은 **학생들이 뽑은 후보들을 입력받으면 뽑힌 학생의 이름과 받은 표 수를 출력하는 프로그램**을 작성하기로 하였습니다.

입력
원범 원범 혜원 혜원 혜원 혜원 유진 유진

출력
혜원(이)가 총 4표로 반장이 되었습니다.
*/

function getCandidateVotes(str) {
  const arr = str.split(" ");
  const candidate = new Set(arr);
  const candidateArr = [...candidate]
    .map((a) => [a, arr.filter((b) => b === a).length])
    .sort((a, b) => b[1] - a[1]);
  return `${candidateArr[0][0]}(이)가 총 ${candidateArr[0][1]}표로 반장이 되었습니다.`;
}

console.log(getCandidateVotes("원범 원범 혜원 혜원 혜원 혜원 유진 유진")); //혜원(이)가 총 4표로 반장이 되었습니다.

/* 
------------------------38--------------------------
# 문제38 : 호준이의 아르바이트

호준이는 아르바이트로 영어 학원에서 단어 시험지를 채점하는 일을 하고 있다. 호준이가 일하는 학원은 매번 1위부터 3위까지의 학생에게 상으로 사탕을 준다. 그런데 오늘은 마침 사탕이 다 떨어져서 호준이가 채점을 하고 점수를 보내면, 당신이 아이들의 숫자만큼 사탕을 사러 가기로 했다.

1위 ~ 3위 학생은 여러명일 수 있고 1~3위 학생 중 중복되는 학생까지 포함하여 사탕을 사기로 한다.
**학생들의 점수를 공백으로 구분하여 입력을 받고 사탕을 받을 학생의 수를 출력하세요.**

입출력
입력 : 97 86 75 66 55 97 85 97 97 95
출력 : 6
*/

const getNumsOfCandies = (str) => {
  const scoreArr = str.split(" ").sort((a, b) => b - a);
  const removeDuplicateArr = new Set(scoreArr);
  const thirdScore = [...removeDuplicateArr][2];
  return scoreArr.lastIndexOf(thirdScore) + 1;
};

console.log(getNumsOfCandies("97 86 75 66 55 97 85 97 97 95")); //6

/* 
------------------------39--------------------------
# 문제39 : 오타 수정하기

혜원이는 평소 영타가 빠르고 정확한 것을 친구들에게 자랑하고 다녔습니다. 반 친구들이 혜원이의 타자 속도가 빠르다는 것을 모두 알게 되자 혜원이는 모두의 앞에서 타자 실력을 보여주게 됩니다. 

그런데 막상 보여주려니 긴장이 되서 문장의 모든 e를 q로 잘못 친 것을 발견했습니다. 
혜원이는 프로그램을 돌려 재빠르게 모든 q를 e로 바꾸는 프로그램을 작성하려고 합니다.

**문장이 입력되면 모든 q를 e로 바꾸는 프로그램을 작성해 주세요.**

입출력

입력 : querty
출력 : euerty

입력 : hqllo my namq is hyqwon
출력 : hello my name is hyewon
*/

const getTypoCorrection = (str) => {
  return str.replaceAll("q", "e");
};

console.log(getTypoCorrection("querty")); //euerty
console.log(getTypoCorrection("hqllo my namq is hyqwon")); //hello my name is hyewon

/* 
------------------------40--------------------------
# 문제40 : 놀이동산에 가자

테마파크에 온 원범이와 친구들은 놀이기구를 타려고 합니다. 모든 놀이기구는 한번에 타는 인원수에는 제한이 없지만 제한 무게를 넘으면 무조건 다음 기구를 타야 합니다. 

**원범이와 친구들이 총 몇 명 탈 수 있는지 알 수 있는 프로그램을 작성해 주세요.**

첫번째 입력으로 제한 무게가 주어지고 두번째 입력으로는 함께한 친구들의 수 n이 주어집니다. 
그 다음 차례대로 탑승할 친구들의 몸무게가 주어집니다. 몸무게는 무작위로 주어집니다.

입력
50
5
20
20
20
20
20

출력
2
*/

const NumsOfPeople = () => {
  const limit = Number(prompt("제한 무게"));
  const nums = Number(prompt("인원"));
  const weights = [];
  let totalWeight = 0;
  for (let i = 0; i < nums; i++) {
    let weight = prompt(`${i + 1}번 몸무게`);
    weights.push(weight);
  }

  for (let i = 1; i <= nums; i++) {
    if (totalWeight >= limit) {
      return i - 2;
    } else if (totalWeight < limit && i == nums) {
      return nums;
    } else {
      totalWeight += +weights[i - 1];
    }
  }
};

console.log(NumsOfPeople()); //2
