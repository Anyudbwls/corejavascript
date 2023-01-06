/* ---------------------------------------------------------------------- */
/* Array's Methods                                                        */
/* ---------------------------------------------------------------------- */

// Array.isArray
const arr = [10, 100, 1000, 10000];
console.log(typeof arr);

function isArray(data) {
  return {}.toString.call(data).slice(8, -1).toLowercase() === 'array';
}
function isNull(data) {
  return {}.toString.call(data).slice(8, -1).toLowercase() === 'null';
}
console.log(Array.isArray(arr));

/* 요소 순환 -------------------------------------------------------------- */

// forEach
const user = {};
arr.forEach((item, index) => {
  this[index] = item;
}, user);

//arrow 함수 이기 때뮨에 this 가 없다

const span = document.querySelectorAll('span');

span.forEach((item) => {
  item.addEventListener('click', (e) => {
    console.log((e.target.style.background = 'orange'));
  });
});

/* 원형 파괴 -------------------------------------------------------------- */

// push
// pop
// unshift
// shift
// reverse
// arr.reverse();

// splice
//시작 제거 [추가]
arr.splice(1, 0, 23, 5);
// 인덱스 1번쨰 0개 추가 하고 23추가 5추가

// sort
//문자순서대로 하기 정렬하기 때문에 콜백함수를 넣어 우리가 원하는 순서대로 정렬한다
// 반환값 < 0 : a가 b보다 앞에 있어야한다.
// 반환값 = 0 : a와 b의 순서를 바꾸지 않는다
// 반환값 > 0 : b가 a보자 앞에 있어야 한다

arr.sort((a, b) => {
  return a - b;
});
console.log(arr);
/* 새로운 배열 반환 --------------------------------------------------------- */

// concat
// slice()
// map
let todo = ['밥먹기', '묭실가기', '코딩스터디'];

let template = todo.map((todoList) => {
  return `<li>${todoList}<li>`;
});
//list 를 담고 있는 배열 완성

template.forEach((item) => {
  document.body.insertAdjacentHTML('beforeend', item);
});

console.log(template);
let newArray = arr.map((item) => item * 2);
console.log(newArray);
/* 요소 포함 여부 확인 ------------------------------------------------------ */

// indexOf
// lastIndexOf
// includes
console.log(arr.includes(99));
/* 요소 찾기 -------------------------------------------------------------- */
const users = [
  { id: 1, name: '로운' },
  { id: 2, name: '유진' },
  { id: 3, name: '리치' },
];
// find
const find = users.find((item, index) => {
  return item.id < 5;
});
// findIndex

/* 요소 걸러내기 ----------------------------------------------------------- */

// filter

/* 요소별 리듀서(reducer) 실행 ---------------------------------------------- */
const friends = [
  {
    name: '윤보라',
    age: 28,
    job: '작꼬져',
  },
  {
    name: '이로운',
    age: 23,
    job: '배고픈 개발자',
  },
  {
    name: '오승택',
    age: 21,
    job: '물음표살인마',
  },
];
// reduce
//친구들의 나이의 총합
let age = friends.reduce((acc, cur) => {
  return acc + cur.age;
}, 0);

let template2 = todo.reduce((acc, cur, index) => {
  return acc + `<li> 할일 ${index + 1}: ${cur} </li>`;
});
console.log(age);
console.log(template2);
// reduceRight

/* string ←→ array 변환 ------------------------------------------------- */
let str = '성찬 보경 일범 세민 형진 주현';

// split
let nameArr = str.split(' ');
console.log(nameArr);
// join
console.log(nameArr.join(' / '));
