import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increse, decrese } from './actions';

class A3 extends Component {
  render() {
    return (
      <div>
        <h3>A3 컴포넌트</h3>
        <button onClick={this.props.onIncrese}>숫자증가</button>
        <button onClick={this.props.onDecrese}>숫자감소</button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrese : ()=>{ dispatch(increse()) },
    onDecrese : ()=>{ dispatch(decrese()) }
  }
}

export default connect(null,mapDispatchToProps)(A3);
