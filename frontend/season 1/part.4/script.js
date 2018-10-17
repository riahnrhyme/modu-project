//함수 -> 값 -> 변수
// 상자에 담는 수

/*
  1. 자주 사용되는 코드를 별도의 파일로 만들어서
  필요할때 마다 재활용할수 있다.
  2. 코드를 개선하면 이를 사용 하는 모든 어플
  리케이션의 동작이 개선된다.
  3. 코드의 수정시 필요한 로직을 빠르게 찾을수
  있다.
  4. 필요한 로직만을 로드해서 낭비를 줄일 수 있다.
*/
//console.log(a);
var a = 10;
//console.log(a); // 사용

// 호출 call callback
name(); // call

function name(){
  //console.log('실행');
}

var open = function(){
  //console.log('익명함수');
}

open();

(function fc(){
  //console.log('자체실행')
})()

// 함수의 반환 (return)
// 함수는 함수안에서 return을 만나게 되면 종료한다.

var num3 = 300; // 전역변수

// parameter -> 매개변수
function plus(a=50,b=70){ // 기능

  var num1 = 100; // 지역변수
  var num2 = 200;

  if ( num1 < num3 ) {
    return a + b;
  }
  return '잘못된 비교 입니다.';
}

var result = plus(10,20);

//console.log(result);

// 매개변수
// function sum(n1,n2,n3 = 0){
//   return n1 + n2 + n3;
// }

var sum = (arr) => {
  var total = 0;

  for(var i = 0; i < arr.length; i++){
    total = total + arr[i];
  }
  return total;
}

var res1 = sum([100,200,50]);
var res2 = sum([200,400,100,200,300]);
// console.log(res1);
// console.log(res2);

// 변수의 관계
// console.log(p)
// var p = 10;

// var x = 10; // 전역변수

function up(){
  //var x;
  var x = 20; // 지역변수
  //console.log(x); // 호이스트
  //console.log(x);
}

function down(){
  //console.log(x);
}

up();
down();

// es5
// 함수 , 클래스
function es5(a,b){
  return a + b;
}

var r1 = es5(10,20);
//console.log(r1);
// es6
// 화살표함수 => arrow function
/*var es6 = (a,b) => {
  a++;
  return a + b;
}*/
const es6 = (a,b) => a + b;
const es7 = a => a + 10;
// function es7(a){
//   return a + 10;
// }
var r2 = es6(10,20);
//console.log(r2);

// var VS let
// var는 함수단위 변수
// let은 블럭단위 변수

function varFunc(){
  if(true){
    var a = 10;
    // console.log(a);
  }
  // console.log(a);
}

function letFunc(){

  if (true) {
    let u = 200;
  } else {
    let u = 300;
  }

  // console.log(u);

  /*let a = 1000;
  if(true){ // {} => 스코프 scope
    let a = 300;
    console.log(a);
  }
  console.log(a); //에러*/
}

varFunc();
letFunc();

// 알고리즘 문제
/* 두 수 와 두 수 사이에 있는 모든 정수를 더해서
리턴 하도록 함수를 완성하세요. a와 b가 같은 경우
에는 둘중에 아무수나 리턴한다.
예를 들어 a가 3, b가 5  일 경우에는 12를
리턴한다.
a,b는 음수나 0, 양수 일수도 있다.
둘의 대소관계도
정해여 있지 않다
*/

function adder(t,p){
  var result = 0;

  //??

  return result;
};

var pp = adder(3,5); //12
var pp0 = adder(5,3); //12
var pp1 = adder(1,10); //55
var pp2 = adder(10,10); //10

console.log(pp);

// arguments
// es5 함수에서는 사용가능하다.
// es6~ 화살표함수에서는 사용이 안된다.

function pop(){
  console.log(arguments);
  var to = 0;
  for (
    var i = 0;
    i < arguments.length;
    i++ ) {
      to = to + arguments[i];
  }
  return to;
}

var opop = pop(10,20,30);
console.log(opop);

// 재귀함수
// 자신이 자신을 호출하는 함수

function kk(){

  // kk();
}

kk();

// 시간 함수

// 시간이 경과한후 함수를 실행한다. -> 1회
setTimeout(function(){
  console.log('실행');
},3000);

// 시간마다 함수를 실행한다. -> 무한
// 시계를 만든다
// 00:01:00
setInterval(function(){
  console.log('매실행')
},1000);


/*
  *
  **
  ***
  ****
  *****
*/

for ( var k = 1; k < 5; k++ ) {

  for ( var j = 0; j <= k-j; j++ ) {
    document.write('*');
  }
  document.write('<br />');
}


























































