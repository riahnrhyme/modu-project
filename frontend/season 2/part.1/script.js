/*

  javascript -> 바닐라코딩 -> 있는 그래도 사용
  es5 이하 버전

  es6 이상 버전 (ECMAScript2015)
  같이 진행

  변수
  자료형
  연산
  조건
  반복
  객체 , 배열
  함수

*/

// 자료형 -> 자료의 형태(type)
/*

  숫자(Number) -> 10 , 20, 100
  문자(String) -> '문자',"문자",'10'
  불리언(Boolean) -> true, false
  null -> 비어 있다.
  undefined -> 정의 되어 있지 않다.

  객체 object
  배열 array
  함수 function

*/

// 변수(variable)
// 자료를 담는 컵
// 메모리에 값는 저장하는 것
// 변수 = 값

var a = 10;
// console.log(a)
a = a + a;
a = a + a;
// console.log(a)

var num = null;
var str = '50';
var num1 = 'true';

// console.log(typeof true)

var momo = 100;
var momo = 200;
momo = 300;

//console.log(momo);

// es6 변수 표현
// let, const

// let nono = 100;
const nono = 100;
// nono = 200;

//console.log(nono);

var ioi = '철수와 영희가 "다른속도"로 다릴때 사람은 수학을 포기한다.'
//console.log(ioi)

var oo = `철수와 """영희`;
//console.log(oo);

var pp = 10;
// console.log(Number(pp))
var mo = Number(pp.toString()).toString();
console.log(mo);

console.log(Number(false));

// 연산
// + - * / %
// 자동 형변환
// 숫자 + 숫자 = 산술연산
// 숫자 + 문자, 문자 + 문자 = 문자열붙이기
var n1 = 100;
var n2 = 5;
var n3 = 10;
var result = (n1 + n2) * n3;

// console.log(result);

var s1 = '철수';
var s2 = '영희';
// var r1 = s1 + '와 ' + s2 + '가 만나서,' + s1 + '가';
var r1 = `${s1}와 ${s2}가 만나서, ${s1}가...`;

console.log(r1);

/*

  변수 종류

  var -> 함수의 단위 변수
  let -> 블럭단위 변수

  전역변수 -> global -> 가급적 사용하지 마라
  지역변수 -> 함수내에 변수 -> local
  매개변수 -> parameter
  멤버변수 -> property -> class
*/

// 내장객체 -> 기본적으로 사용할수 있는 기능

console.log(Math.pow(3,2));
console.log(Math.random());

console.log(0.456.toFixed(2))
console.log(parseInt('1101',2));

/*

  자바스크립트는 형변환이 일어난다.
  그래서 자료형을 정해놓고 사용할수 있는
  방법이 유행중이다.

  타입스트립트 (TypeScript)

*/
var q = 100;
var number:q = 100;

/*

  1. 채용정보 사이트 자주 들어가라
  (원티드, 잡플래닛, 로켓펀치 등...)
  2. 블로그 개설하기 (개발자)

     riahnrhyme

*/










































































