// 11
let result_11 = 0;

for (let i = 1; i <= 100; i++) {
  result_11 += i;
}

console.log(result_11);

// 12
const Wizard = class {
  constructor(health, mana, armor) {
    this.health = health;
    this.mana = mana;
    this.armor = armor;
  }

  attack = () => {
    return console.log('파이어볼');
  };
};

const x = new Wizard(545, 210, 10);

console.log(x.health, x.mana, x.armor);
x.attack();

// 13
const star = [
  '수성',
  '금성',
  '지구',
  '화성',
  '목성',
  '토성',
  '천왕성',
  '해왕성',
];

const input_13 = 1;

const inputStar = (num) => {
  return star[num - 1];
};

console.log(inputStar(input_13));

// 14
const input_14 = 11;

if (input_14 % 3 === 0) {
  console.log('짝');
} else {
  console.log(input_14);
}

// 15
const input_15 = '김다정';

console.log(`안녕하세요. 저는 ${input_15}입니다.`);
