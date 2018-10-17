//변수와 자료형
//변하는 수

//variable

var number = 10; //데이터(자료) -> 숫

// 변수는 자료를 담는다.
// 자료에는 종류가 있다. 타입 (자료형)
// 자료는 유동적(형변환)이다. (자바스크립트)
// 변수는 오직 하나의 자료형을 담는다.
// alert(number);
// // console.log(number);
number = 20; // 대입
// // console.log(number);
var open = 20;
var open = 30;
// console.log(open);

// 자료형
// 자료는 변수에 들어 가는 데이터

/*

  자료 -> 값 -> 데이터

  숫자 (number,integer)
  문자 (string,str)
  불리언 (true,false)
  null (비어있는 상태)
  undefined (정의 되어 있지 않다)

  배열
  객체
  함수

*/

var num = 100 * 50; // 숫자
// // console.log(num);

var str = '철수가 "안녕하세요" 라고 했다.';
// // console.log(str);

var str2 = `철수`; // es6~
// // console.log(str2);

var bool = true;
// // console.log(Number(bool));

var empty = null;
var empty2 = undefined;

var momo;
// console.log(momo);

// 변수

var haha = 100; // 리터널
// var haha2 = new Number(100);

// 값에 의한 호출 call by value
// 참조에 의한 호출 call by reference
var bc = haha;
bc = 200;

// console.log(haha);
// console.log(bc);
// // console.log(haha2);



// var a = { c : 10 }
// var b = a;
// b.c = 100;
// // console.log(a)
// // console.log(b)

// 변수 종류
/*
  es5
  var
  es6
  let, const

  지역변수,(local)
  전역변수,(global)
  매개변수,(parameter)
  멤버변수,(property)

*/

var aa = 100; // 함수단위의 변수
let bb = 100; // 블럭단위의 변수
const cc = 100; // 상수
var aa = 200;

bb = 200;
// cc = 200;

// // console.log(aa)
// // console.log(bb)
// // console.log(cc)

// 연산자
// 연산하는 하는 방법
// + - * / (숫자)
// 문자
// 형변환

var num1 = 100;
var num2 = 100;
var total = ((num1 + num2) / 4) * 20;

// console.log(total + 50);


//숫자와 숫자의 연산은 산술 연산 가능하지만
//숫자와 문자 , 문자와 문자의 + 는
//더하기 가 아닌 문자열 붙이기로 실행

// var a = 100;
// int a = '100';

var str1 = '100';
var str2 = 100;
var result = Number(str1) + Number(str2.toString()).toString();
console.log(result);

var sos1 = '철수';
var sos2 = '영희';

var full = '"' + sos1 + '"와 "' + sos2 + '"가 인사를 하고 있다.';
var esfull = `"${sos1}" 와 "${sos2}"가 인사를 하고 있다.`;
console.log(esfull);

/*
  연산자
  +,-,*,/,%(나머지)
  5%2 -> 1

  비교연산자
  -> 참과 거짓으로 구분한다.
  -> 같은가? 다른가? 누가더 커? 누가더 길어?
  논리연산자
  -> 같으면서 다른게 있는가
  부정의미
  -> 비교연산이나 논리연산을 부정하는 것(반대의 의미)
*/

riahnrhyme@gmail.com
developer@jolse.com






























;
