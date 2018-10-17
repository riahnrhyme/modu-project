// 함수

// 상자에 있는 가지의 수

/*
  1. 자주 사용되는 코드를 별도의 파일로 만들어서 필요할때마다 재활용 할 수 있다.
  2. 코드를 개선하면 이를 사용하고 있는 모든 어플케이션의 기능이 개선이 된다.
  3. 코드 수정시에 필요한 로직을 빠르게 찾을수 있다.
  4. 필요한 로직만을 로드하기 때문에 메모리의 낭비를 줄일 수 있다.
*/

// 함수 -> 값 -> 자료 -> 형 -> 함수
// 변수에는 값을 담을수 있다.
/*
function(기능을 하기 위한 준비물){
  기능의 정의
}
*/
// 이름의 맨앞이 대문자 이면 클래스로써 사용하는 함수
function name(){
  alert('a');
}

// 실행 (호출 : call)
// console.log(a);
// var a = 100;
// name();

// 값으로서의 함수
var pp = function(){ // 익명함수
  // console.log('a')
}

pp();

(function(){ // 자체실행 함수 -> 가급적 사용하지 말자
  // console.log('b');
})()

// 함수는 반환이라는 개념
// return
// 함수를 종료한다.
function plus(a=0,b=0,c=0){ // 파라미터 매개변수
  return a + b + c;
}

var res = plus(20);
var res1 = plus(30,30,40);
// console.log(res);
// console.log(res1);

// 데이터
// 숫자, 문자, 불리언, null, undefined
// 데이터 묶음
// 자료형
// 배열과 객체

// 배열(Array)
// 순서가 존재하는 데이터 묶음
var a = 10;
var b = '문자';
var arr = [ 10, '문자', null, 20 ];

// console.log(arr);
// console.log(arr.length);
// console.log(arr[0] + a); // index
arr[10] = 100; // 데이터 인덱스를 사용해서 넣는다.
// console.log(arr[10]);

// 배열 데이터를 넣는 방법
// push, pop, shift, unshift
var arr1 = [ 10, 20, 30 ]
arr1.push(100); // 데이터를 맨뒤에 넣는다.
arr1.push(100); // 데이터를 맨뒤에 넣는다.
arr1.push(100); // 데이터를 맨뒤에 넣는다.
arr1.pop(); // 데이터를 맨뒤부터 뺀다.
arr1.unshift(200); // 데이터를 맨앞에 넣는다.
arr1.unshift(300); // 데이터를 맨앞에 넣는다.
arr1.shift(); // 데이터를 맨앞부터 뺀다.
// console.log(arr1);

// 알고리즘 과 자료구조
// 자료구조
// 큐(queue) 랑 스택(stack)
// 큐 맨뒤로 넣어서 앞쪽부터 뺀다. push shift
// 스택 맨뒤로 넣어서 뒤쪽부터 뺀다. push pop

var number = [ 10, 20, 30, 40, 50, 1000 ];
var total = 0;

// ???
// total = number[0] + number[1].....
for(var i = 0; i < number.length; i++){
  total = total + number[i];
}

// console.log(total / number.length); // number 의 모든수가 더해진 결과도출

// 다차원 배열
// var a = [10,20]
// a[0]


var quiz = [ [[50],60] , [70,90] ];
var result = quiz[0][0][0] + quiz[1][1];
// console.log(result); // 140

// 객체(object)
// 순서가 존재 하지 않는다.
// 키(key) 와 벨류(value)
var k = 10;
var p = '문자';
var obj = { k:10 , p:'문자', q:null, l:20 }

// console.log(k); //10
// console.log(obj);
// console.log(obj.k + k); //
obj.u = 100;
delete obj.k; // 키값을 삭제 할때
// console.log(obj.u);

// JSON -> 영어
var quiz2 = { a : [ 50,60 ] , b : [ 70,90 ] }
var result2 = quiz2.a[0] + quiz2.b[1]
// console.log(result2); //140

var play = { a : 100 , b : 100 }
var uu = 'a';


// console.log(play.b)
// console.log(play[uu]) // 키값을 변수로 쓸수 있다.

var avg = { a:98, b:80, c:90, d:60 }

// for in
var hh = 0;
var count = Object.keys(avg);
// 키만 빼서 배열로 나열한다.
// console.log(count.length)
for( key in avg ){
  // console.log(avg[key])
  hh = hh + avg[key];
}
// console.log(hh/count.length)




// var xxx = {a:10,b:20};
// var yyy = [10,20]
// for ( oop in yyy ) {
//   console.log(oop)
// }

// 숙제
// 5개의 학급의 평균 나열해라

var student = {
  cls : {
    count : 5,
    info : [
      { a:100, b:90, c:85 },
      { a:80, b:70, c:95 },
      { a:70, b:40 },
      { a:90, b:50, c:55 },
      { a:30, b:70 },
    ]
  }
}
var toy = student.cls.info[0].b
// document.write(toy);

// 박수
for(var m=1; m <= 5; m++){
  document.write('다녀와');
  document.write('<br/>');
  for(var n=0; n < m; n++ ){
    document.write('짝짝짝');
    document.write('<br/>');
  }
  document.write('<br/>');
}
// 숫자의 갯수와 상관없이 결과를 만들어 내는 함수

function sum(numberArray){ //[10,20]
  var sumResult = 0;
  for( var index in numberArray ){
    console.log(index)
    // 숙제
    // 맨마지막 앞의 숫자를 제외하고 더해라

    sumResult= sumResult + numberArray[index];
  }
  return sumResult;
}

var sum1 = sum([10,20]);
var sum2 = sum([30,40,50]);
var sum2 = sum([30,40,50,90,100]);
console.log(sum1);
console.log(sum2);


































































// var x = 10;
// var y = x;
// console.log(x)
// y = y + 10;
// console.log(y)
//
// var xx = [10,20];
// var yy = xx;
// console.log(xx);
// yy[0] = 20;
// console.log(yy);








