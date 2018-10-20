// 함수

/*
  1. 자주 사용되는 코드를 별도의 파일로 만들어서 필요할때 마다 재활용을 할수 있다.
  2. 코드를 개선하면 이를 사용하는 모든 어플리케이션의 동작이 개선이된다.
  3. 코드의 수정시 필요한 로직을 빠르게 검색 해서 찾을수 있다.
  4. 필요한 로직만을 로드해서 낭비를 줄일수 있다.
*/

// console.log(a);

// 함수
// function(기능을 위한 도구(값)들){ 기능의 내용 }
var a = 10;
var b = 20;

run(); // 호출한다. call
function run(){
  // console.log(a);
}

var pp = function(){
  // console.log(b);
}
pp();

// 함수의 자체 실행
// 이름이 없는 함수 => 익명 함수
// 가급적 사용을 하지 않는게 좋다.
(function(){
  // console.log(a);
})();

// 함수의 반환
// 함수가 값을 돌려주는 개념
// 함수를 종료 한다.
// return

// () => 동작을 할때 필요한 값을 담는다.
// 파라미터(parameter)
// 매개변수,지역변수,전역변수

var v = 10;
v = 20;

function sum(a,b,c=0){
  var num1 = a;
  var num2 = b;
  var num3 = c;
  return num1+num2+num3;
}
var result = sum(20,70);
var result1 = sum(40,20,50);

// console.log(result);
// console.log(result1);

// 두수이상이 있을때 모든 수의 합을 구하는 기능
var number = [ 10, 20, 30, 40, 50 ];

function plus(arr){

  var total = 0;

  for(var i=0; i<arr.length; i++){
    if ( i == 2 ) {
      return;
    }
    total = total + arr[i];
  }
  return total;
}

var res = plus(number);
// console.log(res);

// 지역변수, 전역변수
// var vs let

var n1 = 100; //전역변수

function nn(){
  //var n1 = 200; // 지역변수 : 생성된 함수 내부에서만 사용할수 있다.
  var n1 = 200; // 호이스트 : 끌어 올리다.
  // console.log(n1);
}

function tt(){
  var uu = 200;
  function aa(){
    var uu = 100;
  }
  function bb(){
    // console.log(uu);
  }
  aa();
  bb();
  // console.log(n1);
}

nn();
tt();

// var & let
// var => 함수단위의 변수
// let => 블럭단위의 변수(scope) => {}
function x1(){
  var x = 100;
  if(x==100){
    var y = 200;
  }
  console.log(x+y);
}

function x2(){
  let x = 100;
  let y = 0;
  if(x==100){
    y = 200;
  }
  console.log(x+y);
}

// x1();
// x2();

{
  let mm = 100;
}
// console.log(mm)

/*

  1. 함수는 호출에 의해서 수행한다.
  2. 함수로써 호출
  3. 값으로써의 함수 호출
  4. return을 만나면 종료한다.
  5. return을 만나면 값을 반환해준다.
  6. 파라미터(매개변수)
  7. 지역변수, 전역변수
  8. var vs let
  9. es5 vs es6
  10. 문법차이점

  babel
  es6 => babel => es5
  webpack
  bundle.min.js

*/

// es5 vs es6(2015)
// es5 -> 함수, 클래스
// es6 -> 함수(화살표 함수), 클래스(클래스문법)
// 함수

function es5(a,b){
  var p = 10 + 20 + a + b;
  return p;
}

var s1 = es5(100,200);
// console.log(s1);

// 화살표함수 -> arrow function
var es6 = (a,b) => {
  var p = 10 + 20 + a + b;
  return p;
}

var s2 = es6(100,200);
// console.log(s2);

var open = function(){
  // arguments
  // 자동으로 파라미터를 쌓아준다. -> 배열
  // 가급적 쓰지 않는다.
  // 함수는 파라미터의 정보만으로 그 기능 유추될수 있게 만들어 주는게 좋다.
  // console.log(arguments);
  var total = 0;
  for (var i=0;i<arguments.length;i++){
    total+=arguments[i];
  }
  console.log(total);
}

open(10,20,30,40);

var close = () => {

}

close(10,20,30,40);

/*
  this -> 객체 중심
*/

// 재귀함수, 시간설정
var k = 0;

function repeat(){
  k++;
  if ( k > 100 ) {
    return;
  }
  console.log(k);
  repeat();
}

repeat();

// 시간
// setInterval(함수,시간);
// 매 시간 마다 실행한다.
// setTimeout(함수,시간);
// 시간이 경과하면 함수를 실행

setTimeout(function(){
  console.log('5초가 경과했습니다.');
},5000);

setInterval(function(){
  console.log('5초 마다 실행합니다.')
},1000);

// 00:00:00















