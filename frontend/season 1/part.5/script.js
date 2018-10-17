// DOM API
/*
  $(선택자).on('이벤트',기능);
*/
function test(){
  alert('b');
}

// 비표준
/*document.getElementById('third').onclick = function(){
  alert('c');
}*/

// 표준 IE 10 이하에서 적용 되지 않는다.
// 대상 -> 행위 -> 기능
var doc = document;
var open = doc.getElementById('open');

// open.addEventListener('click',function(){
//   alert('d');
// });

// 선택자
// 클래스
var color = doc.getElementsByTagName('button');

// color[0].addEventListener('click',function(){
//   alert('실행');
// });

for ( var i = 0; i < color.length; i++ ) {
  color[i].addEventListener('click',function(){
    alert(i);
  });
}

i++;

var nemo = doc.querySelector('.nemo');
var nemoGroup = doc.querySelectorAll('.nemo');
// console.log(nemoGroup)

nemo.addEventListener('click',function(){
  for(var i = 0;i<nemoGroup.length;i++){

    nemoGroup[i].innerHTML = 'hello';
  }
});

// $('.list p')
var list = doc.querySelector('.list');
var ptag = list.getElementsByTagName('p');
// console.log(list);

// document.querySelector('.list').getElementsByTagName('p')

// 텍스트 박스 값을 핸들링
var plus = 0;

doc.getElementById('user')
  .addEventListener('click',function(){
    plus = plus + 100;
    doc.getElementById('user').value = plus;
    doc.getElementById('user').classList.add('cc');
    doc.getElementById('user').classList.add('dd');
});

var ga = doc.getElementById('ga');
ga.addEventListener('click',function(){
  doc.getElementById('user').classList.remove('cc');
  var a = doc.getElementById('user').value;
  var b = doc.getElementById('user').classList;
  // console.log(b)
  console.log(b)
});

var li = doc.getElementById('list');
var box = li.getElementsByClassName('box');
// 숙제
// 완성시켜 와라
for ( var j = 0; j < box.length; j++ ) {
  box[j].addEventListener('click',function(){
     // console.log(box[j].style)
     // box[j].style.color = 'red';
    this.previousElementSibling.style.color = 'red';
    this.nextElementSibling.style.color = 'red';
  });
}

// 


















