import React, { Component } from 'react';
import axios from 'axios';

// axios npm 검색 해서 API 문서 보기
// es6 promise 비동기 처리
// es7 async await
/* http://dev-jolse.iptime.org:8080/company */
/*

  HTTP 통신 프로토콜(약속)

  GET : 조회 (SELECT)
  POST : 입력 (INSERT)
  PUT : 수정 (UPDATE)
  DELETE : 삭제 (DELETE)

  status code

  100
  200 -> 성공
  300
  400 -> 오류(클라이언트)
  500 -> 오류(서버)

*/

class Main extends Component {

  constructor(){
    super();

    this.state = {
      list : []
    }
  }

  componentDidMount(){
    axios.get('http://dev-jolse.iptime.org:8080/company')
      .then(response=>{
        console.log(response);
        this.setState({ list : response.data.company });
      })
      .catch(error=>{
        console.log(error);
      });
  }

  handleData(){
    axios.get('http://dev-jolse.iptime.org:8080/company')
      .then(response=>{
        console.log(response);
        this.setState({ list : response.data.company });
      })
      .catch(error=>{
        console.log(error);
      });
  }

  render() {

    const { list } = this.state;

    return (
      <div>
        <button
          onClick={this.handleData.bind(this)}>
          데이터 가지고 오기</button>
          {
            list.map((value)=>{
              return <div key={value.id}>{value.name}</div>;
            })
          }
      </div>
    );
  }
}

export default Main;
