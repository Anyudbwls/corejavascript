export const memo = (() => {
  const cache = {};
  return (key, callback) => {
    if (!callback) return cache[key];
    if (cache[key]) {
      console.log(`${key} 값은 이미 개시된 값이 존재합니다.`);
      return;
    }

    cache[key] = callback();

    console.log(cache);
  };
})();

memo('cube', () => 'tiger'); //set
//console.log(memo('cube')); //get

//커링함수 대신 즉시실행 함수로
