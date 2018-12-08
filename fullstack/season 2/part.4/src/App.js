import React, { Component, Fragment } from 'react';
import Parent from './Parent';
/*
   App
    |
  Parent
  |    |
 A1    B1
  |
 A2

 state는 직접변경을 하면 안된다.
 state를 변경하기 위해서는 setState를 사용해야 한다. 그 이유는 state가 setState를 통해서 값이 변경되면 해당 컴포넌트는 재랜더링을(render메소드 실행) 한다

 이때 DOM이 이전 DOM 상태와 동일한 부분은 업데이트를 하지 않는다.
 Virtual DOM의 역활이다.
*/

class App extends Component {

  constructor(){
    super();

    this.state = { // 멤버변수(property)
      number : 10,
      count : 0,
      group : {
        a : 10,
        b : 20,
        c : 30
      }
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(plus){
    // this.state.number = this.state.number + 10;
    this.setState({
      ...this.state,
      number : this.state.number + plus,
      group : { ...this.state.group, b : 100 }
    });
  }

  render(){
    return(
      <Fragment>
        <Parent />
        {/*<h1>App 컴포넌트</h1>
        <h3>App 컴포넌트가 만든 데이터 {this.state.number}</h3>
        <button onClick={()=>{
          this.handleClick(100);
        }}>숫자증가</button>
        <hr />
        <Parent
          number={this.state.number}
          open={this.handleClick}
          />*/}
      </Fragment>
    )
  }
}

export default App;






















