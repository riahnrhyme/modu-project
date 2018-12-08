import React, { Component } from 'react';

class B3 extends Component {
  render() {
    return (
      <div>
        <h3>B3 컴포넌트</h3>
        <div>상위 컴포넌트로 부터 받은 데이터 {this.props.number}</div>
      </div>
    );
  }
}

export default B3;
