// 내장객체 와 콜백함수
// 애니메이션 구현

// 슬라이드 제작
// 애니메이션

// jquery -> 생산성
$('.btn1').on('click',function(){
  $('.box1').animate({ 'left' : 100 },1000,function(){
    $('.box1').css({
      backgroundColor : 'red',
      borderRadius : '50%'
    });
  });
  // $('.box1').animate({ 'top' : 100 },1000);
});

// javascript
// setInterval & setTimeout
var btn = document.querySelector('.btn2');
var box = document.querySelector('.box2');

var num = 0;

btn.addEventListener('click',function(){
  ani(aa)
});

function ani(cb){

    var move = setInterval(function(){
      if ( num >= 100) {
        clearInterval(move);
        cb(); // 콜백의 시점
        return;
      }
      box.style.left = (++num) + 'px';
    },10);
}

function aa(){
  after();
  after2();
}

function after(){
  box.style.backgroundColor = 'red';
}

function after2(){
  box.style.borderRadius = '50%';
}

// 콜백 함수
// 자바스크립트 비동기 방식

// es6 -> promise
// es7 -> async await

var p = function(){

  return new Promise(function(resolve,reject){
    //console.log('함수 실행');
    setTimeout(function(){
      resolve();
    },5000);
  });
}

p().then(function(){
  //console.log('성공시에 실행될 함수');
},function(){
  //console.log('실패시에 실행될 함수');
}).then(function(){});

// 내장객체
// window

// window.alert('a');
//console.log(window);
var aaaa = 1000;
// window.bbbb = 1000;

var date = new Date();
//console.log(date);

// 2018년 9월 29일 토요일
var year = date.getFullYear();
var month = date.getMonth() + 1;
var day = date.getDate();
var yo = date.getDay(); // 0 ~ 6
var yoName = [ '일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일']

var result = year + '년 ' + month + '월 ' + day + '일 ' + yoName[yo];

//console.log(result);

moment.locale('ja');
var time = moment().format('LLLL');
//console.log(time);

// 내장객체
// 배열을 다루는 기능들

var arr = [ 50, 30, 20, 2, 5, 10, 60 ];
var j = arr.join('|');
var tmp = j.split('|');
var s = arr.slice(0,-1);
var so = arr.sort(function(a,b){
  return a - b;
});

// console.log(j);
// console.log(tmp);
// console.log(s);
// console.log(so);

// concat, map, filter
var open = [ 10, 20, 30, 40, 50 ];
var pp = open.concat([60])

// console.log(open);
// console.log(pp);

const res1 = open.map(value => value > 20);
const res2 = open.filter(value => value > 20);
//
// console.log(res1);
// console.log(res2);

// encode VS decode
// uri encode decode

var text = 'i am a boy';

var en = encodeURI(text);
var de = decodeURI(en);
console.log(en);
console.log(de);

var n1 = 10000.12;
var n2 = 20000000.13634;
var total = n1 + n2;
console.log(total.toFixed(0).toLocaleString('en'));
// console.log()
console.log(0.1+0.2);

// hanpixel.com/slide






































