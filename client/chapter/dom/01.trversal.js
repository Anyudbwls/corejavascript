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
// let [first, second] = document.querySelectorAll('span');
// console.log(second);

//function에 리턴 꼭 써주자..

/* 문서 대상 확인 */
// - matches
//            선택자 안에 class || id 를 가지고 있는 대상이 있어 ?
console.log(getNode('.first').matches('.first'));

// - contains
//          선택자의 자식들중에 해당 element가 있어?
console.log(getNode('h1').contains(getNode('.first')));

let first = getNode('.first');

let clicked = false;
document.addEventListener('click', () => {
  if (first.classList.contains('first') && !clicked) {
    first.classList.add('is-active');
  } else {
    first.classList.remove('is-active');
  }
  clicked = !clicked;
});
