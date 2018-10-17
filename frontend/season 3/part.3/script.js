// 이중포문
for ( var i = 1; i < 6; i++ ) {
  document.write('<div>다녀와</div>');
  for ( var j = 0; j < i; j++ ) {
    document.write('<div>짝짝짝</div>');
  }
}

// while, do while

var b = 20;

while(b < 10){
  console.log('a');
  b++;
}

var c = 20;

do {
  // console.log('a');
  c++;
} while(c < 10)

// 반복문 끝

// 데이터
// 자료 -> 값
// 객체, 배열, 함수

// 배열 (array)
// 자료의 묶음
// 순서가 존재하는 데이터 묶음
// 배열의 시작은 0이다. (index)

var a1 = 10;
var a2 = '문자';

var arr = [ 10, '문자', true, null, undefined ];
arr[5] = 100;
arr[8] = 200;
// console.log(arr);
// console.log(arr[5]);

var arr1 = [10,20,30,40,50];
// 데이터를 담고 빼고 하는 기능에 대한 설명
// push pop shift unshift
arr1.push(100);
arr1.push(200);
arr1.push(300);
arr1.pop();
arr1.unshift(100);
arr1.unshift(200);
arr1.shift();
// console.log(arr1);

// 자료구조
// 스택 과 큐
// 스택 -> 맨뒤에서 넣어서 맨뒤부터 뺀다. (push pop)
// 큐 => 맨뒤에서 넣어서 맨앞부터 뺀다. (push shift)

// 숙제
// 가장 낮은 점수를 제외한 평균을 구하라
var arr3 = [ 90,89,79,82,64,70 ];
// var total = arr3[0] + ..... / 5
var total = 0;
for ( let i = 0; i < arr3.length; i++ ) {
  total = total + arr3[i];
}

// console.log(total/arr3.length);

// 다차원 배열
var arr4 = [ [ 50 , 60 ] , [ [ 80 ], 100 ] ];
var quiz = arr4[0][1] + arr4[1][0][0];

// console.log(quiz); // 140;

// 배열 끝

// 객체(개 중요) : object
// 데이터의 묶음
// 순서가 존재하지 않는 데이터 묶음
// key와 value
// $(aaa).addClass();
// document.write();

var obj = { a:10 , b:'문자', d:true, k:null, c:undefined }

var aa = [10,20,30];
var ss = 1;
// console.log(aa[ss]);

var pp = 'a';
// console.log(obj.b);
// console.log(obj[pp]);

var obj2 = { a: 10, b: 20, c: 30 }
obj2.d = 100;
delete obj2.a;

// call by value 값의 복사
var v = 10;
var x = v;
x = 20;
//console.log(v);
//console.log(x);

// call by reference 값의 참조
var op = obj2;
op.b = 100;
//console.log(op);
//console.log(obj2);

// 퀴즈
// JSON
var data = {
  arr1 : [ { a: 50 } , { b: 70} ] ,
  arr2 : [ 80 , 90 ]
}
var result = data.arr1[0].a + data.arr2[1];

// console.log(result); // 140

// JSON, XML
// 프론트엔드 <=> 백엔드

var obj3 = { a: 90, b: 80, c:92, d:76 }
var arr5 = [ 90, 80, 92, 76 ]
// for in
var to = 0;
var len = Object.keys(obj3).length;
console.log(len);
for ( var key in obj3 ) {
  console.log(key)
  to = to + obj3[key]
}

console.log(to);








































