//반복문
// for, while, do while

// .text('<div>반복문</div>') ,
// .html('<div>반복문</div>')

/*
document.write('<div>반복문</div>');
document.write('<div>반복문</div>');
document.write('<div>반복문</div>');
document.write('<div>반복문</div>');
document.write('<div>반복문</div>');
*/
/*
for(초기값;조건;증감){
  초기값을 기준으로 조건에 맞으면 실행
  실행이 끝나고 나면 증감을 적용해서 다음 실행 한다.
}
*/

// i++, ++i

for( var i = 0; i < 5; i++ ) {
  console.log(i);
  if ( i == 3 ) {
    break;
  }
  // document.write('<div>' + i + '번 실행하기</div>');
}

console.log(i); // 전역변수 -> 가급적 사용하지 말자

for(var j = 0; j < 5; j++){
  //document.write('<div>다녀와</div>');
  for(var k = 0; k < 3; k++){
    //document.write('<div>박수쳐</div>');
  }
  //document.write('<br />');
}

// 이번주는 구구단을 구현해보세요
/*
  2 x 1 = 2
  2 x 2 = 4
*/

// 2. 별을 찍어라
/*

  *
  **
  ***
  ****
  *****

*/

// while

var p = 0;

while(p > 5){
  document.write(p++);
}

var q = 0;

do {
  document.write(q++);
} while(q > 5)

console.log(q);












