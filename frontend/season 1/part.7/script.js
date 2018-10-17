// this
// 객체 -> object
// 전역 -> window(객체)
// this는 객체의 상황따라 달라지게된다.
// 호출을 기준으로 형성된다.
var self = this;
// console.log(self);

var man = {
  name : 'one',
  say : function(){
    console.log(this);
  }
}

var n = man.name;
// man.say();

var s = man.say;
var p = s.bind(man);
// s();

var doc = document;
doc.getElementById('btn')
  .addEventListener('click',p);

var btn2 = doc.getElementById('btn2');

var obj = {
  count : 0,
  increse : function(){
    console.log(this.count);
    var self = this;
    window.setInterval(function(){
      // console.log(self)
    },2000);
    btn2.addEventListener('click',
      (function(){
        // console.log(self.count);
      }).bind(this));
  }
}

// obj.increse();

var b2 = doc.getElementById('btn2');

var f1 = () => {
  // console.log(this);
}
f1();
b2.addEventListener('click',f1);

// es5 함수는 this가 존재 합니다.
// es6 애로우함수 this가 적용되지 않는다.

// 클래스
// 클로져
// 변수가 유지되는 개념

function c1(y){
  var t = 10;

  function c2(x){
    t++;
    console.log(t + x + y);
  }

  c2(20);
}

// c1(30);
// c1(30);
// c1(30);

function c3(y){

  var t = 10;
  return function c4(x){ //클로져 발생
    t++;
    console.log(t+x+y);
  }
  // c4(20);
}
var ss = c3(30);
// ss(20);
// ss(20);
// ss(20);


/*
  클래스
  인스턴스
  멤버변수(프로퍼티)
  멤버함수(메소드)

  es5
  1. 리터널(보이는대로)방식 -> 1회용
  2. 함수방식 -> 재활용
  3. 프로토타입 -> 상속
  se6
  4. 클래스 -> 상속
*/
// 클래스로 사용할시 이름의 첫 알파벳은 무조건 대문자로 만든다.
var Cls1 = { // 클래스 & 인스턴스
  number : 10, // 프로퍼티
  increse : function(){} // 메소드
}

Cls1.number;
Cls1.increse(); // $(this).addClass();

// 함수 방식 클래스
function Cls2(nn){
  // console.log(this);
  this.number = 0; // 멤버변수
  this.nn = nn;
  this.increse = function(){
    console.log(this.number + this.nn);
  }
}

var cls = new Cls2(30);
var cls1 = new Cls2(40);
var cls2 = new Cls2(50);
// cls.increse();
// cls1.increse();
// cls2.increse();

//3.프로토타입

function Cls3(){
  this.num = 10;
}
Cls3.prototype.num2 = 20;
Cls3.prototype.plus = function(){
  console.log(this.num + this.num2);
}

function Cls4(){

}
Cls4.prototype = new Cls3; // 상속
Cls4.prototype.constructor = Cls4;

var open = new Cls3;
var close = new Cls4;

console.log(open.num2);
console.log(close.num2);
close.plus();

// es6 클래스 방식
// 함수다
class Cls5 {
  constructor(width,height){ // 최초의 실행되는 메소드
    this.width = width;
    this.height = height;
  }

  shape(){
    return this.width * this.height;
  }
}

class Cls6 extends Cls5 {

  shape1(){
    return this.width + this.height;
  }
}

Cls6.prototype.num = 100;

var cls5 = new Cls5(100,200);
var cls6 = new Cls6(100,200);
console.log(cls5.shape());
console.log(cls6.num);

// 객체지향
/*
  1. 추상성
  2. 은폐성
  3. 상속성
  4. 다형성
  5. 합성 (x)
*/

// TV
/*
  프로퍼티

  제조사 (은폐성)
  인치
  모델명 (은폐성)

  메소드

  채널()
  볼륨()
  전원()
  3D()



*/

function TV(){
  var _company = '삼성'; // 은폐성, 프로퍼티
  this.inch = '50';
  this._model = 'UHD50';

  this.setCompany = function(company){
    _company = company
  }

  this.getCompany = function(){
    console.log(_company);
  };

  this.channel = function(){};
  this.view3D = function(){};
}

function AppTV(){
  this.inch = '60';
}

AppTV.prototype = new TV;
AppTV.prototype.constructor = AppTV;

AppTV.prototype.app = function(){};

var tv = new TV();
var apptv = new AppTV();
tv.setCompany('LG');
tv.getCompany();
console.log(apptv.inch);

// es5 -> es6 클래스로 변환
// es5에서 하나의 함수를 2가지로 사용하다
// es6에서는 2가지의 기능 클래스와 애로우함수로 나눴다.
var es5 = () => {
  this.num = 10;
}

var e = new es5;
console.log(e.num);

// 디자인패턴
// 싱글톤패턴
// 모듈패턴
// 프라미스패턴

























