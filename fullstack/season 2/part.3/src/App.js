import React, { Component, Fragment } from 'react';
import Make from './Make';
/*
  JSX문법
  XML기반의 태그 문법
*/

/*
  let a = { n1 : 100 , n2 : 200 }
  a.n1
  let { n1, n2 } = a;
  n1
*/

class App extends Component {

  render(){ // 함수

    let title = 'React';
    let title2 = 'Vue';

    let number = 10;
    // (조건) ? 참 : 거짓
    // 조건 && 참이면 실행

    return(
      <Fragment>
        <h1>{number>5?title:title2} 프로젝트</h1>
        <h2>{number>5&&title} Application</h2>
        <h2>{(()=>{
          if(number>5) return title
        })()} Application</h2>
        <Make />
      </Fragment>
    )
  }
}

export default App;









