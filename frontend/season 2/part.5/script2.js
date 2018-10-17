//이벤트
var doc = document;
var box = doc.querySelector('.box');

box.addEventListener('mousedown',function(){
  box.style.backgroundColor = 'orange';
  console.log(box.classList);

  // box.classList.remove('box');
  // $('.box').addClass('orange a b');
});

var text = doc.getElementsByName('user');

//keyup,keydown -> keycode
//keypress -<> ascii keycode

text[0].addEventListener('keypress',function(e){
  console.log(text[0].value)
  console.log(e.target.value)
  if ( e.keyCode == 13 ) {
    console.log('a');
  }
});

/*
  scroll
  resize
*/











