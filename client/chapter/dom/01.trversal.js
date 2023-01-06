/* ---------------------------------------------------------------------- */
/* DOM traversal                                                          */
/* ---------------------------------------------------------------------- */

/* 모든 노드에서 사용 */
// - parentNode
// - childNodes
// - firstChild
// - lastChild
// - previousSibling
// - nextSibling

/* 요소 노드에서만 사용 가능 */
//! 주로 사용함
// - parentElement
// - children
// - firstElementChild
// - lastElementChild
// - previousElementSibling
// - nextElementSibling

/* 문서 대상 찾기 */
// - getElementById
// - getElementsByTagName
// - getElementsByClassName
// - querySelector
// - querySelectorAll
// - closest

//배열 구조분해 할당
let [first, second] = document.querySelectorAll('span');
console.log(second);

//function에 리턴 꼭 써주자..
function getNode(node) {
  if (typeof node !== 'string') {
    throw new Error('getNode함수의 인자는 문자 타입 이여야 합니다');
  }
  return document.querySelector(node);
}

function getNodeAll(node) {
  if (typeof node !== 'string') {
    throw new Error('getNode함수의 인자는 문자 타입 이여야 합니다');
  }
  return document.querySelectorAll(node);
}

console.log(getNode('.first'));
console.log(getNodeAll('.first'));

/* 문서 대상 확인 */
// - matches
// - contains
