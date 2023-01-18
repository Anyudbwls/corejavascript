import { getNode } from '../dom/getNode.js';
import { isNumber, isObject } from './typeOf.js';

const first = getNode('.first');
const second = getNode('.second');

function delay(callback, timeout = 1000) {
  setTimeout(callback, timeout);
}

// first.style.top = '-100px';
// first.style.transform = 'rotate(360deg)';
// first.style.top = '0px';

// delay(() => {
//   first.style.top = '-100px';
//   delay(() => {
//     delay(() => {
//       first.style.top = '0px';
//     });
//     first.style.transform = 'rotate(360deg)';
//   });
// });

// delayP()
//   .then(() => {
//     first.style.top = '-100px';
//     return delayP();
//   })
//   .then(() => {
//     first.style.transform = 'rotate(360deg)';
//     first.style.left = '100px';
//     return delayP();
//   })
//   .then(() => {
//     first.style.top = '0px';
//     second.style.left = '0px';
//   });

const defaultOptions = {
  shouldReject: false,
  timeout: 1000,
  data: '성공했습니다',
  errorMessage: '알수없는 오류가 발생했습니다.',
};

export function delayP(options = {}) {
  let config = { ...defaultOptions }; //스프레드 연산자 참조한게 아니라 통으로 복사한거다

  if (isNumber(options)) {
    config.timeout = options;
  }

  //객체 합성 mixin
  //새로운 값을 던졌을때 대체가 되어야 하기 때문에
  //기존의 값이랑 옵션이랑 전달한 값을 합성한다.
  if (isObject(options)) {
    config = { ...config, ...options };
  }

  const { shouldReject, data, errorMessage, timeout } = config;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      !shouldReject ? resolve(data) : reject(errorMessage);
    }, timeout);
  });
}

//성공값을 받을라면 꼭 .then을 써야 한다
// delayP(3000).then((res) => {
//   console.log(res);
// });

// delayP()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
