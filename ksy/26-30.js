// 26
let obj_26 = {
  수성: 'Mercury',
  금성: 'Venus',
  지구: 'Earth',
  화성: 'Mars',
  목성: 'Jupiter',
  토성: 'Saturn',
  천황성: 'Uranus',
  해왕성: 'Neptune',
};

const func_26 = (starName) => {
  return obj_26[starName];
};

console.log(func_26('금성'));

// 27
const obj = {};
const inputName_27 = '김어쩌구 박저쩌구';
const inputScore_27 = '30 100';

const func_27 = (name, score) => {
  let std = name.split(' ');
  let stdScore = score.split(' ');

  std.forEach((item, index) => {
    obj[item] = stdScore[index];
  });
};

func_27(inputName_27, inputScore_27);

console.log(obj);

// 28
const input_28 = 'Javascript';

const func_28 = (str) => {
  for (let i = 0; i < str.length - 1; i++) {
    console.log(`${str[i]} ${str[i + 1]}`);
  }
};

func_28(input_28);

// 29
const input_29 = 'A';

const func_29 = (char) => {
  if (char === char.toUpperCase()) {
    console.log('YES');
  } else {
    console.log('NO');
  }
};

func_29('a');

// 30
const input_text_30 = 'pineapple';
const input_word_30 = 'apple';

const func_30 = (text, word) => {
  if (text.includes(word)) {
    return text.indexOf(word);
  } else {
    return '없음.';
  }
};

console.log(func_30(input_text_30, input_word_30));
