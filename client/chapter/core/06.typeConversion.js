/* ---------------------------------------------------------------------- */
/* Type Conversion                                                        */
/* ---------------------------------------------------------------------- */

/* 데이터 → 문자 ----------------------------------------------------------- */

// number
const YEAR = 2022;
console.log(String(YEAR));
// undefined->undefined
//null->null
let days = null;
console.log(String(days));

// boolean
let isKind = true;
console.log(String(isKind));
/* 데이터 → 숫자 ----------------------------------------------------------- */

// undeinfed
console.log(Number(undefined));

// null
let money = null;
console.log(Number(money));

// boolean true: 1 , false:0
//문자열은 *, /, +cutie 를 주면 숫자형으로 바뀐다
//암시적으로 형변환이 일어나는것이다.

let cutie = true;
console.log(cutie * 1);
console.log(cutie / 1);

let love = false;
console.log(+love);

// string 숫자형 문자
let num = '123';

// numeric string
let width = '320px';
let height = '23.43434px';
console.log(parseInt(width, 10)); //정수만 쏙 빼줌
console.log(parseFloat(height, 10));
/* 데이터 → 불리언 ---------------------------------------------------------- */

// null, undefined, 0, NaN, ''
// 위에 나열한 것 이외의 것들
// !!false -> false , !!true->true

console.log(Boolean(123));
console.log(!!null);
