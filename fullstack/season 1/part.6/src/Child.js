import React, { Component } from 'react';
import A1 from './A1';
import B1 from './B1';

class Child extends Component {
  render() {
    return (
      <div>
        <h2>Child 컴포넌트</h2>
        <div>App 컴포넌트로 부터 받은 데이터 {this.props.number}</div>
        <button onClick={this.props.change}>숫자증가</button>
        <h2>An 컴포넌트</h2>
        <A1 change={this.props.change}/>
        <h2>Bn 컴포넌트</h2>
        <B1 number={this.props.number}/>
      </div>
    );
  }
}

export default Child;
