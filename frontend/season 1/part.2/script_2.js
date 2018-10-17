// 변수 와 자료형
// 타입스크립트 -> react, angular
// var a = 10;
// var a:number = 10;
// int a = 100;

// 비교
// 비교 라는 것은 두개이상의 대상을 가지고 비교를 하기 때문에
// 항상 참과 거짓에 대한 대답을 준다.
// 참 -> true -> boolean -> 1
// 거짓 -> false -> boolean -> 0

var num1 = 20;
var num2 = '10';
var result = num1 >= num2;

// console.log(result);

/*
  비교연산자
  
  > , < 크다 , 작다.
  >= , <= 크거나 같다, 작거나 같다.
  == A와 B는 같다. (자동형변화)
  === A와 B는 엄격하게(자료형) 같다. (React 경고메세지)

  논리연산자

  && and 두개이상의 조건이 모두 참일경우 참을 반환한다.
  || or 두개이상의 조건중에 하나라도 참이면 참을 반환한다.
  ! 부정의 의미
*/

var num3 = 20;
var num4 = 10;

var open1 = num3 > num4; //true
var open2 = num3 < num4; //false
var open3 = num3 >= num4; // true

//20 > 10 && 10 < 20
// console.log(!(!(open1 && open3 && !open2)));

var test1 = 100;
var test2 = 200;

console.log(!(test1 != test2));

// 조건문 & 반복문
// 조건문
// 예외사항
// if (유저의 행동 제한)
/*
  if (조건) {
    조건이 참일경우 실행
  }

  if(){}
  for(){}
  function(){}
  switch(){}
  while(){}
*/

// 협업
// 코드 스탠다드(컨벤션)를 만들자.
// ESLint , JSLint

if ( !(10 > 5) ) {
  var a = '실행';
  alert(a);
} else {
  // alert('두번째');
}

/*

  if (조건A) {
    조건A가 참일경우 실행된다.
  } else if (조건B) {
    조건B가 참일경우 실행된다.
  } else if (조건C) {
    조건C가 참일경우 실행된다.
  } else {
    A, B, C조건이 모두 참이 아닌경우 실행
  }

*/

// 자판기(객체)

var money = 0;

money = money + 100;
money = money + 100;
money += 100;
money += 100;
money += 100;
money += 100;
money += 100;

console.log(money);

// switch case문

/*
  switch(값){
    case A:
      값 == A 같으면 실행
      break;
    case B:
      값 == B 같으면 실행
      break;
    default:
  }
*/

// 장점 가독성이 좋다.
money += 100; //800
switch(money){
  case 700:
    console.log('700구매');
    break;
  default:
    console.log('구매불가');
}

/*if ( money >= 500 ) {
  console.log('500원짜리 음료수를 구매');
}

if ( money >= 700 ) {
  console.log('700원짜리 음료수를 구매');
}*/

// 라이브러리 & 프레임워크
// 라이브러리 단위적인 개발
// 프레임워크 는 틀기반 개발

if ( 10 > 5 ) {
  console.log('실행된다.');
}

( 10 < 5 ) && console.log('실행된다2');

// (조건) ? 참이면:거짓이면
( 10 < 5 ) ?
  console.log('참') : console.log('거짓')

// 들여쓰기의 레벨은 4레벨이상 들어 가면 어려워진다.
// 인셉션

var btn = document.getElementById('btn');
btn.addEventListener('click',function(){

  var number = document.getElementById('number').value;

  if ( !number ) {
    alert('숫자를 입력해주세요');
    return;
  }

  console.log(number);
});





















;
