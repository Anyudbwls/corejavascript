/* ---------------------------------------------------------------------- */
/* Condition                                                              */
/* ---------------------------------------------------------------------- */

let number = prompt('숫자를 입력해주세요', 0);

let result = number > 0 ? '1' : number < 0 ? '-1 ' : '암것두 아님';
console.log(result);
// 그 영화 봤니?
//     ↓
// Yes | No
//     | 영화 볼거니?
//           ↓
//       Yes | No

// 영화 봤니?
let didWatchMovie = 'yes';

// 영화 볼거니?
let goingToWatchMovie = 'no';

// if 문(statement)
if (didWatchMovie === 'yes') {
  console.log('yes');
} else if (goingToWatchMovie == 'yes') {
  console.log('gogo');
} else {
  console.log('Please answer yes or no');
}

let answer = didWatchMovie == 'yes' ? console.log('잼이떠 그거') : goingToWatchMovie == 'yes' ? 'yes ^^' : 'no';
console.log(answer);
// else 절(caluse)

// else if 복수 조건 처리

// 조건부 연산자

// 멀티 조건부 연산자 식
