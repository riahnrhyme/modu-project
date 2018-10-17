// HTTP 프로토콜 과 JSON
// HTTP 통신 (ajax -> jquery)
// 웹 2.0 -> HTTP 통신
// 프론트엔드 <-> 백엔드

// 프로토콜 = (약속)
// json = 약속된 포맷

/*

  한국(백엔드), 일본(모바일), 중국(데스크탑)
  펜팔

  한국 -> 일본(한국어)
  한국 -> 중국(한국어)

  일본,중국 -> 한국

  약속(프로토콜) -> 검색, 봐라
  영어(JSON)로 대화를 하자

*/

// HTTP 프로토콜
// uri, get, post, put, delete, header, cookie(세션)
// localstorage, sessionstorage (HTML5)
/*

  저장

  cookie -> 기간설정
  localstorage -> 영구저장(모바일)
  sessionstorage -> 1회용

*/

// GET, POST, PUT, DELETE
/*
  GET : 조회 (select)
  POST : 입력 (insert)
  PUT : 수정 (update)
  DELETE : 삭제 (delete)
*/

// GET(DELETE), POST(PUT) 만을 사용한다.
// form PUT, DELETE 이 없다.
// 편하게 개발을 할 수 있다.

// RESTful API
// uri 자원을 가지고 목적을 보여주는 형태

// www.modu.com

// www.modu.com/frontend : GET
// www.modu.com/frontend : POST
// www.modu.com/frontend/1 : PUT
// www.modu.com/frontend/1 : DELETE

// GraphQL(협업) VS REST API(개발자가 적을때)

/*

  http request
  promise(비동기 처리)
  fetch API(promise)
  ajax(jquery)

  dev-jolse.iptime.org (백엔드서버)
  8080 포트
  dev-jolse.iptime.org:8080
  company
  dev-jolse.iptime.org:8080/company (전체조회)
  dev-jolse.iptime.org:8080/company/??
  (상세정보)

  포스트맨

*/

// http request

// ajax api

$.ajax({
  type : 'GET',
  url : 'http://dev-jolse.iptime.org:8080/company',
  success : function(data){ // response
    console.log(data);
    var company = data.company;
    $.each(company,function(index,value){
        // console.log(value.name)
        // var tag = $('<div>');
        // var tag = '<div>' + value.name + '</div>'
        // tag.text(value.name);
        // $('body').append($('<a/>', {
        //   href: 'https://www.google.co.kr',
        //   text: value.name
        // }));
    });
  },
  error : function(err){
    // console.log(err);
  }
});

// JSON (키와 벨류의 모음)
// 객체 와 배열
// 데이터만으로 서비스의 이해가 가능해야 한다.


// javascript

var xhr = new XMLHttpRequest();
// console.log(xhr)

xhr.open('GET','http://dev-jolse.iptime.org:8080/company', true);

xhr.send();

xhr.onreadystatechange = function(){
  // console.log(xhr.readyState);
  // console.log(xhr.status);
  // console.log(xhr.response);

  if ( xhr.readyState == 4 && xhr.status == 200 ) {

    var data = JSON.parse(xhr.response)
    console.log(data);
  }
}

// promise
// 콜백

function s1(){
  return new Promise(function(resolve,reject){
    resolve();
    console.log('a')
  });
}

function s2(){
  return new Promise(function(resolve,reject){
    resolve();
    console.log('b')
  });
}

function s3(){
  var a = new Promise(function(resolve,reject){
    resolve();
    console.log('c')
  });

  return a;
}

async function aa(){
  await s1();
  await s3();
  await s2();
}

// aa();

// s1()
//   .then(s3)
//   .catch(function(e){console.log(e)})
//   .then(s2)
//   .then(function(){
//     console.log('end')
//   })
//   .catch(function(err){
//     console.log(err);
//   });

// Fetch API
fetch('http://dev-jolse.iptime.org:8080/company')
  .then(response => response.json())
  .then(data => {

    const company = data.company;

    company.map(value => {

      // if ( value.favorite > 0 ) {
      //
      // } else {
      //
      // }

      let tag = document.createElement('div');
      let text = document
        .createTextNode(value.name);
      tag.appendChild(text);
      document.body.appendChild(tag);
    });

    // var tag = document.createElement('div');
    // var text = document
    //   .createTextNode(company[0].name);
    // tag.appendChild(text);
    // document.body.appendChild(tag);
  });


























