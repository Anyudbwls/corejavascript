import {
  clearContents,
  getInputValue,
  getNode,
  getRandom,
  insertLast,
  typeError,
  isNumericString,
} from './lib/index.js';

import { jujeobData } from './data/data.js';

//name에 111, 유진12를 했을때의 조건
//숫자는 지금 string 처럼 받아와서 문제이다.
//isNaN -> 숫자인지 아닌지 체크

const submit = getNode('#submit');
const resultArea = getNode('.result');
console.log(submit);
console.log(getRandom(5));

function clickSubmitHandler(e) {
  e.preventDefault();

  let name = getInputValue('#nameField');
  let list = jujeobData(name);
  let pick = list[getRandom(list.length - 1)];

  if (!name) {
    //error 를 쓰면 그후에도 아예 멈춰 버리기 때문에 alert를 사용
    alert('TELL ME YOUR NAME !!!!!!!!!');
    return;
  }

  if (isNumericString(name)) {
    alert('제대로된 이름을 입력해주세요');
    return;
  }

  clearContents(resultArea);
  insertLast(resultArea, pick);
}

submit.addEventListener('click', clickSubmitHandler);
