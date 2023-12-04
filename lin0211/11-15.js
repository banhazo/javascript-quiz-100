/*---------------11-----------------*/
// 문제11 : for를 이용한 기본 활용
//1부터 100까지 모두 더하는 Code를 <pass> 부분에 완성하세요. for를 사용해야 합니다.
let s = 0;
for (let i = 1; i <= 100; i++) {
  s += i;
}
console.log(s); //5050

/*---------------12-----------------*/
// # 문제12 : 게임 캐릭터 클래스 만들기
// 다음 소스코드에서 클래스를 작성하여 게임 캐릭터의 능력치와 '파이어볼'이 출력되게 만드시오.**주어진 소스 코드를 수정해선 안됩니다.**

class Wizard {
  constructor(health, mana, armor) {
    this.health = health;
    this.mana = mana;
    this.armor = armor;
  }
  attack() {
    console.log("파이어볼");
  }
}

const x = new Wizard(545, 210, 10);
console.log(x.health, x.mana, x.armor);
x.attack();
/*---------------13-----------------*/
// # 문제13 : 몇 번째 행성인가요?
// 우리 태양계를 이루고 있는 행성은 **수성, 금성, 지구, 화성, 목성, 토성, 천왕성, 해왕성**으로 총 8개 입니다. 저희는 우리 태양계의 n번째 행성이 무엇인지 알고 싶습니다.
// 입력으로 행성의 순서를 나타내는 숫자 n이 입력됩니다.
// 출력으로 그 순서에 해당하는 행성의 이름을 출력해 주세요.
// 예를들어 1이 입력되면, 첫번째 행성인 수성이 출력됩니다.
function getPlanetNum(num) {
  const planets = [
    "수성",
    "금성",
    "지구",
    "화성",
    "목성",
    "토성",
    "천왕성",
    "해왕성",
  ];
  return planets[num - 1];
}

const inputPlanet = prompt("number of planet>");
console.log(getPlanetNum(inputPlanet));

/*---------------14-----------------*/
// 문제14 : 3의 배수 인가요?
// 영희는 친구와 게임을 하고 있습니다. 서로 돌아가며 랜덤으로 숫자를 하나 말하고 그게 3의 배수이면 박수를 치고 아니면 그 숫자를 그대로 말하는 게임입니다.
// 입력으로 랜덤한 숫자 n이 주어집니다.
// 만약 그 수가 3의 배수라면 '짝'이라는 글자를, 3의 배수가 아니라면 n을 그대로 출력해 주세요.

function checkMultiples3(num) {
  return num % 3 ? num : "짝";
}

console.log("1 - ", checkMultiples3(1)); //1
console.log("3 - ", checkMultiples3(3)); //짝
console.log("30 - ", checkMultiples3(30)); //짝

/*---------------15-----------------*/
// # 문제15 : 자기소개
// 신학기가 시작되고, 아이들이 돌아가면서 자기소개를 하기로 했습니다.
// 만약 입력으로 `김다정`이라는 이름이 주어지면 "안녕하세요. 저는 김다정입니다."라고 출력하게 해주세요.

function makeGreeting(name) {
  console.log(`안녕하세요. 저는 ${name}입니다.`);
}

makeGreeting("김다정");
