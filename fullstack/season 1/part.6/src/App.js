import React, { Component } from 'react';
import Child from './Child';
import Main from './Main';

class App extends Component {

  constructor(){
    super();

    this.state = {
      number : 0,
    }
  }

  handleClick(){
    this.setState({ number : this.state.number + 1 });
  }

  render() {
    return (
      <div>
        <h1>HTTP 통신 프로토콜</h1>
        {/* http://dev-jolse.iptime.org:8080/company */}
        <Main />
        <hr/>
        <h1>리액트 리덕스</h1>
        <div>App 컴포넌트가 생성한 데이터 {this.state.number}</div>
        <button onClick={this.handleClick.bind(this)}>숫자증가</button>
        <Child
          number={this.state.number}
          change={this.handleClick.bind(this)} />
      </div>
    );
  }
}

export default App;






