/* ---------------------------------------------------------------------- */
/* String Type                                                            */
/* ---------------------------------------------------------------------- */

let message = 'Less is more.';

// length 프로퍼티
let stringTotalLength;

// 특정 인덱스의 글자 추출
let extractCharacter = message[0];
console.log('extractCharacter: ', extractCharacter);

// 문자열 중간 글자를 바꾸는 건 불가능
// (기존 문자 변경 대신, 새로운 문자를 생성해야 함)
let immutableChangeCharacter;

// 부분 문자열 추출
let slice = message.slice(8, -1);
console.log('slice : ', slice);

let subString = message.substring(1, 5);
console.log('subString : ', subString);

// 문자열 포함 여부 확인
//없으면 음수값을 반환한다.
let indexOf = message.indexOf('p');
console.log('indexOf :', indexOf);

let lastIndexOf = message.lastIndexOf('r');

let includes = message.includes('Less');
console.log('includes : ', includes);

let startsWith = message.startsWith('L');
console.log('startsWith : ', startsWith);

let endsWith = message.endsWith('.');
console.log('endsWith : ', endsWith);
// 공백 잘라내기
let trimLeft = message.trimLeft();
console.log('trimLeft : ', trimLeft);
let trimRight = message.trimRight();
console.log('trimRight : ', trimRight);

let trim = message.trim(/\s*/g);
console.log('trim :', trim);
// 텍스트 반복
let repeat = message.repeat(3);
console.log('repeat : ', repeat);

// 대소문자 변환
let toLowerCase = message.toLowerCase();
console.log('toLowerCase: ', toLowerCase);
let toUpperCase = message.toUpperCase();
console.log('toUpperCase: ', toUpperCase);

// 텍스트 이름 변환 유틸리티 함수
function toCamelCase(string) {
  return string.replace(/(\s|-|_)+./g, ($1) =>
    $1
      .trim()
      .replace(/(-|_)+/, '')
      .toUpperCase()
  );
}

function toPascalCase(string) {
  let name = toCamelCase(string);
  return name[0].toUpperCase() + name.slice(1);
}

//텍스트 잘라내기 (또는 생략 ) 유틸리티 함수
function truncate(text, limit = 100, ellipsis = '...') {
  return `${text.slice(0, limit).trim()}${ellipsis}`;
}
