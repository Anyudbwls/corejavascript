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
let calcAllMoney = (a, b, c, d) => {
  return a + b + c + d;
};

// 화살표 함수와 this

/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// pow(numeric: number, powerCount: number): number;
let pow;

// repeat(text: string, repeatCount: number): string;
let repeat;
