/*

  javascript -> 바닐라코딩
  es6 (ECMAScript2015)
  es5 & es6

  변수, 자료형, 연산

*/

// 자료 & 자료형
/*
  숫자 (Number) (int,integer) -> 10, 20, 30
  문자 (String) -> '문자',"문자",`문자`(es6)
  불리언 (boolean) -> true,false
  null -> 비어있는 상태
  undefined -> 정의되어 있지 않다.

  객체
  배열
  함수

  자료는 결국 값이다.
*/

// 변수
/*
  변수는 하나 값을 담는다.
  variable
*/

// console.log(a)
var a = 10;
a = 20;
// console.log(a)

var n = 100;
var n = 200;
// console.log(typeof n);

//es6 변수 let, const
const v = 100;
// v = 200;
// let v = 200;
// console.log(v);
var b = "10";
// console.log(typeof b);

//es6
var c = `철수가 영희 "달리기"
    경        주를 했다.`
var c1 = '철수가 영희 "달리기" \
경주를 했다.'
// console.log(c)
// console.log(c1)

var d = '10';
console.log(Number(Number(d).toString()))
// console.log(typeof Number(d))
var p = Number(true);
console.log(p);

/*
  변수

  전역변수(global) -> 함수
  지역변수(local) -> 함수
  매개변수(parameter) -> 함수
  멤버변수(property) -> 클래스 (7주차)
*/

var n1; // 클래스
var number_count; // 스네이크 표기법
var numberCount; // 카멜표기법
var open = 10;

var m1 = 0.1;
var m2 = 0.2;
var t = m1 + m2;
console.log(Number(t.toFixed(1))); // 부동소수점의 오류

// 수학 Math
// 변수 긴 내용을 줄여 쓰고 싶을때 , 재활용

// 연산자 + - * / %
// 자동형변환
// 숫자와 숫자의 + 는 산술연산이 가능하다.
// 문자+문자,숫자+문자 에 +는 문자열 붙이기로 동작한다.

var k = 5;
var w = 3;
var res = k % w;

console.log(res);

var aa = '철수';
var bb = '영희';
var cc = aa +'가 ' + bb + '를' + ' ' + '만나러간다.';
var dd = `${aa}가 ${bb}를 만나러간다.`

console.log(dd);

riahnrhyme












