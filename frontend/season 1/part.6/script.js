/*
  이벤트
  내장객체
  콜백, promise (비동기, 동기)
  this (객체)
  절차지향 VS 객체지향
  클래스, 메소드, 프로퍼티
  은폐성, 상속성
  es6
*/

var doc = document;
var selector = doc.getElementById('btn');

doc.addEventListener('click',function(e){
  console.log(e)
  btnFunc(200);
});

function btnFunc(num){
  console.log(num);
}

btnFunc(100);

// 제이쿼리
/*
  mouseover (버블링) -> 자식객체 까지 이벤트 전달
  mouseenter
*/

var test = doc.getElementById('test');

test.addEventListener('keypress',function(e){
  console.log(e.keyCode);
  if ( e.keyCode == 13 ) {
    console.log(test.value);
  }
});

/*
  keyup, keydown (키코드)
  keypress (아스키키코드)
*/

// 내장객체
// 자바스크립트가 기본적으로 가지고 있는 객체
var aaaa = { number : 100 };

// console.log(window.document)
// this.document.get

var num1 = 100;
var num2 = new Number(200);
// console.log(num1);
// console.log(num2);

var date = new Date();
var dateName = [ '일','월','화','수','목','금','토' ];

console.log(dateName[date.getDay()]);

//moment

var num3 = 10000000;
var num4 = 10000000;

console.log((num3 + num4).toLocaleString('en'));

// 배열 관련 내장객체
var open1 = [ '가', '나', '다', '라' ];
var r1 = open1.join(); // 가,나,다,라
var r2 = open1.slice(2,3);

console.log(r2);

var arr1 = [50,40,30,3,10,1];
var arr2 = [40,50];

var arr3 = arr1.concat([100]);

console.log(arr1.sort(function(a,b){
  return a - b;
}));

//
var te = 'I%20am%20a%20boy';

console.log(decodeURI(te));
console.log(0.37333.toFixed(1));
// 부동소수점 오류
console.log(parseInt(10*0.23));

// Map, Filter

































