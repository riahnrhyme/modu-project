// 비동기 동기
// 콜백지옥

// $('.box1').click(function(){
//   $('.box1').animate({ left: 100 },function(){
//       $('.box2').animate({ top: 100 },function(){});
//   });
//
// });

// function open(){
//   console.log('a');
// }
//
// console.log('hello');
// setTimeout(open,1);
// console.log('world');

var doc = document;
var n1 = doc.getElementById('n1');
var n2 = doc.getElementById('n2');
var start = doc.getElementById('start');
var move = 0;

start.addEventListener('click',function(){
    ani(after2);
});

function after(color){
  n2.style.background = color;
}

function after2(color){
  n2.style.background = color;
  n2.style.borderRadius = '50%';
}

function ani(callback){
  var nemo = setInterval(function(){
    move++;
    n1.style.left = move + 'px';
    if ( move >= 100 ) {
      clearInterval(nemo);
      callback('red');
      return;
    }
  },10);
}

// 비동기 방식을 해결하기 위한 방법
// 콜백 -> es6 -> promise -> async, await


















