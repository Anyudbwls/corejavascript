/* ---------------------------------------------------------------------- */
/* HTML Attributes vs. DOM Properties                                     */
/* ---------------------------------------------------------------------- */

/* HTML 속성 ------------------------------------------------------------- */

// 브라우저는 HTML 태그를 해석해 DOM 객체를 만들 때 HTML 표준 속성을 인식하고,
// 이 표준 속성을 사용해 DOM 프로퍼티를 생성합니다. 표준 속성이 아닌 경우,
// 이에 매핑하는 DOM 프로퍼티가 생성되지 않습니다.
// HTML 속성 값은 항상 문자열입니다.

/* DOM 프로퍼티 ----------------------------------------------------------- */

// DOM 노드(DOM node)는 JavaScript 객체입니다.
// DOM 프로퍼티와 메서드는 일반 JavaScript 객체처럼 행동하므로 아래와 같은 특징을 보입니다.
// - 어떤 값이든 가질 수 있습니다.
// - 대·소문자를 구분하므로 `elem.nodeType`이 아닌, `elem.NoDeTyPe`는 동작하지 않습니다.
// - DOM 프로퍼티는 HTML 속성과 달리 값이 항상 문자열이 아닙니다.

/* DOM 프로퍼티 검토 ------------------------------------------------------- */

let first = getNode('.first');

// - elementNode.hasAttribute(name) – 속성 존재 여부 확인
// 있냐고 물어보는거라 t/f 둘중에 하나가 나옴
console.log(first.hasAttribute('class'));
// - elementNode.getAttribute(name) – 속성값을 가져옴
console.log(first.getAttribute('class')); // 가져오는 것이라서 값을 가져온다
console.log(first.getAttribute('class') === 'first'); // hasAttribute 와 똑같아짐

// - elementNode.setAttribute(name, value) – 속성값을 변경함
first.setAttribute('id', 'box');
//first.setAttribute('class', 'is-active');

//first.id = 'box'; 속성과 태그가 일대일 매핑이 잘되어서 이렇게 쓸수 있지만 대개는 위에 처럼 console.error('써야한다',써야한다)
//비표준 속성도 추가할수있다.

// - elementNode.removeAttribute(name) – 속성값을 d지움
// - elementNode.attributes – 열거 가능한(iterable) 속성 집합을 반환함
console.log(first.attributes);

//for of 를 쓸수있냐 없냐?
// 순환 할려면 symbol.iterator 기능이 있어야 순환 가능하다. 그래서 for of 를 돌릴수있다.
// 단순히 인덱스를 돌린다면 for
// 객체와 배열을 순환한다면 for of 문이 더 적합하다.

// for (let i = 0; i < first.attributes.length; i++) {
//   console.log(first.attributes[i]);
// }

// for (let value of first.attributes) {
//   console.log(value);
// }

/* 비표준 속성, 프로퍼티 설정 ------------------------------------------------- */

// data-* 속성은 커스텀 데이터를 안전하고 유효하게 전달해줍니다.
// data-* 속성을 사용하면 읽기 쉽고, 수정도 손쉽습니다.

// - elementNode.dataset

first.dataset.play = 'playing'; //set

console.log(first.dataset.play); //get
