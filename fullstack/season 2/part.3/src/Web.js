import React, { Component, Fragment } from 'react';
import Parent from './Parent';
/*
  index        (store) - reducer - action - dispatch
    |
   Web
    |
  Parent
  |    |
 Ca    Cb

 redux - 라이브러리
*/

class Web extends Component {

  constructor(){
      super();

      this.state = {
        title : 'Redux', // State(O), Data(O)
        number : 0
      }
  }

  // state = {
  //
  // }

  handleClick(){
    console.log(this.state.title);
  }

  handleClick2 = () => {
    console.log(this.state.title);
  }

  render(){

    let text = 'React'; // State (X) , Data (O)

    return(
      <Fragment>
        <h2>{this.state.number} 만든 데이터</h2>
        <button
          onClick={this.handleClick2}>
          숫자증가
        </button>
        <Parent
          aa={this.state.title}
          number={this.state.number}/>
      </Fragment>
    )
  }
}

export default Web;

/*

  데이터
  Virtual DOM -> 메모리상에 태그를 기억하고 있다가 데이터가변하면 영향이 가는 DOM만 새로 업데이트를 시킨다.

  단방향 데이터 바인딩 (React) -> 라이브러리
  양방향 데이터 바인딩 (Angular) -> 프레임워크

  Props -> 상위 컴포넌트로 부터 전달받은 데이터
  State -> 자기 자신(컴포넌트) 가 만든 데이터

*/





















