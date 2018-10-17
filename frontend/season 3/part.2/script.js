// 연산자
// 비교
// boolean -> true, false -> 0,1
// 타입스크립트(Typescript)
// var a = 10; var a:number = 10
// int a , string b

/*

  > , < 크다, 작다
  == 같다
  === 엄격하게 같다(자료형 비교)
  >=, <= 크거나 같다, 작거나 같다.

  논리비교

  && -> and (조건이 2개 이상일 경우에 모든 조건이 참이여야 참을 반환한다.)
  || -> or (조건이 2개 이상일 경우에 모든 조건중에 하나라도 참이면 참이다.)
  ! -> 부정의 의미
  != -> 같지 않다.
  !== -> 엄격하게 같지 않다.

*/
var s = 10 >= 10;
// console.log(s)

var p = 10 > 20;
var p2 = 10 < 20;
// console.log(p || !s || !p2);

var a = !true;
// console.log(!!a)

var b = !('문자' != '문자');
// console.log(!b)

var c = 'asd';
// console.log(!c)

// 왜 조건의 true와 false가 중요하냐??
// 조건문
// 예외사항
/*
  예매시스템

  영화선택 -> 개봉예정작
  극장선택 -> 상영안하는 극장
  시간선택 -> 시간을 제대로 선택하지 않음
  좌석선택 -> 커플석, 로얄석, 장애인석,
  결제선택

*/

// 만약에
// if(조건true:false){ 조건이 참이면 실행 }
/*
  if (조건A) {
    A인경우 실행
  } else {
    B인경우 실행
  }
*/
var num = 20;

if ( num > 30 ) {
  // 실행
} else if ( num < 30 ) {

} else if ( num == 30 ){

}

// if( num < 20 ){
//   alert('a');
// } else {
//   alert('b');
// }

// 자판기

var money = 0;
money = money + 100;
money = money + 100;
money+=100;
money+=100;
money+=100;
money+=100;
money+=100;

console.log(money)

if ( money >= 500 ) {
  // console.log('500구매');
}

if ( money >= 700 ) {
  // console.log('700구매');
}

// if ( money >= 500 && money < 700 ) {
//   console.log('500원 음료수 구매 가능');
// } else if ( money >= 700 ) {
//   console.log('500원 짜리와 700원 음료수 구매 가능');
// }

// 조건문 if
// 조건문 switch
// switch(값){ 케이스별로 동일한 값의 케이스로 실행한다. }
// if(){}
// function(){}
// for(){}

var num2 = 10;

switch(num2){
  case 10:
    console.log(10);
    break;
  case 50:
    console.log(50);
    break;
  case 100:
    console.log(100);
    break;
  default:
    console.log(200);
}

// 삼항연산자
// (조건) ? a : b
(num < 10) ? console.log('a') : null;

(num < 10) && console.log('a');

// $('id')
var user = document.getElementById('user');
var btn = document.getElementById('btn');

btn.addEventListener('click',function(){
  console.log(user.value)
});

// 회원가입

// 조건문
// 반복문

// for, for in, forEach, while, do while
// map, filter

// document.write('<div>반복문</div>');
// document.write('<div>반복문</div>');
// document.write('<div>반복문</div>');
// document.write('<div>반복문</div>');
// document.write('<div>반복문</div>');

//for(초기값;조건;증감){
// 초기값을 시작으로 조건이 참인동안 실행을 하되 실행 될때마다
// 초기값을 증감 할수 있다.
// }4

var a = 10;
if ( a < 20 ) {
  for( var i = 0; i < 10; i++ ) {
    if ( i == 3 ) {
      // continue; 해당 기능만 넘기고 다음 실행
      break;
    }
    document.write(i * 2);
    document.write('<br />');
  }
}







































