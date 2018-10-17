// 함수
// 함수의 이름은 기능을 이해할수 있는 이름으로 되도록 작성하자.
// 반환의 기능을 가지고 있다. ( 리턴 - return )
// return 을 만나면 함수는 소멸한다.
function sum(a,b,c,d){
  if ( a > b ) {
    return function(){
      console.log(a-b);
    };
  }
  return a + b;
}

var r1 = sum(30,20,100,200);
// r1(); // 클로져

// 매개변수, 지역변수, 전역변수, 멤버변수

var number = 100; // 전역변수
// console.log(number);
var number = 200; // 전역변수

function open(){
  var number = 300;
  var num2 = 400; // 지역변수
  console.log(number); // 호이스트 현상
  // 함수내에 생성된 변수를 끌어 올리는 현상
  console.log(number);
  function open2(){
    var num3 = 500;
    console.log(num3);
  }
  // console.log(num3);
  open2();
}

function close(){
  // console.log(num2);
}

// open();
// close();

// 호이스팅
// var 함수단위 변수
// let 블럭단위 변수 {} -> 스코프(scope)
// let, const -> es6

function vs(){
  var n1 = 10;
  if ( n1 == 10 ) {
    var n2 = 20;
  }
  console.log(n1+n2);
}

function ls(){
  let n1 = 10;
  let n2 = 0;

  if ( n1 == 10 ) {
    n2 = 20;
  } else {
    n2 = 30;
  }
  console.log(n1+n2);
}

// vs();
// ls();

for ( let i = 0; i < 7; i++ ) {

}

for ( let i = 0; i < 7; i++ ) {

}

// console.log(i);

let aa = 10;
{
  let bb = 20;
  // console.log(aa+bb)
}

// es6
// let, const, arrow function(화살표함수)
// es5 이하 버전에서는 함수는 여러가지 역활을 했다.
// 함수, 클래스
// es6 에서는 함수로써 사용될때와 클래스로써 사용될때는 구분했다.
function es5(a){
  var x = a * 2
  return x;
}

var res1 = es5(30);
// console.log(res1);

const es6 = (a,b) => {
  let c = b;
  return a * 2;
}

let res2 = es6(20);
// console.log(res2);

var kor = () => {
  var total = 0;
  for ( var i = 0; i < arguments.length; i++) {
    total = total + arguments[i];
  }
  console.log(total);
}

// var k = kor(10,20,30,40);
// console.log(k);

// arguments 쓰지말자
// 매개변수는 매개변수로만으로도 기능을 이해 할수 있게 해주는게 좋다.

// 재귀함수 -> 반복함수
var time = 0;
function replay(){
  // console.log(time);
  time++;
  if ( time == 100 ) {
    return;
  } else {
    replay();
  }
}

replay();

// setTimeout(기능,시간)
// 시간이 경과한 후 기능을 실행한다. (1회)
// setInterval(기능,시간)
// 매 시간 마다 기능 실행한다.
// 멈추는 기능은 clearInterval(대상);
// 숙제
// 디지털 시계
// 23:59:59 -> 00:00:00
var clock = 0;
function out(){
  // console.log(++clock);
}
// setTimeout(out,3000);

var ss = setInterval(out,1000);
setTimeout(function(){
  clearInterval(ss);
},5000);

// animation
// $('.class').animate({ left : 100 });

/*$("button").on('click',function(){
    $("div").animate({left: '250px'});
});
$('#box').css(left,100)
*/

var btn = document.getElementById('btn');
var box = document.getElementById('box');

btn.addEventListener('click',animation);

var move = 0;
function animation(){
  var ani = setInterval(function(){
    // move = move + 1;
    // move+=1;
    if ( move >= 100 ) {
      clearInterval(ani);
      return;
    }
    move++;
    box.style.left = move + 'px';
  },10)
}

// DOM API + 이벤트
// 선택자
// 선택 -> 이벤트 -> 기능
// 특정 태그 를 선택하는 방법 (id, class, data, attr) $('.box').attr('data')
// 대상을 기준으로 찾는 선택자 (부모,자식,형제)
// 나 자신을 찾는 방법 (this) -> 객체중심
// 단수와 복수
var doc = document;
var nemo = doc.getElementById('nemo'); //단수
var nemo2 = doc.getElementsByClassName('nemo');

// nemo.style.color = 'red';
// console.log(nemo)
// console.log(nemo2)
// $('.nemo').css('color','red');

// nemo2[0].style.color = 'red';
// nemo2[1].style.color = 'red';

// for ( var i = 0; i < nemo2.length; i++ ) {
//   nemo2[i].style.color = 'red';
// }

// console.log(nemo2[0])
// $('#memo p a')
var p = doc.getElementById('nemo')
  .getElementsByTagName('p')[1].getElementsByTagName('a')[0];
p.style.color = "red"


// 알고리즘
/*
  두 수와 두 수 사이에 있는 모든 정수를 더해서 리턴 하도록 함수를 완성한다.
  a,b가 같은 경우에는 둘중에 하나만 리턴을 한다.
  a -> 3 , b -> 5 면 결과는 12를 리턴한다.
  a,b는 음수도되고 0 일수도 있고, 양수이기도 하다.
  둘의 대소관계는 정해져있지 않다.
*/

function adder(a,b){
  var result = 0;
  // ??
  return result;
}

console.log(adder(3,5)) // 12
console.log(adder(5,3)) // 12
console.log(adder(1,10)) // 55
console.log(adder(-1,2)) // 2
console.log(adder(2,2)) // 2






























