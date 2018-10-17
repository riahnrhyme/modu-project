// 객체지향프로그래밍
// 자바스크립트는 객체지향 언어가 아니다.
// 객체지향 -> java

// this
// 객체에 있는 대상
// 호출에의해서 결정된다.
// 전역 -> 윈도우(window)
// window.alert('팝업');

var aaaabbbb = 100;
window.aaaacccc = 100;
// this.alert('팝업')
this.aaaadddd = 100;
// console.log(window); // 객체
// console.log(this);

var man = {
  name : 'Lim',
  say : function(){
    // console.log(this);
  }
}

// console.log(man)
// man.say();
var p = man.say;
var s = p.bind(man);
p();
s();

var doc = document;
doc.getElementById('btn').addEventListener('click',s);

var obj = {
  count : 0,
  increse : ()=>{
    // console.log(this);
    // console.log(this.count);
    var btn2 = doc.getElementById('btn2');
    btn2.addEventListener('click',(()=>{
      console.log(this);
      this.count++;
      console.log(this.count);
    }));

    /*setInterval(function(){
      this.count++;
      console.log(this);
    },1000);*/

  }
}

obj.increse();

// Function(es5) VS Arrow Function(es6)
// 화살표함수는 this가 없다

// btn2.addEventListener('click',() => {
//   console.log(this);
// });

// 객체지향
// 클래스
// 클로져
// 변수가 유지 되는 개념

function c1(x){
  var c = 10; // 변수
  function c2(y){
    c++;
    console.log(x+c+y);
  }
  c2(20);
}

// c1(30);
// c1(30);
// c1(30);

function c3(x){
  var c = 10;
  return function c4(y){ // 클로저 발생
    c++;
    console.log(x+c+y);
  }
}

var ss = c3(30);
// ss(20);
// ss(20);
// ss(20);

// 클래스
/*
  클래스
  인스턴스
  멤버변수(프로퍼티)
  멤버함수(메소드)
  new
*/

// new 객체로 리턴을 해준다. -> 객체로 만들어 준다.

var number = 10;

function num(){

  this.number = 20;

  console.log(number);
  console.log(window.number);
  console.log(this.number);
}

// var nn = new num();
// console.log(nn);

// 클래스
/*

  es5
  1. 리터널 방식 -> 1회용
  2. 함수방식 -> 재활용, 재사용
  3. 프로토타입방식 -> 상속

  es6
  4. 클래스방식 -> 프로토타입과 같다(문법이 생겼다.)

*/

// 1. 리터널(보이는 그대로) 방식
var Class1 = { // 클래스 & 인스턴스
  number : 0, // 프로퍼티
  increse : function(){ // 메소드
    console.log(++number);
  }
}

// Class1.increse();
// document.getElementById();
// $(this).addClass();

// 2. 함수방식

function Class2(width,height){ // 클래스
  this.width = width; // 프로퍼티 & 생성자
  this.height = height;
  this.shape = function(){ // 메소드
    console.log(this.width * this.height);
  }
}

var sh = new Class2(50,100); // 인스턴스
var sh2 = new Class2(30,70); // 인스턴스
// sh.shape();
// sh2.shape();

// 3. 프로토타입 방식 -> 재사용, 상속
function Class3(number){
   this.number = number; // 생성자
}

Class3.prototype.num = 20;
Class3.prototype.sum = function(){
  // console.log(this.number + this.num);
}

var cls = new Class3(100);
var cls1 = new Class3(200);

cls.sum();
cls1.sum();

function Class4(){
  this.count = 100;
}

Class4.prototype = new Class3(200); // 상속
Class4.prototype.constructor = Class4;

Class4.prototype.pp = function(){
  // console.log(this.count + this.number);
}

var cls4 = new Class4();

cls4.pp();
cls4.sum();

// es6 class 방식
class Shape {
  constructor(width,height){
    this.width = width;
    this.height = height;
  }

  rect(){
    console.log(this.width * this.height);
  }
}

var sp = new Shape(10,20);
// sp.rect();

class Semo extends Shape {

}

var se = new Semo(20,30);
//
// se.rect();

// 객체지향 프로그래밍
/*

  1. 추상성
  2. 은폐성
  3. 상속성
  4. 다형성
  5. 합성(x)

*/

// TV

/*

  프로퍼티
  제조사 (은폐성)
  인치
  모델 (은폐성)
  패널

  메소드
  전원
  볼륨
  채널

  특수
  3D
  APP

*/

function TV(inch,model){
  // this._company = '삼성';
  var company = '삼성';
  this.inch = inch;
  this.model = model;
}

TV.prototype.power = function(){};
TV.prototype.modelView = function(){
  console.log(this.model);
};

function App(){
  this.app = 'App';
}

var kim = new TV(50,'UHD50');
var park = new TV(70,'UHD70');

App.prototype = new TV(100,'UHD100');
App.prototype.constructor = App;

var lee = new App();
kim.modelView();
park.modelView();
lee.modelView();

// 클래스, 인스턴스, 객체지향










































