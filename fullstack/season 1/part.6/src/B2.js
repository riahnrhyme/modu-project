import React, { Component } from 'react';
import B3 from './B3';
import { connect } from 'react-redux';

class B2 extends Component {
  render() {
    return (
      <div>
        <h3>B2 컴포넌트</h3>
        <div>Redux Store로 부터 받은 데이터 {this.props.num}</div>
        <div>Redux Store로 부터 받은 데이터 {this.props.a}</div>
        <div>Redux Store로 부터 받은 데이터 {this.props.text}</div>
        <B3 number={this.props.number}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    num : state.count.num,
    a : state.count.a,
    text : state.close.open
  }
}

export default connect(mapStateToProps,null)(B2);
