/*

  자료 -> 값 -> 자료형

  숫자, 문자, 불리언, null, undefined
  배열, 객체, 함수

  변수에는 값이 대입될수 있다.

*/

// 배열 과 객체
// 데이터 묶음
// 배열 -> 순서가 있다.
// 객체 -> 순서가 없다. (키를 사용한다.)

// 배열
var a = 10;
//var b = '문자';
// b.length

var arr = [10,'문자',null]; // 2 -> 길이(length)
// console.log(arr.length)
a = 20;
arr[0] = 20; // 재정의
arr[8] = 100; // 생성
// console.log(a);
// console.log(arr[8]);
// console.log(arr.length)

// 값 ?? 참조 ??
var c = 10;
var d = c; // call by value
d = 20;
// console.log(c);
// console.log(d);

var e = [10];
var f = e; // call by reference
f[0] = 20;
// console.log(e);
// console.log(f);



var arr2 = [ 10, 20, 30 ];

// arr2[3] = 100;
arr2.push(100);
arr2.push(100);
arr2.push(100);
arr2.push(100);
arr2.pop();
arr2.pop();
arr2.unshift(200);
arr2.shift();
// console.log(arr2);

// 자료구조
// 스택, 큐

// 객체
// 정보를 담고 있는 상자
var t = 10;
var u = '문자';

var obj = { t:10, u:'문자' }
var asd = obj
obj.p = 100;
obj.t = 200;
delete asd.u;
// console.log(t);
// console.log(obj);

// 배열 다차원 배열

var open = [ [ 50 , 70 ] , [ [80] , 90 ] ];
var total = open[0][1] + open[1][0][0];

//console.log(total); // 150;

//JSON
var open2 = { a: [ 50 , 70 ] , b: [ 80 , 90 ] }
var total2 = open2.a[1] + open2.b[0];

//console.log(total2); // 150

// 배열과 객체를 만드는 방법
// 리터널 방식
var aa = [];
var bb = {};
// 내장 객체 활용
// var cc = new Array();
// var dd = new Object();

// 평균을 구해보자.
var s = [ 98, 80, 70, 40 ];
var avg = 0;
var sum = 0;
var s_count = s.length;

for( var i = 0; i < s_count; i++ ){
  console.log(s[i])
  sum = sum + s[i];
}
console.log(sum);
avg = sum / s_count;

console.log(avg);

// 객체

var op = { a:70, b:80, c:100, d:90 }
// op.a;
// op[a]
var sadfasf = 'a';
for ( index in s ) {
  console.log(index)
}

// 클래스 평균구하기

{
  count : 2,
  cls : [
    { a : 100, b : 50 } ,
    { a : 70, b: 80 }
  ]
}

// 두학급의 평균을 나열하시오.




















