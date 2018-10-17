// DOM API
// 선택자 와 이벤트
function popup(){
  alert('팝업');
}

// 선택자
// 태그 > 클래스 > 아이디(유일하죠)
// 속성 (data) <div data-count="0"></div>
// data-*
// .class { } input[type="text"] { }

var doc = document;
var btn = doc.getElementById('btn'); // 선택자
// 지향하지 않는 방식
btn.onclick = function(){
  console.log('popup');
};

// 표준?
// IE9 이전에서 동작을 하지 않는다.
btn.addEventListener('click',function(){
  console.log('popup');
});

// 선택자
// 태그선택자 -> 위에서부터 내려오면서 순서대로 찾아서 배열 넣는다.
// 단수와 복수가 존재한다.
/*var tag = doc.getElementsByTagName('div');
console.log(tag);
var n = 0;
for ( var i = 0; i < tag.length; i++ ) {
  tag[n].style.color = 'red';
  n++;
}*/

// tag[0].style.color = 'red';
// tag[1].style.color = 'red';
// tag[2].style.color = 'red';

// 아이디선택자
// var tag = doc.getElementById('tag');
// tag.style.color = 'blue';

// 클래스 선택자
// 클래스이름
var t = doc.getElementsByClassName('tag');
// console.log(t);
var tq = doc
  .querySelector('.tag.tt')
  .getElementsByTagName('a');
var tqa = doc
  .querySelectorAll('.tag');
// console.log(tqa);

// 부모, 자식, 형제, 나
/*
  parent()
  parents()
  siblings()
  children()
  find()
  this
*/
/*
  선택자.click(function(){

  });
  선태자.on('click',function(){

  });
*/
var bb = doc.getElementById('bb');
var g = doc.getElementById('grand');
var p = doc.getElementById('parent');
var c1 = doc.getElementById('child1');
var c2 = doc.getElementById('child2');

bb.addEventListener('click',function(){

  // var child = g.children[0].children
  // var child = p.childNodes;

  // var result = c1.parentNode.parentNode;
  // var result = c2.parentElement;

  // var result = c1.nextElementSibling;
  // var result = c1.nextSibling
  // var result = p.childElementCount;
  // console.log(result);

  // c1.parentElement.parentElement.children[0].children[1].style.color ='red';

  this.style.color = 'red';
  // console.log(p.getElementsByTagName('div'));
});

var num = doc.getElementById('number');
var nb = num.getElementsByTagName('button');

console.log(nb);

for ( var j = 0; j < nb.length; j++ ) {
  nb[j].addEventListener('click',function(){
    console.log(this.dataset.count);
    console.log(this.getAttribute('data-count'));
  });
}

// ==================선택자

// 이벤트
/*
  마우스, 키보드, 휠, 창
  목소리, 얼굴
*/






































