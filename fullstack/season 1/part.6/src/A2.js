import React, { Component } from 'react';
import A3 from './A3';

class A2 extends Component {
  render() {
    return (
      <div>
        <h3>A2 컴포넌트</h3>
        <button onClick={this.props.change}>숫자증가</button>
        <A3 />
      </div>
    );
  }
}

export default A2;
