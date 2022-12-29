/* ---------------------------------------------------------------------- */
/* Logical Operators                                                      */
/* ---------------------------------------------------------------------- */
let age = 20;
if (age >= 14 && age <= 90) {
  console.log(`당신의 나이는 ${age}이군요`);
}

let a = 10;
let b = '';
let value = Boolean(b);

// 논리곱(그리고) 연산자
let AandB = a && b;

// 논리합(또는) 연산자
let AorB = a || b;

// 부정 연산자
let reverseValue = !value;

// 조건 처리

// 첫번째 Falsy를 찾는 연산 (&&)
let whichFalsy = true && ' ' && [] && { thisIsFalsy: false };

// 첫번째 Truthy를 찾는 연산 (||)
let whichTruthy = false || '' || [2, 3].length || { thisIsTruthy: true };

let userName = prompt("who's there?", '');

console.log(userName);

if (userName.toUpperCase('admin') === userName.toUpperCase('ADMIN')) {
  let pw = prompt('please pw?', '');

  if (pw === 'themaster') {
    alert('Welcome');
  } else {
    alert('Canceled');
  }
} else if (userName === '' || userName === null) {
  console.log('취소되었습니다.');
} else {
  console.log('인증되지 않은 사용자');
}
