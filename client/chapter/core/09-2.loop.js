/* ---------------------------------------------------------------------- */
/* Do While Loop                                                          */
/* ---------------------------------------------------------------------- */

// let i = 0;
// do {
//   console.log(i);
//   i++;
// } while (i < 5);

// const frontEndDev = ['HTML', 'CSS', 'SVG', 'JavaScript', 'jQuery', 'React', 'Redux'];

// do ~ while 문 (역순환)
// - prompt 창을 띄워 사용자로 하여금 순환 횟수를 요청
// - 사용자로부터 요청된 횟수 만큼 역방향으로 순환 출력
// - 사용자로부터 요청된 횟수가 0보다 작을 경우,
//   '최초 실행된 메시지입니다. 이 메시지는 조건이 거짓이어도 볼 수 있습니다.' 출력
// - 순환 중단
// let count = +prompt('몇번 순환 할까요?', '');
// do {
//   console.log(count);
//   count--;
// } while (count >= 0);

//dom 동작

let first = document.querySelector('.first'); // html에 있는 first 를 변수로 할당한것이다.
let second = document.querySelector('.second'); // html에 있는 first 를 변수로 할당한것이다.

//Element.nextSibling -> 다음 요소를 선택하라고 명령하지만, 정말 바로 옆에 있는 공백을 반환한다 .?
// console.log(first.nextSibling.nextSibling);

// function next(node) {
//   do {
//     node = node.nextSibling;
//   } while (node.nodeType !== document.ELEMENT_NODE);
//   return node;
// }
// next(first);

function prev(node) {
  do {
    node = node.previousSibling;
  } while (node.nodeType !== document.ELEMENT_NODE);
  return node;
}
console.log(prev(second));

// do ~ while 문 (순환)
// - 위 do ~ while 문을 순방향으로 순환되도록 설정
