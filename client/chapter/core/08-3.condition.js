/* ---------------------------------------------------------------------- */
/* Switch                                                                 */
/* ---------------------------------------------------------------------- */

// const MORNING = '아침',
//   LUNCH = '점심',
//   DINNER = '저녁',
//   NIGHT = '밤',
//   LATE_NIGHT = '심야',
//   DAWN = '새벽';

// let thisTime = prompt('지금 시간은?');

/* 다양한 상황에 맞게 처리 --------------------------------------------------- */
/**
 * 
switch (thisTime) {
  case 'MORNING':
    console.log('아침 후에엥 졸려 ');
    break;
  case 'LUNCH':
    console.log('점심 꼬로록 베고파');
    break;
  case 'DINNER':
    console.log('저녁 수업이 끝났다..불태웠어..');
    break;
  case 'NIGHT':
    console.log('밤에는 저녁 먹고 스터디해야해... ');
    break;
  case 'LATE_NIGHT':
    console.log('심야 이때의 난 무적이다 아무도 날 건드릴수없어 ');
    break;
  case 'DAWN':
    console.log('새벽...잘..수야없지 유튭 꿀잼 ~  ');
    break;
  default:
    console.log('다시 입력해주세요');
    break;
  }
 */

/* switch문 → if문 변환 --------------------------------------------------- */
/**
 * 
if (thisTime === 'MORNING') {
console.log('아침 후에엥 졸려 ');
} else if (thisTime === 'LUNCH') {
console.log('점심을 멀 먹어야 잘먹었다고 소문이 나지 ㅇㅁㅇ?');
} else if (thisTime === 'DINNER') {
console.log('저녁은 쉅 끝 남 ㅋ ');
} else if (thisTime === 'NIGHT') {
console.log('밤에는 스터디 하기전에 폭풍 밥먹기 한다');
} else if (thisTime === 'LATE_NIGHT' || thisTime === 'DAWN') {
console.log('지금이야!!!! 지금을 즐겨');
} else {
alert('다시 입력해죠');
}
 * 
 */

// 조건 유형(case): '아침'
// '뉴스 기사 글을 읽는다.'

// 조건 유형(case): '점심'
// '자주 가는 식당에 가서 식사를 한다.'

// 조건 유형(case): '저녁'
// '동네 한바퀴를 조깅한다.'

// 조건 유형(case): '밤'
// '친구에게 전화를 걸어 수다를 떤다.'

// 조건 유형(case): '심야'
// 조건 유형(case): '새벽'
// '한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.'

/* switch vs. if -------------------------------------------------------- */

function getRandom(n) {
  return Math.round(Math.random() * n);
}

function getDay(DayValue) {
  switch (DayValue) {
    case 0:
      return '월';

    case 1:
      return '화';

    case 2:
      return '수';

    case 3:
      return '목';

    case 4:
      return '금';

    case 5:
      return '토';

    case 6:
      return '일';

    default:
      return '다시';
  }
}
let result = getDay(getRandom * 6);
console.log(result);
