/* ---------------------------------------------------------------------- */
/* While Loop                                                             */
/* ---------------------------------------------------------------------- */

// let i = 0;

// while (i < 10) {
//   console.log(`안녕하세요 제 넘버는 ${i++}`);
// }

const frontEndDev = ['HTML', 'CSS', 'SVG', 'JavaScript', 'jQuery', 'React', 'Redux', 'hello'];

/* 프론트엔드 개발 집합 항목 출력 ---------------------------------------------- */

// console.log(frontEndDev[0]);
// console.log(frontEndDev[1]);
// console.log(frontEndDev[2]);
// console.log(frontEndDev[3]);
// console.log(frontEndDev[4]);
// console.log(frontEndDev[5]);
// let i = 0;
// while (i < frontEndDev.length) {
//   console.log(frontEndDev[i]);
//   ++i;
// }

// let i = frontEndDev.length;
// while (i >= 0) {
//   console.log(i, frontEndDev[i]);
//   i--;
// }

// while (frontEndDev.length) {
//   console.log(frontEndDev.pop());
// }

// let copyArray = [...frontEndDev];

let copyArray = frontEndDev.slice();
while (copyArray.length) {
  console.log(copyArray.pop());
}

//performance.now() 를 사용 하여 성능 진단을 할 수 있다.

/* 프론트엔드 개발 집합을 순환해서 각 아이템을 Console 패널에 출력 -------------------- */

// while 문 (순환 : 순방향)

// while 문 (역순환 : 역방향)

// 성능 진단 : 순환 vs. 역순환
