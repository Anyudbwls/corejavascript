/* ---------------------------------------------------------------------- */
/* Functions → Expression                                                 */
/* ---------------------------------------------------------------------- */

function calcTotal(moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
}

let resultX = calcTotal(10000, 8900, 1360, 2100);
let resultY = calcTotal(21500, 3200, 9800, 4700);
let resultZ = calcTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);

// 함수 선언 → 일반 함수 (표현)식
let calculateTotal = function (moneyA, moneyB, moneyC, moneyD) {
  //함수 안에서만 접근 가능한 인수들의 집합 객체로서 배열과 우사하여 우사 배열 타입으로 불리는 변수 :arguments
  // arguments객체를 사용해 함수의 매개변수 없이 아이템의 총합을 구할 수 있다.
  // 유사배열은 배열이 아니다. 고로 배열의 능력을 사용하려면 진짜 배열로 만들어야한다.
  // 배열의 능력 : forEach, reduce ..

  let total = 0;
  let arr = Array.from(arguments); //static method

  // return moneyA + moneyB + moneyC + moneyD;

  /*
  arr.forEach(function (item, index) {
    forEach 안에 들어있는데 콜백함수
    무조건 앞에가 아이템, 뒤에가 인덱스
    
    total += item;
  });
*/

  return arr.reduce(function (acc, item) {
    //현재값, 다음값
    return acc + item;
  });

  // return total;
};
console.log(calculateTotal(100, 200, 399, 400, 5909));
// 익명(이름이 없는) 함수 (표현)식
let anonymousFunctionExpression = function () {};

// 유명(이름을 가진) 함수 (표현)식
let namedFunctionExpression = function hello() {};

// 콜백 함수 (표현)식
let callbackFunctionExpression = function (url, resolve, reject) {
  // if (typeof url === 'string' && url.includes('http') && url.includes('www'))
  if (typeof url === 'string' && url.match(/http.+www/)) {
    resolve(url);
  } else {
    reject();
  }
};

callbackFunctionExpression(
  'https:// www.naver.com',
  function (url) {
    console.log(`${url} 해당 페이지로 이동합니다.`);
  },
  function () {
    throw new Error('url 입력 정보가 올바르지 않습니다.');
  }
);
// 함수 선언문 vs. 함수 (표현)식
function aa() {}

const bb = function () {
  console.log('호이스팅이 안돼요');
};
// 즉시 실행 함수 (표현)식
// Immediately Invoked Function Expression

let IIFE;

//var 함수 스코프 전역을 오염시킨다, 그래서 옛날엔 함수를 만들어 넣었다. 그래서 나온게 즉시 실행함수이다.
//모듈 프로그래밍이 없던 시절엔 쓰이지만 지금은 별로 안쓰임
// let, const 블록 스코프를 가진다

const MASTER = (function ($) {
  const KEY = 'alcls@#@!$%';

  // 내가 내보내고 싶은 항목들만 내보낼거야
  // 모듈로서의 활용
  // 정보의 은닉화 incapsulation: 외부의 접근을 차단
  // 일부 정보만 노출
  return {
    getKey: function () {
      return KEY;
    },
  };
})(getNode);
function getNode(node) {
  return document.querySelector(node);
}
