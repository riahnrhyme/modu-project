// HTTP 프로토콜 과 JSON
// HTTP 통신 (ajax -> jquery)
// 웹 1.0 -> 4.0
// 프론트엔트 <-> 백엔드

// 프로토콜 -> 약속

/*

  PC, 아이폰, 안드로이드, TV, 자동차
  한국, 일본, 중국 -> 멀티디바이스 -> 프론트엔드
  대화 => 영어 (JSON,XML)
  (러시아, 미국, 베트남) -> 백엔드
  REST API

*/

// HTTP 프로토콜
// get, post, put, delete, header, option

// 저장(스토리지 -> 저장)
// cookie, localstorage, sessionstroage

/*
  cookie -> 기간을 정할수 있다.
  localstorage -> 영구저장이 가능하다. -> 앱
  sessionstroage -> 1회용
*/

// HTTP 프로토콜
/*
  GET : 조회 (SELECT)
  POST : 입력 (INSERT)
  PUT : 수정 (UPDATE)
  DELETE : 삭제 (DELETE)
*/

// GET, POST 만을 사용
// form 태그를 쓰는 방법(PUT,DELETE가 없다.)
// 개발이 편하다.

// REST API
// uri 주소 자원을 가지고 목적을 보여주는 형태

// http://www.modu.com

// http://www.mode.com/frontend/student GET
// http://www.mode.com/frontend/student/2 GET
// http://www.mode.com/frontend/student POST
// http://www.mode.com/frontend/student/2 PUT
// http://www.mode.com/frontend/student/2 DELETE

/*

  http request
  callback
  promise -> 동기,비동기
  fetch api -> es6
  async await -> es7

  dev-jolse.iptime.org:8080
  /company 전체회사
  /company/2 회사 상세정보

*/

// jquery ajax
$.ajax({
  type: 'GET',
  url: 'http://dev-jolse.iptime.org:8080/company',
  success: function(data){
    console.log(data);
    /*
    console.log('성공');
    console.log(data);

    $.each(data.company,function(index,value){
      var tag = '<div>'+value.name+'</div>'
      $('body').append(tag);
    });
    */

    /*
    for(var i=0; i<data.count;i++){
      // var tag = $('<div>');
      // tag.text(data.company[i].name);
      // tag.addClass();
      var tag = '<div class="aa">'+data.company[i].name+'</div>'

      $('body').append(tag);
    }
    */
  },
  error:function(err){
    console.log(err);
  }
});

// javascript http 통신 하기
var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function(){
  // console.log(xhr.readyState);
  // console.log(xhr.status);

  if ( xhr.readyState == 4 && xhr.status == 200 ) {
    console.log(JSON.parse(xhr.response));

    var data = JSON.parse(xhr.response);

    // for(var i in data.company){
    //   var tag = document.createElement('div');
    //   tag.innerHTML = data.company[i].name;
    //   document.body.appendChild(tag);
    // }
  }
}

xhr.open('GET','http://dev-jolse.iptime.org:8080/company', true);
xhr.send();

// promise
function s1(){
  return new Promise(function(resolve,reject){
    console.log('a');
    resolve();
  })
}
function s2(){
  return new Promise(function(resolve,reject){
    console.log('b');
    resolve();
  })
}

var num = 2;
function s3(){
  return new Promise(function(resolve,reject){
    console.log('c');
    setTimeout(function(){
      if ( num == 1 ) {
        resolve();
      } else {
        reject();
      }
    },5000)
  })
}

// s1()
// .then(s3)
// .then(s2);

// s1();
// s2();
// s3();

// s1(function(){
//   s2(function(){
//     s3();
//   });
// });

fetch('http://dev-jolse.iptime.org:8080/company')
  .then(response=>response.json())
  .then(data=>{
    console.log(data);
  })



















