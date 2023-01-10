// {/* <value값이 통일되게 급여 단위를 "~만원"으로 맞추는 함수 작성하기> */}

const payDay = {
  짱구: 300,
  철수: '130만원',
  맹구: '500만원',
  훈이: 150,
  유리: '380만원',
};

function convert(obj) {
  for (const item in obj) {
    // 1번방법
    // if (typeof obj[item] === 'number') {
    //   obj[item] = `${obj[item]}만원`;
    // }

    // 2번 방법
    Number(obj[item]);
  }

  return obj;
}

console.log(convert(payDay));
console.log(payDay);
