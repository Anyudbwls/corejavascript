import {
  copy,
  clearContents,
  getInputValue,
  getNode,
  getRandom,
  insertLast,
  typeError,
  isNumericString,
  showAlert,
  addClass,
  removeClass,
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
    showAlert('.alert-error', 'TELL ME YOUR NAME !!!!!!!!!');

    //GSAP 알아서 지워주고 채워주고
    //dom 대상위의 트렌스폼을 건드는것
    gsap.fromTo(resultArea, 0.01, { x: -5 }, { x: 5, clearProps: 'x', repeat: 20 });

    // addClass(resultArea, 'shake');
    // setTimeout(() => {
    //   removeClass(resultArea, 'shake');
    // }, 1000);
    return;
  }

  if (isNumericString(name)) {
    showAlert('.alert-error', '제대로된 이름을 입력해주세요');
    return;
  }

  clearContents(resultArea);
  insertLast(resultArea, pick);
}

function clickCopyHandler() {
  let text = resultArea.textContent;

  // navigator.clipboard.writeText(text);
  copy(text).then(() => {
    showAlert('.alert-success', '클립보드에 복사가 완료됐습니다.', 2000);
  });
  //약속구문.then(function 실행)
  //다음에 해야 할 일
}
submit.addEventListener('click', clickSubmitHandler);
resultArea.addEventListener('click', clickCopyHandler);
