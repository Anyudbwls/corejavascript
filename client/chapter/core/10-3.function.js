/* ---------------------------------------------------------------------- */
/* Functions → Arrow                                                      */
/* ---------------------------------------------------------------------- */

//rest parameter
const calculateTotal = (...args) => {
  // arguments 화살표 함수는 없다. 에러남.
  //파라메타로 전개연산자를 이용하여 아규먼츠를 보내줄수있다.
  let total = 0;
  args.forEach(function (item, index) {
    total += item;
  });
  console.log(total);

  return;
};

let resultX = calculateTotal(10000, 8900, 1360, 2100);
// let resultY = calculateTotal(21500, 3200, 9800, 4700);
// let resultZ = calculateTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);

// 함수 선언 → 화살표 함수 (표현)식
let calcAllMoney = (a, b, c, d) => a + b + c + d;

// 화살표 함수와 this
//일반함수는 나를 호출한 대상으로 한다.
function normalFunction() {
  console.log('일반함수 :', this);
}

const arrowFunction = () => {
  console.log('화살표함수 : ', this);
};
//객체의 메서드로 함수를 실행 할 경우는 일반 함수로 실행해야  this 가 객체를 찾습니다.
// 메서드 안에서의 함수는 this를 찾기 위해서는 arrowFunction 이 오히려 좋다
const user = {
  name: 'tiger',
  age: 32,
  address: '서울시 중랑구 면목동',
  grades: [80, 90, 100],
  totalGrades: function () {
    // let total = 0;
    // this.grades.forEach((item) => {
    //   total += item;
    // });
    // return total;
    function foo() {
      console.log('bar :', this);
    }
    const bar = () => {};
  },
};

user.totalGrades();

/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// pow(numeric: number, powerCount: number): number;
let pow = (numeric, powerCount) => {
  let result = 1;
  for (let i = 0; i < powerCount; i++) {
    result *= numeric;
  }
  return result;
};

let powExpression = (numeric, powerCount) =>
  Array(powerCount)
    .fill(null)
    .reduce((acc) => acc * numeric, 1);
// 매개변수가 하나일때는 줄인다

let answerPow = powExpression(2, 53);

// repeat(text: string, repeatCount: number): string;
let repeat = (text, repeatCount) => {
  //validation
  if (!repeatCount) {
    throw new Error('숫자 좀 넣어라');
  }
  let result = '';
  for (let i = 0; i < repeatCount; i++) {
    result += text;
  }
  return result;
};

let repeatExpression = (text, repeatCount) => {
  Array(repeatCount)
    .fill(null)
    .reduce((acc) => acc + text, '');
};
console.log(repeatExpression('hello', 3));
