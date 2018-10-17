// 비교연산자, 논리연산자

/*
  비교연산자는 비교의 대상이 있기 때문에
  결과는 참(true)과 거짓(false)을 알려준다.

  > , < 크다, 작다(숫자)
  >= , <= 크거나 같다, 작거나 같다.
  == 같다 (값만비교) (문자도 포함)
  === 같다 (자료형까지 비교) => React

  논리연산자

  && 두개이상의 조건이 모두 참이여야 참을 반환한다.
  || 두개이상의 조건중에 한개라도 참이면 참이다.

  부정의 의미
  true -> false -> true
  !
  !=
  !==

*/
//// console.log( !(!10 !== 10) )
//// console.log(!(!(10>5)))
//// console.log(10==='10');
//// console.log(10>5 || 5<6 || 10<6)

// 조건문, 반복문
// 조건
// 프로세스

/*
  if(){}
  for(){}
  switch(){}
  function(){}

  if(조건){
    조건이 참(true)이면 실행(기능)
  }
*/
var check = 10 < 5;
//console.log(check);

if( !check ){
  //// console.log('실행');
}

if (!check || false){
  //// console.log('한줄일경우');
  //// console.log('한줄일경우');
}

var number;  //10;
//console.log(number);
if ( !number ) {
  //console.log('hello');
}

/*

  if(조건A){
    조건A가 참이면 실행
  } else {
    조건A가 아닌 모든 경우 실행
  }

  if(조건A) {
    조건A가 참이면 실행
  } else if(조건B) {
    조건B가 참이면 실행
  } else if(조건C){
    조건C가 참이면 실행
  }
*/

var money = 0;
money = money + 100;
money = money + 100;
money+=100;
money+=100;
money+=100;
money+=100;
money+=100;

//console.log(money);

if ( money >= 500 ) {
  //console.log('500원 음료수 구매 가능');
}

if ( money >= 700 ) {
  //console.log('700원 음료수 구매 가능');
}

/*if ( money >= 500 && money < 700 ) {
  //console.log('500원 음료수 구매 가능');
} else if ( money >= 700 ) {
  //console.log('500원 및 700원 음료수 구매 가능');
}*/

switch(money){
  case 500:
    //console.log('500원 음료수 구매 가능');
    break;
  case 700:
    //console.log('500원 및 700원 음료수 구매 가능');
    break;
}

/*
  switch(값){
    case A:
      실행
      break;
    case B:
      실행
      break;
    defalut:
      break;
  }
*/

/*
  (조건) ? A : B
*/

(10 < 5) ?
  console.log('크다') :
  console.log('작다');

( 10 < 5 ) && console.log('hello');

// 회원가입 양식
// 숙제 단톡
// 메신져 -> slack, 잔디

// 반복문
/*

  for, for in, while, do while

  for(초기값;조건;증감){
    실행
  }
*/

// a++, ++a -> 1증가
// 사용시점에서 적용

var g = '문자';

if (typeof g == 'Number') {

  for ( var i = 0; i < g; i++ ){

    var check = i % 2;

    if ( check == 0 ) {
      continue;
    }

    // console.log(i);

    // if ( i == 2 || i == 4 || i == 6 ) {
    //   continue;
    // }
  }
} else {
  // console.log('숫자가 아니다;');
}

// console.log(i); // 전역변수

for ( var j = 0; j < 100; j = j + 2 ) {
  // console.log(j)
}

// while , do while
// k++; // 사용시점이 아니다
// k++,++k
// k++ 사용시 사용하고 1증가
// ++k 사용시 증가하고 사용

var k = 0;

while(k > 5){
  console.log(++k); // 사용시점
}

var p = 0;

do{
  console.log(++p);
}while(p > 5)

// 이중 반복문
// 1. 숙제
/*

  다녀와
  짝짝짝
  다녀와
  짝짝짝
  짝짝짝
  ....

*/
// 2. 구구단출력
/*

  2 x 1 = 2
  2 x 2 = 4
  ...
  3 x 1 = 3
*/

for ( var x = 0; x < 5; x++ ) {
  console.log('다녀와');
  for ( var y = 0; y < 3; y++ ) {
    console.log('짝짝짝');
  }
}

document.write('2 x 1 = 2');
document.write('<br />');
document.write('2 x 2 = 4');
document.write('<br />');
document.write('2 x 3 = 6');
document.write('<br />');
document.write('2 x 4 = 8');
document.write('<br />');

/*
  자료형
  변수
  연산(비교, 논리, 부정)
  조건문
  반복문

  객체, 배열, JSON
  함수
*/








