// window.onload = function(){
// document.addEventListener('DOMContentLoaded',function(){

var doc = document;
var box = document.querySelector('.box');

var move = 0;
// setInterval은 사용하지 않을경우 꼭 정지 시켜줘야 좋다.
// clearInterval(멈출 내용);
// $('.box').animate({ left : 100 },function(){})
box.addEventListener('click',function(){
  // box.style.marginLeft = '100px';
  var ani = setInterval(function(){
    console.log('a');
    if ( move > 100 ) {
      clearInterval(ani);
      return;
    }
    move = move + 1;
    box.style.top = move + 'px';
  },20);
});
// 숙제 1 : 형제태그 스타일 변경 완성하기
// 숙제 2 : 세자리 마다 콤마 찍기
// 숙제 3 : 도형 이동하기 (예제)









// })